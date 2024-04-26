// -- react
import { Link } from "react-router-dom";

// -- dummy data
import footerData from "./footerData";

// -- style
import style from "./style.module.scss";

// -- atoms
import SystemIcon from "presentation/component/atoms/SystemIcon";

// -- molecules
import FooterItem from "presentation/component/molecules/FooterItem";

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className="container">
				<div className={style.top}>
					{/* Logo */}
					<div className={style.logo}>
						<Link to={footerData.logo.to} className={style.logoLink}>
							<img
								src={footerData.logo.img}
								alt={footerData.logo.alt}
								className={style.logoImg}
							/>
						</Link>
					</div>
					{/* Menu */}
					<div className={style.menu}>
						{footerData.menu.map((val, idx) => {
							return <FooterItem {...val} key={`fc-${idx}`} />;
						})}
						<div className={style.payment}>
							<h2 className={style.paymentTitle}>{footerData.about.title}</h2>
							<ul className={style.paymentList}>
								{footerData.about.payment.map((val, idx) => (
									<li className={style.paymentItem} key={`fp-${idx}`}>
										<a
											href={val.to}
											className={style.paymentLink}
											target="blank"
										>
											<img
												className={style.paymentImg}
												src={val.img}
												alt={val.alt}
											/>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className={style.bottom}>
					<p className={style.copyright}>{footerData.copyright}</p>
					<ul className={style.sosmed}>
						{footerData.sosmed.map((val, idx) => (
							<li className={style.sosmedItem} key={`fs-${idx}`}>
								<Link to={val.to} className={`${style.sosmedLink} ${val.icon}`}>
									<SystemIcon name={val.icon} />
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
