import { Link } from "react-router-dom";

// -- style
import style from "./style.module.scss";

// -- atom
import Button from "presentation/component/atoms/Button";

const CryptoItem = ({ data }) => {
	return (
		<div className={style.box}>
			<Link className={style.link} to={data.button.to}></Link>
			<div className={style.img}>
				<img className={style.el} src={data.icon} alt={data.name} />
			</div>
			<div className={style.text}>
				<h3 className={style.title}>
					{data.name} <span>{data.code}</span>
				</h3>
				<p className={style.desc}>{data.description}</p>
				<div className={style.btn}>
					<Button category="rounded" icon="chevron-right">
						{data.button.text}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CryptoItem;
