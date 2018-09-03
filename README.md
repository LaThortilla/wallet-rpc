JSON RPC client of crypto coins by TypeScript

## Supports

- Bitcoin(core 0.16+)
- BitcoinCash(same with Bitcoin)
- Litecoin(same with Bitcoin)
- Ethereum(geth 1.8.0+ || parity 1.0.0+) and ERC20
- OmniLayer(includes USDT)

And CLI Supports, [learn more](#cli)!

## TODO Supports

- [ ] EOS

## Install

```shell
# pre-required: Node.js 8.9.x LTS && NPM 5.6+
npm install wallet-rpc --save
```

## Usage

### CommonJS

```js
import { BitcoinClient } from "wallet-rpc";
const DefaultBtcRpcConf = {
  user: "",
  pass: "",
  ip: "http://127.0.0.1",
  port: "8332"
};
const BtcClient = new BitcoinClient(DefaultBtcRpcConf);
BtcClient
  .getTxInfo("txid")
  .then(txInfo => console.log)
  .catch(console.log);
// ...
// BulkCall see flow
```

### TypeScript

```typescript
import { IBtcTxInfo, BitcoinMethods as BtcMtd } from "wallet-rpc";
// Bulk Call
BtcClient
  // your can set generic `T` and return `IRpcResponse<T[]>`
  .bulkRpcExec<IBtcTxInfo>([{
    id: 0,
    jsonrpc: "2.0",
    method: BtcMtd.tx.detail
    params: ["0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098"]
  },{
    id: 1,
    jsonrpc: "2.0",
    method: BtcMtd.tx.detail
    params: ["ce3ab453f96020a32ca382d07967231fa463cf1f365ce4bdc52764faf20371bf"]
  }])

// Also can
BtcClient.BulkAdd(BtcMtd.block.hash, [100], 0);
BtcClient.BulkAdd(BtcMtd.block.hash, [200], 1);
BtcClient.BulkCall();
```

## API

- [Bitcoin](./types/bitcoin/rpc.d.ts)
- [Ethereum](./types/ethereum/rpc.d.ts)
- [OmniLayer](./types/omni/rpc.d.ts)

[EthereumUtil](./types/ethereum/util.d.ts) includes some useful methods like `getABI`, `toWei`, `toETH`, `isAddress` and so on.

## RPC Methods List

- [Bitcoin](./src/bitcoin/mtd.ts)
- [Ethereum](./src/ethereum/mtd.ts)
- [OmniLayer](./src/omni/mtd.ts)

## CLI

```
npx wallet-rpc

> let eth = new EthereumClient("https://mainnet.infura.io", 443);
> let tmp = eth.getBlockCount().then(log, log);
```

for development feature with `npx islishude/wallet-rpc@dev`

## Feedback

- [issue](https://github.com/isLishude/wallet-rpc/issues)
