// -- style
import style from "./style.module.scss";

// -- molecule
import NumbersItem from "presentation/component/molecules/NumbersItem";

const Numbers = ({ data }) => {
	return (
		<section className={style.numbers}>
			<div className="container">
				<div className={style.list}>
					{data.map((val, idx) => {
						return (
							<div className={style.item} key={`f-${idx}`}>
								<NumbersItem {...val} />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Numbers;
