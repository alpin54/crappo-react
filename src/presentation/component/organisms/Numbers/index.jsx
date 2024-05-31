// -- style
import style from "./style.module.scss";

// -- molecule
import NumbersItem from "presentation/component/molecules/NumbersItem";

const Numbers = ({ ready, data, error }) => {
	if (!ready) {
		return (
			<section className="sc-placeholder">
				<div className="container">
					<h2>Data sedang dimuat!</h2>
				</div>
			</section>
		);
	}

	// if (error !== null) {
	// 	return <h2>{error.message}</h2>;
	// }

	return (
		<section className={style.numbers}>
			<div className="container">
				<div className={style.list}>
					{data.map((val, idx) => {
						return (
							<div className={style.item} key={`f-${idx}`}>
								<NumbersItem data={val} />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Numbers;
