"use strict";

module.exports = async () => {
  const configs = await getGimbalConfigs();
  const outputs = await getGimbalOutputs();

  return {
    configs,
    outputs
  };
};
