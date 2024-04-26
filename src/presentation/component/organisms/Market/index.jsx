// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "presentation/component/atoms/Button";

const Market = (props) => {
	return (
		<div className={style.market}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{props.title}</h2>
				</div>
				<div className={style.body}>
					<div className={style.img}>
						<img
							className={style.imgMain}
							src={props.img.main}
							alt={props.text.title}
						/>
						<img
							className={style.imgInc}
							src={props.img.inc}
							alt={props.text.title}
						/>
						<img
							className={style.imgPrice}
							src={props.img.price}
							alt={props.text.title}
						/>
					</div>
					<div className={style.text}>
						<div className={style.wrapper}>
							<h2 className={style.textTitle}>{props.text.title}</h2>
							<p className={style.textDesc}>{props.text.desc}</p>
							<Button variant="accent" to={props.btn.to}>
								{props.btn.text}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Market;
