//@ts-nocheck
import { Any, AnyAmino, AnySDKType } from "../google/protobuf/any.js";
import { BinaryReader, BinaryWriter } from "../binary.js";
import { isSet } from "../helpers.js";
import { JsonSafe } from "../json-safe.js";
export interface MyRequest {
  msg?: Any;
  topLevelBigint: bigint;
}
export interface MyRequestProtoMsg {
  typeUrl: "/myproto.MyRequest";
  value: Uint8Array;
}
export interface MyRequestAmino {
  msg?: AnyAmino;
  top_level_bigint?: string;
}
export interface MyRequestAminoMsg {
  type: "/myproto.MyRequest";
  value: MyRequestAmino;
}
export interface MyRequestSDKType {
  msg?: AnySDKType;
  top_level_bigint: bigint;
}
export interface MyResponse {}
export interface MyResponseProtoMsg {
  typeUrl: "/myproto.MyResponse";
  value: Uint8Array;
}
export interface MyResponseAmino {}
export interface MyResponseAminoMsg {
  type: "/myproto.MyResponse";
  value: MyResponseAmino;
}
export interface MyResponseSDKType {}
export interface SomeMessage {
  wrappedBigint: bigint;
}
export interface SomeMessageProtoMsg {
  typeUrl: "/myproto.SomeMessage";
  value: Uint8Array;
}
export interface SomeMessageAmino {
  wrapped_bigint?: string;
}
export interface SomeMessageAminoMsg {
  type: "/myproto.SomeMessage";
  value: SomeMessageAmino;
}
export interface SomeMessageSDKType {
  wrapped_bigint: bigint;
}
function createBaseMyRequest(): MyRequest {
  return {
    msg: undefined,
    topLevelBigint: BigInt(0)
  };
}
export const MyRequest = {
  typeUrl: "/myproto.MyRequest",
  encode(message: MyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg !== undefined) {
      Any.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    if (message.topLevelBigint !== BigInt(0)) {
      writer.uint32(16).uint64(message.topLevelBigint);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.topLevelBigint = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MyRequest {
    return {
      msg: isSet(object.msg) ? Any.fromJSON(object.msg) : undefined,
      topLevelBigint: isSet(object.topLevelBigint) ? BigInt(object.topLevelBigint.toString()) : BigInt(0)
    };
  },
  toJSON(message: MyRequest): JsonSafe<MyRequest> {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg ? Any.toJSON(message.msg) : undefined);
    message.topLevelBigint !== undefined && (obj.topLevelBigint = (message.topLevelBigint || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MyRequest>): MyRequest {
    const message = createBaseMyRequest();
    message.msg = object.msg !== undefined && object.msg !== null ? Any.fromPartial(object.msg) : undefined;
    message.topLevelBigint = object.topLevelBigint !== undefined && object.topLevelBigint !== null ? BigInt(object.topLevelBigint.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MyRequestAmino): MyRequest {
    const message = createBaseMyRequest();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = Any.fromAmino(object.msg);
    }
    if (object.top_level_bigint !== undefined && object.top_level_bigint !== null) {
      message.topLevelBigint = BigInt(object.top_level_bigint);
    }
    return message;
  },
  toAmino(message: MyRequest): MyRequestAmino {
    const obj: any = {};
    obj.msg = message.msg ? Any.toAmino(message.msg) : undefined;
    obj.top_level_bigint = message.topLevelBigint !== BigInt(0) ? message.topLevelBigint.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MyRequestAminoMsg): MyRequest {
    return MyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MyRequestProtoMsg): MyRequest {
    return MyRequest.decode(message.value);
  },
  toProto(message: MyRequest): Uint8Array {
    return MyRequest.encode(message).finish();
  },
  toProtoMsg(message: MyRequest): MyRequestProtoMsg {
    return {
      typeUrl: "/myproto.MyRequest",
      value: MyRequest.encode(message).finish()
    };
  }
};
function createBaseMyResponse(): MyResponse {
  return {};
}
export const MyResponse = {
  typeUrl: "/myproto.MyResponse",
  encode(_: MyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MyResponse {
    return {};
  },
  toJSON(_: MyResponse): JsonSafe<MyResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MyResponse>): MyResponse {
    const message = createBaseMyResponse();
    return message;
  },
  fromAmino(_: MyResponseAmino): MyResponse {
    const message = createBaseMyResponse();
    return message;
  },
  toAmino(_: MyResponse): MyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MyResponseAminoMsg): MyResponse {
    return MyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MyResponseProtoMsg): MyResponse {
    return MyResponse.decode(message.value);
  },
  toProto(message: MyResponse): Uint8Array {
    return MyResponse.encode(message).finish();
  },
  toProtoMsg(message: MyResponse): MyResponseProtoMsg {
    return {
      typeUrl: "/myproto.MyResponse",
      value: MyResponse.encode(message).finish()
    };
  }
};
function createBaseSomeMessage(): SomeMessage {
  return {
    wrappedBigint: BigInt(0)
  };
}
export const SomeMessage = {
  typeUrl: "/myproto.SomeMessage",
  encode(message: SomeMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wrappedBigint !== BigInt(0)) {
      writer.uint32(8).uint64(message.wrappedBigint);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SomeMessage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSomeMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wrappedBigint = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SomeMessage {
    return {
      wrappedBigint: isSet(object.wrappedBigint) ? BigInt(object.wrappedBigint.toString()) : BigInt(0)
    };
  },
  toJSON(message: SomeMessage): JsonSafe<SomeMessage> {
    const obj: any = {};
    message.wrappedBigint !== undefined && (obj.wrappedBigint = (message.wrappedBigint || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<SomeMessage>): SomeMessage {
    const message = createBaseSomeMessage();
    message.wrappedBigint = object.wrappedBigint !== undefined && object.wrappedBigint !== null ? BigInt(object.wrappedBigint.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SomeMessageAmino): SomeMessage {
    const message = createBaseSomeMessage();
    if (object.wrapped_bigint !== undefined && object.wrapped_bigint !== null) {
      message.wrappedBigint = BigInt(object.wrapped_bigint);
    }
    return message;
  },
  toAmino(message: SomeMessage): SomeMessageAmino {
    const obj: any = {};
    obj.wrapped_bigint = message.wrappedBigint !== BigInt(0) ? message.wrappedBigint.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SomeMessageAminoMsg): SomeMessage {
    return SomeMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: SomeMessageProtoMsg): SomeMessage {
    return SomeMessage.decode(message.value);
  },
  toProto(message: SomeMessage): Uint8Array {
    return SomeMessage.encode(message).finish();
  },
  toProtoMsg(message: SomeMessage): SomeMessageProtoMsg {
    return {
      typeUrl: "/myproto.SomeMessage",
      value: SomeMessage.encode(message).finish()
    };
  }
};