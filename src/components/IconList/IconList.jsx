import React from "react";
import "./IconList.css";

function IconList({ listArray = [], refValue, icon = null, ...props }) {
	return (
		<div {...props}>
			<ul className={icon ? "icon-list" : ""} ref={refValue}>
				{listArray.map((content, index) => (
					<li key={index}>
						{icon && <img className="icon" src={icon} alt="list-icon" />}
						{content}
					</li>
				))}
			</ul>
		</div>
	);
}

export default IconList;
