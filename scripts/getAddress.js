// const { ethers, getNamedAccounts, deployments, network } = require("hardhat");
// const { networkConfig } = require("../helper-hardhat-config.js");
const { deployments } = require("hardhat");

// const parseEther = ethers.utils.parseEther;
// const formatEther = ethers.utils.formatEther;
// const getBalance = ethers.provider.getBalance;

async function main() {
    const POOL_DATA_PROVIDER = (await deployments.get("PoolDataProvider-Aave"))
        .address;
    const POOL_ADDRESS_PROVIDER = (
        await deployments.get("PoolAddressesProvider-Aave")
    ).address;
    const ACL_MANAGER = (await deployments.get("ACLManager-Aave")).address;
    const POOL_CONFIGURATOR = (
        await deployments.get("PoolConfigurator-Proxy-Aave")
    ).address;
    const POOL = (await deployments.get("Pool-Proxy-Aave")).address;
    const WrappedTokenGatewayV3 = (
        await deployments.get("WrappedTokenGatewayV3")
    ).address;
    const UiIncentiveDataProviderV3 = (
        await deployments.get("UiIncentiveDataProviderV3")
    ).address;
    const UiPoolDataProviderV3 = (await deployments.get("UiPoolDataProviderV3"))
        .address;
    const WalletBalanceProvider = (
        await deployments.get("WalletBalanceProvider")
    ).address;
    const rateStrategyStableOne = (
        await deployments.get("ReserveStrategy-rateStrategyStableOne")
    ).address;
    const rateStrategyStableTwo = (
        await deployments.get("ReserveStrategy-rateStrategyStableTwo")
    ).address;
    const rateStrategyVolatileOne = (
        await deployments.get("ReserveStrategy-rateStrategyVolatileOne")
    ).address;
    const IncentivesProxy = (await deployments.get("IncentivesProxy")).address;
    const AToken = (await deployments.get("AToken-Aave")).address;
    const StableDebtToken = (await deployments.get("StableDebtToken-Aave"))
        .address;
    const VariableDebtToken = (await deployments.get("VariableDebtToken-Aave"))
        .address;
    const TreasuryProxy = (await deployments.get("TreasuryProxy")).address;
    const AaveOracle = (await deployments.get("AaveOracle-Aave")).address;
    const ReservesSetupHelper = (await deployments.get("ReservesSetupHelper"))
        .address;
    const Faucet = (await deployments.get("Faucet-Aave")).address;

    console.log(`POOL_DATA_PROVIDER: "${POOL_DATA_PROVIDER}",`);
    console.log(`POOL_ADDRESS_PROVIDER: "${POOL_ADDRESS_PROVIDER}",`);
    console.log(`ACL_MANAGER: "${ACL_MANAGER}",`);
    console.log(`POOL_CONFIGURATOR: "${POOL_CONFIGURATOR}",`);
    console.log(`POOL: "${POOL}",`);
    console.log(`WrappedTokenGatewayV3: "${WrappedTokenGatewayV3}",`);
    console.log(`UiIncentiveDataProviderV3: "${UiIncentiveDataProviderV3}",`);
    console.log(`UiPoolDataProviderV3: "${UiPoolDataProviderV3}",`);
    console.log(`WalletBalanceProvider: "${WalletBalanceProvider}",`);
    console.log(`AToken: "${AToken}",`);
    console.log(`StableDebtToken: "${StableDebtToken}",`);
    console.log(`VariableDebtToken: "${VariableDebtToken}",`);
    console.log(`TreasuryProxy: "${TreasuryProxy}",`);
    console.log(`rateStrategyStableOne: "${rateStrategyStableOne}",`);
    console.log(`rateStrategyStableTwo: "${rateStrategyStableTwo}",`);
    console.log(`rateStrategyVolatileOne: "${rateStrategyVolatileOne}",`);
    console.log(`IncentivesProxy: "${IncentivesProxy}",`);
    console.log(`AaveOracle: "${AaveOracle}",`);
    console.log(`ReservesSetupHelper: "${ReservesSetupHelper}",`);
    console.log(`Faucet: "${Faucet}",`);
    console.log("---------interface--------------------");
    console.log(`LENDING_POOL_ADDRESS_PROVIDER: "${POOL_ADDRESS_PROVIDER}",`);
    console.log(`LENDING_POOL: "${POOL}",`);
    console.log(`WETH_GATEWAY: "${WrappedTokenGatewayV3}",`);
    console.log(`WALLET_BALANCE_PROVIDER: "${WalletBalanceProvider}",`);
    console.log(`UI_POOL_DATA_PROVIDER: "${UiPoolDataProviderV3}",`);
    console.log(`UI_INCENTIVE_DATA_PROVIDER: "${UiIncentiveDataProviderV3}",`);
    console.log(`FAUCET: "${Faucet}",`);
    console.log("---------interface--------------------");
    const TOKEN_DAI = (await deployments.get("DAI-TestnetMintableERC20-Aave"))
        .address;
    const TOKEN_WETH = (await deployments.get("WETH-TestnetMintableERC20-Aave"))
        .address;
    const TOKEN_LINK = (await deployments.get("LINK-TestnetMintableERC20-Aave"))
        .address;
    const TOKEN_USDC = (await deployments.get("USDC-TestnetMintableERC20-Aave"))
        .address;
    const TOKEN_WBTC = (await deployments.get("WBTC-TestnetMintableERC20-Aave"))
        .address;
    const TOKEN_USDT = (await deployments.get("USDT-TestnetMintableERC20-Aave"))
        .address;
    const TOKEN_AAVE = (await deployments.get("AAVE-TestnetMintableERC20-Aave"))
        .address;
    const TOKEN_EURS = (await deployments.get("EURS-TestnetMintableERC20-Aave"))
        .address;

    console.log(`TOKEN_DAI: "${TOKEN_DAI}",`);
    console.log(`TOKEN_LINK: "${TOKEN_LINK}",`);
    console.log(`TOKEN_WETH: "${TOKEN_WETH}",`);
    console.log(`TOKEN_USDC: "${TOKEN_USDC}",`);
    console.log(`TOKEN_WBTC: "${TOKEN_WBTC}",`);
    console.log(`TOKEN_USDT: "${TOKEN_USDT}",`);
    console.log(`TOKEN_AAVE: "${TOKEN_AAVE}",`);
    console.log(`TOKEN_EURS: "${TOKEN_EURS}"`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
