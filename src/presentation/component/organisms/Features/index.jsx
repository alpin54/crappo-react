// -- style
import style from "./style.module.scss";

// -- molecule
import FeaturesItem from "presentation/component/molecules/FeaturesItem";

const Features = (props) => {
	return (
		<div className={style.features}>
			<div className="container">
				<div className={style.list}>
					{props.list.map((val, idx) => {
						return (
							<div className={style.item} key={`f-${idx}`}>
								<FeaturesItem {...val} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Features;
