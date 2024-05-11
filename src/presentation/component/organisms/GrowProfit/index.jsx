// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "presentation/component/atoms/Button";

const GrowProfit = (props) => {
	return (
		<section className={style.grow}>
			<div className="container">
				<div className={style.inner}>
					<div className={style.img}>
						<img src={props.img} alt={props.title} />
					</div>
					<div className={style.text}>
						<div className={style.wrapper}>
							<h2 className={style.textTitle}>{props.title}</h2>
							<p className={style.textDesc}>{props.desc}</p>
							<Button variant="accent" to={props.btn.to}>
								{props.btn.text}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GrowProfit;
