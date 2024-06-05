import React, { useState, useRef } from "react";
import "./css/Blog.css";
import ContainerSection from "./ContainerSection";
import { blog1, blog2, blog3 } from "../utils";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const blogContent = [
	{ date: "April 15,2023", title: "Grow Your Following by Building Trust Worthy Brand", name: "Manikanta", image: blog1 },
	{ date: "April 15,2023", title: "Grow Your Following by Building Trust Worthy Brand", name: "Manikanta", image: blog2 },
	{ date: "April 15,2023", title: "Grow Your Following by Building Trust Worthy Brand", name: "Manikanta", image: blog3 },
];

function Blog() {
	return (
		<ContainerSection className="sec-padding blog-section">
			<div className="row justify-content-center">
				<div className="col-lg-11">
					<p className="s-title mb-2 text-center">Our News from Blogs</p>
					<h2 className="text-center  sec-title">
						Latest news, advices & best <br /> <span>posts from the blog</span>
					</h2>
					<div className="row gx-5 mt-3 mt-md-5 mb-5">
						{blogContent.map((blog, index) => (
							<div className="col-lg-4" key={index}>
								<SingleBlog blog={blog} index={index} />
							</div>
						))}
					</div>
				</div>
			</div>
		</ContainerSection>
	);
}

function SingleBlog({ blog, index }) {
	const cardRef = useRef(null);

	useGSAP(() => {
		gsap.from(cardRef.current, {
			y: 180,
			scrollTrigger: {
				trigger: cardRef.current,
				start: "top 80%",
				end: "bottom 50%",
				scrub: 1,
				// markers: true,
			},
		});
	}, []);

	return (
		<div className="s-blog p-relative">
			<div className="image-wrapper">
				<img src={blog.image} alt="" className="background-image" />
			</div>
			<div className="blog-content" ref={cardRef}>
				<p className="m-heading">{blog.date}</p>
				<h3 className="mt-2">{blog.title}</h3>
				<p className="m-heading mt-2">{`by ${blog.name}`}</p>
			</div>
		</div>
	);
}
export default Blog;
