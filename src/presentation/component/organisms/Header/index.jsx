// -- core
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// -- states
import useStateSubscribe from "core/states/subscribe";
import useStateHeader from "core/states/header";

// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "presentation/component/atoms/Button";

const Header = (props) => {
	const { total } = useStateSubscribe();
	const { menu } = useStateHeader();

	// data is loading
	if (!props.ready) {
		<div className="container">
			<h5>data sedang dimuat</h5>
		</div>;
	}

	// show navigation menu
	const [showNavigation, setShowNavigation] = useState(false);
	const handleToggleNavigation = () => {
		setShowNavigation(!showNavigation);
	};

	if (showNavigation) {
		document.querySelector("body").classList.add("show-menu");
	} else {
		document.querySelector("body").classList.remove("show-menu");
	}

	// Sticky Menu Area
	const ref = useRef(null);

	const [height, setHeight] = useState(0);

	// use layout effect
	useLayoutEffect(() => {
		setHeight(ref.current.offsetHeight);
	}, []);

	// on render, set listener
	useEffect(() => {
		window.addEventListener("scroll", isSticky);
		return () => {
			window.removeEventListener("scroll", isSticky);
		};
		// eslint-disable-next-line
	}, []);

	let _lastScrollTop = 0;
	let _delta = 0;
	let _headerHeight = height / 2;
	// sticky header
	const isSticky = () => {
		const _scrollTop = window.scrollY;

		if (Math.abs(_lastScrollTop - _scrollTop) <= _delta) {
			return;
		}

		// --- Scroll Down
		if (_scrollTop > _lastScrollTop && _scrollTop > _headerHeight) {
			document.querySelector("body").classList.add("scroll-down");
		} else {
			// --- Scroll Up
			if (_scrollTop + window.screen.height < document.body.clientHeight) {
				document.querySelector("body").classList.remove("scroll-down");
				if (_scrollTop > _headerHeight) {
					document.querySelector("body").classList.add("header-on-scroll");
				} else {
					document.querySelector("body").classList.remove("header-on-scroll");
				}
			}
		}

		_lastScrollTop = _scrollTop;
	};

	return (
		<header className={style.header}>
			<div className="container">
				<div className={style.inner} ref={ref}>
					{/* Logo */}
					<div className={style.logo}>
						<Link to={props.data?.brand.to} className={style.logoLink}>
							<img
								src={props.data?.brand.logo}
								alt={props.data?.brand.name}
								className={style.logoImg}
							/>
						</Link>
					</div>
					{/* Menu */}
					<div className={style.nav}>
						<div className={style.menu}>
							<ul className={style.list}>
								{props.data?.main_menu.map((val, idx) => (
									<li className={style.item} key={`hm-${idx}`}>
										<Link
											to={val.to}
											className={
												menu === val.text.toLowerCase()
													? `${style.link} ${style.active}`
													: style.link
											}
										>
											{val.text}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className={style.auth}>
							{props.data?.auth_menu.map((val, idx) => (
								<div className={style.authItem} key={`am-${idx}`}>
									<Button to={val.to} variant="accent">
										<span>{val.text}</span>
									</Button>
								</div>
							))}
							<Button variant="accent">{total}</Button>
						</div>
						<button
							type="button"
							className={style.burgerMenu}
							onClick={handleToggleNavigation}
						>
							<span className={style.burgerMenuBar}></span>
							<span className={style.burgerMenuBar}></span>
							<span className={style.burgerMenuBar}></span>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
