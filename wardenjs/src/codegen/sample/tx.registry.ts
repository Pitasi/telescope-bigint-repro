//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MyRequest, SomeMessage } from "./tx.js";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/myproto.MyRequest", MyRequest], ["/myproto.SomeMessage", SomeMessage]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    myMethod(value: MyRequest) {
      return {
        typeUrl: "/myproto.MyRequest",
        value: MyRequest.encode(value).finish()
      };
    },
    otherMethod(value: SomeMessage) {
      return {
        typeUrl: "/myproto.SomeMessage",
        value: SomeMessage.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    myMethod(value: MyRequest) {
      return {
        typeUrl: "/myproto.MyRequest",
        value
      };
    },
    otherMethod(value: SomeMessage) {
      return {
        typeUrl: "/myproto.SomeMessage",
        value
      };
    }
  },
  toJSON: {
    myMethod(value: MyRequest) {
      return {
        typeUrl: "/myproto.MyRequest",
        value: MyRequest.toJSON(value)
      };
    },
    otherMethod(value: SomeMessage) {
      return {
        typeUrl: "/myproto.SomeMessage",
        value: SomeMessage.toJSON(value)
      };
    }
  },
  fromJSON: {
    myMethod(value: any) {
      return {
        typeUrl: "/myproto.MyRequest",
        value: MyRequest.fromJSON(value)
      };
    },
    otherMethod(value: any) {
      return {
        typeUrl: "/myproto.SomeMessage",
        value: SomeMessage.fromJSON(value)
      };
    }
  },
  fromPartial: {
    myMethod(value: MyRequest) {
      return {
        typeUrl: "/myproto.MyRequest",
        value: MyRequest.fromPartial(value)
      };
    },
    otherMethod(value: SomeMessage) {
      return {
        typeUrl: "/myproto.SomeMessage",
        value: SomeMessage.fromPartial(value)
      };
    }
  }
};