import { Text } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
  // const region = {}

  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      className="rounded-2xl"
      style={{ width: "100%", height: 300 }}
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      //initialRegion={region}
      showsUserLocation={true}
      userInterfaceStyle="light"
    >
      <Text>Map</Text>
    </MapView>
  );
};

export default Map;
