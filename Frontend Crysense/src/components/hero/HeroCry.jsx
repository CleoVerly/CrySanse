import FeatureCry from "../content/Cry";
import { featureAboutData } from "../data/FeaturesData";

const HeroCry = () => {
  const { buttonUrl, ...propsWithoutButton } = featureAboutData.cry;

  return <FeatureCry {...propsWithoutButton} showButton={false} />;
};

export default HeroCry;
