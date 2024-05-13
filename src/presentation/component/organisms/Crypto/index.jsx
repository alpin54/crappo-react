// -- style
import style from "./style.module.scss";

// -- atoms
import CryptoItem from "presentation/component/molecules/CryptoItem";

const Crypto = ({ ready, data, error }) => {
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
		<section className={style.crypto} id="products">
			<div className="container">
				<h2 className={style.title}>{data.title}</h2>
				<div className={style.list}>
					{data.list.map((val, idx) => {
						return (
							<div className={style.item} key={`ci-${idx}`}>
								<CryptoItem data={val} />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Crypto;
