// -- core
import { useState } from "react";

// api
// import httpRequest from "infrastructure/api/httpRequest";
import ENDPOINT from "infrastructure/api/endPoint";

// -- style
import style from "./style.module.scss";

// -- atoms
import Button from "presentation/component/atoms/Button";
import FormControl from "presentation/component/atoms/FormControl";

const StartMining = () => {
	// state
	const [email, setEmail] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			let res = await fetch(ENDPOINT.SUBSCRIBE, {
				method: "post",
				body: JSON.stringify({
					email: email,
				}),
			});
			let resJson = await res.json();
			if (res.status === 200) {
				setEmail("");
				alert(resJson.message);
			} else {
				alert(resJson.message);
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<section className={style.start} id="contact">
			<div className="container">
				<div className={style.box}>
					<div className={style.text}>
						<h3 className={style.ttl}>Start mining now</h3>
						<p className={style.desc}>
							Join now with CRAPPO to get the latest news and start mining now
						</p>
					</div>
					<form
						className={style.form}
						onSubmit={handleSubmit}
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
								value={email}
								onChange={(e) => setEmail(e.target.value)}
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
		</section>
	);
};

export default StartMining;
