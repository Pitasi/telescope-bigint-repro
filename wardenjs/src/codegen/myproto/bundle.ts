//@ts-nocheck
import * as _81 from "../sample/tx.js";
import * as _138 from "../sample/tx.amino.js";
import * as _139 from "../sample/tx.registry.js";
import * as _140 from "../sample/tx.rpc.msg.js";
import * as _144 from "./rpc.tx.js";
export const myproto = {
  ..._81,
  ..._138,
  ..._139,
  ..._140,
  ClientFactory: {
    ..._144
  }
};