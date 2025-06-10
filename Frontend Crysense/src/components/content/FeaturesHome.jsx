import { featureHomeData } from "../data/FeaturesData.jsx";
import FeatureCry from "./Cry";
import FeatureWeight from "./Weight";

const FeaturesHome = () => {
  return (
    <>
      <FeatureCry {...featureHomeData.cry} />
      <FeatureWeight {...featureHomeData.weight} />
    </>
  );
};

export default FeaturesHome;
