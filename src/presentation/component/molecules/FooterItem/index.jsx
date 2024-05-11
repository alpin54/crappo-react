// -- core
import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// -- style
import style from "./style.module.scss";

// -- hooks
import useDeviceSize from "core/hooks/useDeviceSize";

const FooterItem = (props) => {
	const { title, list } = props;

	const [width] = useDeviceSize();

	const [isActive, setIsActive] = useState(false);

	const [height, setHeight] = useState(0);
	const accRef = useRef(null);
	let showClass = "";
	let styleActive = {};

	// use layout effect
	useLayoutEffect(() => {
		setHeight(accRef.current.offsetHeight);
	}, []);
	if (width < 767.98) {
		showClass = isActive ? "show" : "";
		styleActive = isActive ? { paddingBottom: height } : {};
	}

	return (
		<div
			className={`${style.column} ${showClass}`}
			onClick={() => setIsActive(!isActive)}
			style={styleActive}
		>
			<h3 className={style.title}>{title}</h3>
			<ul className={style.list} ref={accRef}>
				{list.map((val, idx) => {
					return (
						<li className={style.item} key={`fi-${idx}`}>
							<Link className={style.link} href={val.to}>
								{val.text}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default FooterItem;
