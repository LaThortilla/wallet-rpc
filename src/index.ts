export { BitcoinMethods } from "./bitcoin/mtd";
export { BitcoinClient } from "./bitcoin/rpc";
export { DKKTokenMethods } from "./dkktoken/mtd";
export { DKKTClient } from "./dkktoken/rpc";
export { EthereumMethods } from "./ethereum/mtd";
export { EthereumClient } from "./ethereum/rpc";
export { EthereumUtil } from "./ethereum/util";
export { OmniLayerMethods } from "./omni/mtd";
export { OmniLayerClient } from "./omni/rpc";

export {
  IRpcRequest,
  IRpcErrorStruct,
  IRpcResponse,
  IRpcConfig
} from "./client";
export {
  IEthAbiCommonStruct,
  IEthAbiInputStruct,
  IEthAbiOutputStruct,
  IEthAbiStruct,
  IEthBlock,
  IEthBlockSimple,
  IEthBlockVerbose,
  IEthCallFuncParam,
  IEtherScanAbiResponse,
  IEthReceiptLogs,
  IEthSentTxStruct,
  IEthStatus,
  IEthSyncing,
  IEthTraceTxReturn,
  IEthTx,
  IEthTxReceipt,
  IParityCallAction,
  IParityCallResult,
  IParityCreateAction,
  IParityCreateResult,
  IParitySuicideAction,
  IParityTxTrace
} from "./ethereum/rpc";

export { IOmniClientInfo, IOmniTxInfo } from "./omni/rpc";

export {
  IDkktBlockInfo,
  IDkktTxInfo,
  IDkktWalletInfo,
  IDkktTxVinStruct,
  IDkktTxVoutStruct
} from "./dkktoken/rpc";

export {
  IBtcBlockchainInfo,
  IBtcBlockInfo,
  IBtcFee,
  IBtcMemoryInfo,
  IBtcNetworkInfo,
  IBtcTxInfo,
  IBtcVerboseMemPool,
  IBtcWalletInfo
} from "./bitcoin/rpc";
