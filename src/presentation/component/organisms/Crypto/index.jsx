// -- style
import style from "./style.module.scss";

// -- atoms
import CryptoItem from "presentation/component/molecules/CryptoItem";

const Crypto = ({ data }) => {
	return (
		<section className={style.crypto} id="products">
			<div className="container">
				<h2 className={style.title}>{data.title}</h2>
				<div className={style.list}>
					{data.list.map((val, idx) => {
						return (
							<div className={style.item} key={`ci-${idx}`}>
								<CryptoItem {...val} />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Crypto;
