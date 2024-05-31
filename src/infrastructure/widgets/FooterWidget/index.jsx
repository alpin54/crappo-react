// -- models
import footerModel from "core/models/footer";

// -- organisms
import Footer from "presentation/component/organisms/Footer";

const FooterWidget = () => {
	const { ready, data, error } = footerModel.list();

	return <Footer ready={ready} data={data?.data} error={error} />;
};

export default FooterWidget;
