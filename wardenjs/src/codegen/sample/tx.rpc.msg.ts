//@ts-nocheck
import { Rpc } from "../helpers.js";
import { BinaryReader } from "../binary.js";
import { MyRequest, MyResponse, SomeMessage } from "./tx.js";
export interface Msg {
  myMethod(request: MyRequest): Promise<MyResponse>;
  otherMethod(request: SomeMessage): Promise<MyResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.myMethod = this.myMethod.bind(this);
    this.otherMethod = this.otherMethod.bind(this);
  }
  myMethod(request: MyRequest): Promise<MyResponse> {
    const data = MyRequest.encode(request).finish();
    const promise = this.rpc.request("myproto.Msg", "MyMethod", data);
    return promise.then(data => MyResponse.decode(new BinaryReader(data)));
  }
  otherMethod(request: SomeMessage): Promise<MyResponse> {
    const data = SomeMessage.encode(request).finish();
    const promise = this.rpc.request("myproto.Msg", "OtherMethod", data);
    return promise.then(data => MyResponse.decode(new BinaryReader(data)));
  }
}