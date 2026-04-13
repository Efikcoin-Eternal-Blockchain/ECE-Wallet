const provider = new ethers.providers.JsonRpcProvider("https://bsc-mainnet.nodereal.io/v1/22e98151d7bd4e3a9a08f8bb033b4f2e");
provider.getBlockNumber().then(console.log).catch(console.error);
