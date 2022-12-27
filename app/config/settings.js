import { Constants } from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.1.76:9000/api",
  },
  staging: {
    apiUrl: "http://192.168.1.76:9000/api",
  },
  prod: {
    apiUrl: "http://192.168.1.76:9000/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifset.releaseChannel === "staging") return statging;
  return settings.prod;
};

export default getCurrentSettings();
