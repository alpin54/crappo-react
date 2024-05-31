// -- core
import { Link } from "react-router-dom";

// -- style
import style from "./style.module.scss";

// -- molecules
import FooterItem from "presentation/component/molecules/FooterItem";

const Footer = (props) => {
	return (
		<footer className={style.footer}>
			<div className="container">
				<div className={style.top}>
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
					<div className={style.menu}>
						{props.data?.menu.map((val, idx) => {
							return <FooterItem {...val} key={`fc-${idx}`} />;
						})}
						<div className={style.payment}>
							<h2 className={style.paymentTitle}>
								{props.data?.payments.title}
							</h2>
							<ul className={style.paymentList}>
								{props.data?.payments.list.map((val, idx) => (
									<li className={style.paymentItem} key={`fp-${idx}`}>
										<a
											href={val.to}
											className={style.paymentLink}
											target="blank"
										>
											<img
												className={style.paymentIcon}
												src={val.icon}
												alt={val.name}
											/>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className={style.bottom}>
					<p className={style.copyright}>{props.data?.copyright}</p>
					<ul className={style.sosmed}>
						{props.data?.social_media.map((val, idx) => (
							<li className={style.sosmedItem} key={`fs-${idx}`}>
								<Link
									to={val.to}
									className={`${style.sosmedLink} ${val.name.toLowerCase()}`}
								>
									<img
										className={style.sosmedIcon}
										src={val.icon}
										alt={val.name}
									/>
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
