// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "presentation/component/atoms/Button";

const Statistics = ({ ready, data, error }) => {
	if (error !== null) {
		return <h2>{error.message}</h2>;
	}

	if (!ready) {
		return (
			<section className="sc-placeholder">
				<div className="container">
					<h2>Data sedang dimuat!</h2>
				</div>
			</section>
		);
	}

	return (
		<section className={style.statistics}>
			<div className="container">
				<div className={style.inner}>
					<div className={style.img}>
						<img className={style.el} src={data.image} alt={data.title} />
					</div>
					<div className={style.text}>
						<div className={style.wrapper}>
							<h2 className={style.textTitle}>{data.title}</h2>
							<p className={style.textDesc}>{data.description}</p>
							<Button variant="accent" to={data.button.to}>
								{data.button.text}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Statistics;
