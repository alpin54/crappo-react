// -- core
import { Link } from "react-router-dom";

// -- style
import style from "./style.module.scss";

// -- atom
import SystemIcon from "presentation/component/atoms/SystemIcon";

const Button = (props) => {
	const { variant = "primary", category, children, to, icon } = props;

	const iconCont = icon && <SystemIcon name={icon} />;
	let variantStyle = style.btn;
	if (variant === "primary") {
		variantStyle += " " + style.btnPrimary;
	} else if (variant === "accent") {
		variantStyle += " " + style.btnAccent;
	} else if (variant === "white") {
		variantStyle += " " + style.btnWhite;
	} else if (category === "outline") {
		variantStyle += " " + style.btnOutline;
	}

	if (category === "icon") {
		variantStyle += " " + style.btnIcon;
	}

	if (category === "rounded") {
		variantStyle += " " + style.btnRounded;
	}

	if (to) {
		return (
			<Link {...props} className={variantStyle}>
				{children}
				{iconCont}
			</Link>
		);
	}

	return (
		<button {...props} className={variantStyle}>
			{children}
			{iconCont}
		</button>
	);
};

export default Button;
