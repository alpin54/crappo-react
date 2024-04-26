// -- style
import style from "./style.module.scss";

// -- atom
import SystemIcon from "presentation/component/atoms/SystemIcon";

const FeaturesItem = (props) => {
	return (
		<div className={style.item}>
			<div className={style.icon}>
				<SystemIcon name="chart" />
			</div>
			<div className={style.text}>
				<h4 className={style.title}>{props.title}</h4>
				<p className={style.desc}>{props.desc}</p>
			</div>
		</div>
	);
};

export default FeaturesItem;
