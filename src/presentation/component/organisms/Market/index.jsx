// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "presentation/component/atoms/Button";

const Market = ({ data }) => {
	console.log(data);

	return (
		<section className={style.market} id="about">
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{data.title}</h2>
				</div>
				<div className={style.body}>
					<div className={style.img}>
						{data.section.images.map((val, idx) => (
							<img src={val} alt={data.section.title} key={`img-${idx}`} />
						))}
					</div>
					<div className={style.text}>
						<div className={style.wrapper}>
							<h2 className={style.textTitle}>{data.section.title}</h2>
							<p className={style.textDesc}>{data.section.description}</p>
							<Button variant="accent" to={data.section.button.to}>
								{data.section.button.text}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Market;
