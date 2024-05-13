// -- style
import style from "./style.module.scss";

// -- atom
import Button from "presentation/component/atoms/Button";

const HeroBannerItem = ({ data }) => {
	return (
		<div className={style.banner}>
			<div className={style.img}>
				<img className={style.el} src={data.img} alt={data.title} />
			</div>
			<div className={style.text}>
				<div className={style.sale}>
					<p className={style.saleTitle}>{data.sale.title}</p>
					<p className={style.saleDesc}>{data.sale.desc}</p>
				</div>
				<h2 className={style.title}>{data.title}</h2>
				<p className={style.desc}>{data.desc}</p>
				<div className={style.btn}>
					<Button
						variant="accent"
						category="icon"
						to={data.btn.to}
						icon="chevron-right"
					>
						{data.btn.text}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default HeroBannerItem;
