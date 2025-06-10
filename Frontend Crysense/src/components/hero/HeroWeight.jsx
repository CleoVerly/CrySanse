import FeatureWeight from "../content/Weight";
import { featureAboutData } from "../data/FeaturesData";

const HeroWeight = () => {
  const { buttonUrl, ...propsWithoutButton } = featureAboutData.weight;

  return <FeatureWeight {...propsWithoutButton} showButton={false} />;
};

export default HeroWeight;
