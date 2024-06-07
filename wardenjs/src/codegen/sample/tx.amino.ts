//@ts-nocheck
import { MyRequest, SomeMessage } from "./tx.js";
export const AminoConverter = {
  "/myproto.MyRequest": {
    aminoType: "/myproto.MyRequest",
    toAmino: MyRequest.toAmino,
    fromAmino: MyRequest.fromAmino
  },
  "/myproto.SomeMessage": {
    aminoType: "/myproto.SomeMessage",
    toAmino: SomeMessage.toAmino,
    fromAmino: SomeMessage.fromAmino
  }
};