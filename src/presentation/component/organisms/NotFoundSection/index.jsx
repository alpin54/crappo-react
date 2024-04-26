// -- style
import style from "./style.module.scss";

// -- atom
import Button from "presentation/component/atoms/Button";

// asset image
import imageBg from "core/assets/img/bg/not-found-bg.png";

const NotFoundSection = () => {
	return (
		<section className={style.notfound}>
			<div className="container">
				<div className={style.inner}>
					<div className={style.img}>
						<img src={imageBg} alt="not found" />
					</div>
					<div className={style.text}>
						<h2 className={style.title}>Oops! Page is unavailable :(</h2>
						<p className={style.desc}>
							But don't be sad #ThereIsAlwaysAWay for you!
						</p>
						<Button variant="outline" to="/">
							<span data-title="Back to homepage">Back to homepage</span>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotFoundSection;
