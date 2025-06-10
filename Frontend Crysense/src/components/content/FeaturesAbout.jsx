import { featureAboutData } from "../data/FeaturesData.jsx";
import FeatureCry from "./Cry";
import FeatureWeight from "./Weight";

const FeaturesAbout = () => {
  return (
    <>
      <FeatureCry {...featureAboutData.cry} />
      <FeatureWeight {...featureAboutData.weight} />
    </>
  );
};

export default FeaturesAbout;
