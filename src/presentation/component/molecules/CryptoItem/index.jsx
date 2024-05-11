import { Link } from "react-router-dom";

// -- style
import style from "./style.module.scss";

// -- atom
import Button from "presentation/component/atoms/Button";

const CryptoItem = (props) => {
	return (
		<div className={style.box}>
			<Link className={style.link} to={props.button.to}></Link>
			<div className={style.img}>
				<img src={props.icon} alt={props.name} />
			</div>
			<div className={style.text}>
				<h3 className={style.title}>
					{props.name} <span>{props.code}</span>
				</h3>
				<p className={style.desc}>{props.description}</p>
				<div className={style.btn}>
					<Button category="rounded" icon="chevron-right">
						{props.button.text}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CryptoItem;
