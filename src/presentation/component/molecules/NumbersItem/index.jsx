// -- style
import style from "./style.module.scss";

// -- atom
import SystemIcon from "presentation/component/atoms/SystemIcon";

const NumbersItem = ({ data }) => {
	return (
		<div className={style.item}>
			<div className={style.icon}>
				<SystemIcon name={data.icon_font} />
			</div>
			<div className={style.text}>
				<h4 className={style.title}>{data.title}</h4>
				<p className={style.desc}>{data.description}</p>
			</div>
		</div>
	);
};

export default NumbersItem;
