import { Link } from "react-router-dom";

// -- style
import style from "./style.module.scss";

// -- atom
import Button from "presentation/component/atoms/Button";

const CryptoItem = (props) => {
	return (
		<div className={style.box}>
			<Link className={style.link} to={props.to}></Link>
			<div className={style.img}>
				<img src={props.img} alt={props.title} />
			</div>
			<div className={style.text}>
				<h3 className={style.title}>{props.title}</h3>
				<p className={style.desc}>{props.desc}</p>
				<div className={style.btn}>
					<Button category="rounded" icon="chevron-right">
						Start mining
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CryptoItem;
