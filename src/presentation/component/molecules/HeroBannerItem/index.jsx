// -- style
import style from "./style.module.scss";

// -- atom
import Button from "presentation/component/atoms/Button";

const HeroBannerItem = (props) => {
	return (
		<div className={style.banner}>
			<div className={style.img}>
				<img className={style.el} src={props.data.img} alt={props.data.title} />
			</div>
			<div className={style.text}>
				<div className={style.sale}>
					<p className={style.saleTitle}>{props.data.sale.title}</p>
					<p className={style.saleDesc}>{props.data.sale.desc}</p>
				</div>
				<h2 className={style.title}>{props.data.title}</h2>
				<p className={style.desc}>{props.data.desc}</p>
				<div className={style.btn}>
					<Button
						variant="accent"
						category="icon"
						to={props.data.btn.to}
						icon="chevron-right"
					>
						{props.data.btn.text}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default HeroBannerItem;
