// -- react
import { useState, useEffect } from "react";
import Slider from "react-slick";

// -- style carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// -- style
import style from "./style.module.scss";

// -- molecule
import HeroBannerItem from "presentation/component/molecules/HeroBannerItem";

const HeroBanner = (props) => {
	const [showSingle, setShowSingle] = useState(false);

	useEffect(() => {
		let timer = setTimeout(() => setShowSingle(true), 500);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	const settings = {
		dots: true,
		arrows: false,
		fade: true,
		infinite: false,
		autoplay: true,
		pauseOnHover: true,
		speed: 1000,
		autoplaySpeed: 8000,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	let classNameSingle = style.banner;
	if (props.list.length === 1) {
		if (showSingle) {
			classNameSingle += " banner-single";
		}
	}

	return (
		<div className={classNameSingle}>
			{props.list.length === 1 ? (
				props.list.map((val, idx) => {
					return (
						<div className={style.item} key={`hb-${idx}`}>
							<div className={style.middleAlign}>
								<div className="container">
									<HeroBannerItem {...val} />
								</div>
							</div>
						</div>
					);
				})
			) : (
				<Slider {...settings}>
					{showSingle &&
						props.list.map((val, idx) => {
							return (
								<div className={style.item} key={`hb-${idx}`}>
									<div className={style.middleAlign}>
										<div className="container">
											<HeroBannerItem {...val} />
										</div>
									</div>
								</div>
							);
						})}
				</Slider>
			)}
		</div>
	);
};

export default HeroBanner;
