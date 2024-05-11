// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "presentation/component/atoms/Button";

const WhyCrappo = ({ data }) => {
	return (
		<section className={style.crappo}>
			<div className={style.container}>
				<div className={style.inner}>
					<div className={style.img}>
						<img src={data.image} alt={data.title} />
					</div>
					<div className={style.text}>
						<h2 className={style.title}>{data.title}</h2>
						<p className={style.desc}>{data.description}</p>
						<Button
							variant="accent"
							category="icon"
							to={data.button.to}
							icon="chevron-right"
						>
							{data.button.text}
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyCrappo;
