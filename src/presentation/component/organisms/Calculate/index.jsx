// -- style
import FormControl from "presentation/component/atoms/FormControl";
import style from "./style.module.scss";

// -- atoms
import Button from "presentation/component/atoms/Button";

const Calculate = (props) => {
	const optionData = [
		{
			value: "TH/s",
			text: "TH/s",
		},
		{
			value: "TH/m",
			text: "TH/m",
		},
		{
			value: "TH/h",
			text: "TH/h",
		},
		{
			value: "TH/mm",
			text: "TH/mm",
		},
	];
	return (
		<div className={style.calculate}>
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>{props.title}</h2>
					<p className={style.desc}>{props.title}</p>
				</div>
				<div className={style.box}>
					<div className={style.form}>
						<div className={style.row}>
							<FormControl
								type="text"
								name="rate"
								placeholder="Enter your hash rate"
							/>
						</div>
						<div className={style.row}>
							<FormControl variant="select" name="date" list={optionData} />
						</div>
						<div className={style.row}>
							<Button type="button" variant="accent">
								Calculate
							</Button>
						</div>
					</div>
					<div className={style.result}>
						<h4 className={style.resultTitle}>{props.result.title}</h4>
						<h3 className={style.resultRevenue}>{props.result.revenue}</h3>
						<p className={style.resultDesc}>{props.result.desc}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calculate;
