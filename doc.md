## Install

```shell
# Recommend: Node.js 10 LTS
npm install wallet-rpc --save
```

## API

- [Bitcoin](./types/bitcoin/rpc.d.ts)
- [Ethereum](./types/ethereum/rpc.d.ts)
- [OmniLayer](./types/omni/rpc.d.ts)
- [EOS](./types/eos/rpc.d.ts)

[EthereumUtil](./types/ethereum/util.d.ts) includes some useful methods like `getABI`, `toWei`, `toETH`, `isAddress` and so on.

for v3 users,v4 has been remove `sha3` and `isChecksumAddress`,you can import [those](./example/sha3.ts) by yourself.

### EOS Actions

- [eosio.token](https://github.com/isLishude/eos-actions-types/blob/master/eosio.token.d.ts)
- [eosio](https://github.com/isLishude/eos-actions-types/blob/master/eosio.d.ts)

## RPC Methods List

- [Bitcoin](./src/bitcoin/mtd.ts)
- [Ethereum](./src/ethereum/mtd.ts)
- [OmniLayer](./src/omni/mtd.ts)

## Example

- [Bitcoin](./example/bitcoin.ts)
- [Ethereum](./example/ethereum.ts)
- [OmniLayer](./example/omni.ts)

## CLI

```
npx wallet-rpc

> let eth = new EthereumClient({ ip: "https://mainnet.infura.io", port: "443" });
> let tmp = eth.getBlockCount().then(log, log);
```

Run with `npx -n --experimental-repl-await wallet-rpc` to enable top-level await if you are in the node.js v10 LTS.

for development feature with `npx islishude/wallet-rpc@dev`
