// -- core
import { Link } from "react-router-dom";

// -- style
import style from "./style.module.scss";

// -- molecules
import FooterItem from "presentation/component/molecules/FooterItem";

const Footer = ({ ready, data, error }) => {
	return (
		<footer className={style.footer}>
			<div className="container">
				<div className={style.top}>
					{/* Logo */}
					<div className={style.logo}>
						<Link to={data.brand.to} className={style.logoLink}>
							<img
								src={data.brand.logo}
								alt={data.brand.name}
								className={style.logoImg}
							/>
						</Link>
					</div>
					{/* Menu */}
					<div className={style.menu}>
						{data.menu.map((val, idx) => {
							return <FooterItem {...val} key={`fc-${idx}`} />;
						})}
						<div className={style.payment}>
							<h2 className={style.paymentTitle}>{data.payments.title}</h2>
							<ul className={style.paymentList}>
								{data.payments.list.map((val, idx) => (
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
					<p className={style.copyright}>{data.copyright}</p>
					<ul className={style.sosmed}>
						{data.social_media.map((val, idx) => (
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
