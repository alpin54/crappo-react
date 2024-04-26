// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "presentation/component/atoms/Button";
import FormControl from "presentation/component/atoms/FormControl";

const StartMining = (props) => {
	return (
		<div className={style.start}>
			<div className="container">
				<div className={style.box}>
					<div className={style.text}>
						<h3 className={style.ttl}>{props.title}</h3>
						<p className={style.desc}>{props.desc}</p>
					</div>
					<form
						className={style.form}
						action="#"
						method="POST"
						autoComplete="off"
					>
						<div className={style.row}>
							<FormControl
								color="white"
								type="text"
								name="subscribe"
								id="email"
								placeholder="Enter your email"
								required="required"
							/>
						</div>
						<div className={style.row}>
							<Button type="submit" variant="white">
								Subscribe
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default StartMining;
