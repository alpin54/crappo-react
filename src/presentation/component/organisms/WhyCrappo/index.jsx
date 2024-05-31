// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "presentation/component/atoms/Button";

const WhyCrappo = ({ ready, data, error }) => {
	if (!ready) {
		return (
			<div className={style.placeholder}>
				<div className="container">
					<div className={style.inner}>
						<div className={style.img}></div>
						<div className={style.text}>
							<div className={style.title}>
								<div className={style.titleBar}></div>
							</div>
							<div className={style.desc}>
								<div className={style.descBar}></div>
								<div className={style.descBar}></div>
								<div className={style.descBar}></div>
							</div>
							<div className={style.button}></div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<section className={style.crappo}>
			<div className={style.container}>
				<div className={style.inner}>
					<div className={style.img}>
						<img className={style.el} src={data.image} alt={data.title} />
					</div>
					<div className={style.text}>
						<h2 className={style.title}>{data.title}</h2>
						<p className={style.desc}>{data.description}</p>
						<Button
							variant="accent"
							category="icon"
							to={data.button?.to}
							icon="chevron-right"
						>
							{data.button?.text}
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyCrappo;
