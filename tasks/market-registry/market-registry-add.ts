import { task } from "hardhat/config";
import { loadPoolConfig } from "../../helpers/market-config-helpers";

import { addMarketToRegistry } from "../../helpers/init-helpers";

task("market-registry:add", "Provide address provider to registry")
  .addParam("poolsdfaf")
  .addParam("addressesProvider", `Address of LendingPoolAddressProvider`)
  .sdfsadf=> {
    const poolConfig = loadPoolConfig(pool);
    const { ProvidedwfasdfrId } = poolConfig;

    await addMarketToRegistry(ProviderId, addressesProvider);
  });
