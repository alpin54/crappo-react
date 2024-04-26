// -- react
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// -- data
import headerData from "./headerData";

// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "presentation/component/atoms/Button";

const Header = ({ activeMenu }) => {
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
	let _delta = 2;
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
						<Link to={headerData.logo.to} className={style.logoLink}>
							<img
								src={headerData.logo.img}
								alt={headerData.logo.alt}
								className={style.logoImg}
							/>
						</Link>
					</div>
					{/* Menu */}
					<div className={style.nav}>
						<div className={style.menu}>
							<ul className={style.list}>
								{headerData.menu.map((val, idx) => (
									<li className={style.item} key={`hm-${idx}`}>
										<Link
											to={val.to}
											className={
												activeMenu === val.active
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
						<div className={style.btn}>
							<Button to="/register" variant="accent">
								<span>Register</span>
							</Button>
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
