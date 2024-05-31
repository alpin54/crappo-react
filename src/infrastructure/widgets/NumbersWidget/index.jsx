// -- model
import numbersModel from "core/models/numbers";

// -- organisms
import Numbers from "presentation/component/organisms/Numbers";

const numbersWidget = () => {
	const { ready, data, error } = numbersModel.list();

	return <Numbers ready={ready} data={data?.data} error={error} />;
};

export default numbersWidget;
