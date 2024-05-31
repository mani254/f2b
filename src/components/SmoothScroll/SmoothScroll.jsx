// SmoothScroll.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children, smoothness = 0.7 }) => {
	const contentRef = useRef(null);
	const viewportRef = useRef(null);

	useEffect(() => {
		if (contentRef.current && viewportRef.current) {
			smoothScroll(contentRef.current, viewportRef.current, smoothness);
		}
	}, [smoothness]);

	return (
		<div ref={viewportRef} style={{ overflow: "hidden", height: "100vh", width: "100%" }}>
			<div ref={contentRef} style={{ overflow: "visible", width: "100%" }}>
				{children}
			</div>
		</div>
	);
};

export default SmoothScroll;

function smoothScroll(content, viewport, smoothness) {
	content = gsap.utils.toArray(content)[0];
	smoothness = smoothness || 2;

	gsap.set(viewport || content.parentNode, { overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 });
	gsap.set(content, { overflow: "visible", width: "100%" });

	let getProp = gsap.getProperty(content),
		setProp = gsap.quickSetter(content, "y", "px"),
		setScroll = ScrollTrigger.getScrollFunc(window),
		removeScroll = () => (content.style.overflow = "visible"),
		killScrub = (trigger) => {
			let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0];
			scrub && scrub.pause();
			trigger.animation.progress(trigger.progress);
		},
		height,
		isProxyScrolling;

	function refreshHeight() {
		height = content.clientHeight;
		content.style.overflow = "visible";
		document.body.style.height = height + "px";
		return height - document.documentElement.clientHeight;
	}

	ScrollTrigger.addEventListener("refresh", () => {
		removeScroll();
		requestAnimationFrame(removeScroll);
	});
	ScrollTrigger.defaults({ scroller: content });
	ScrollTrigger.prototype.update = (p) => p;

	ScrollTrigger.scrollerProxy(content, {
		scrollTop(value) {
			if (arguments.length) {
				isProxyScrolling = true;
				setProp(-value);
				setScroll(value);
				return;
			}
			return -getProp("y");
		},
		scrollHeight: () => document.body.scrollHeight,
		getBoundingClientRect() {
			return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
		},
	});

	return ScrollTrigger.create({
		animation: gsap.fromTo(
			content,
			{ y: 0 },
			{
				y: () => document.documentElement.clientHeight - height,
				ease: "none",
				onUpdate: ScrollTrigger.update,
			}
		),
		scroller: window,
		invalidateOnRefresh: true,
		start: 0,
		end: refreshHeight,
		refreshPriority: -999,
		scrub: smoothness,
		onUpdate: (self) => {
			if (isProxyScrolling) {
				killScrub(self);
				isProxyScrolling = false;
			}
		},
		onRefresh: killScrub,
	});
}
