// Generated by purs version 0.13.8
"use strict";
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Argonaut_Decode_Struct_Utils = require("../Data.Argonaut.Decode.Struct.Utils/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Operator_Bottom = require("../Data.Operator.Bottom/index.js");
var Data_Operator_Top = require("../Data.Operator.Top/index.js");
var Data_Struct_Get_RGet = require("../Data.Struct.Get.RGet/index.js");
var Data_Struct_Insert_RInsert = require("../Data.Struct.Insert.RInsert/index.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Foreign_Object = require("../Foreign.Object/index.js");
var Type_Data_RowList = require("../Type.Data.RowList/index.js");
var Type_Equality = require("../Type.Equality/index.js");
var DecodeJsonPer = function (decodeJsonPer) {
    this.decodeJsonPer = decodeJsonPer;
};
var decodeJsonPerNil = function (dictCategory) {
    return function (dictTop1_) {
        return new DecodeJsonPer(function (v) {
            return function (v1) {
                return function (v2) {
                    return function (v3) {
                        return Data_Operator_Top.top1_(dictTop1_)(Control_Category.identity(dictCategory));
                    };
                };
            };
        });
    };
};
var decodeJsonPer = function (dict) {
    return dict.decodeJsonPer;
};
var decodeJsonPerCons = function (dictBind) {
    return function (dictBottom2) {
        return function (dictCons) {
            return function (dictCons1) {
                return function (dictDecodeJsonPer) {
                    return function (dictIsSymbol) {
                        return function (dictLacks) {
                            return function (dictRGet) {
                                return function (dictRInsert) {
                                    return function (dictSemigroupoid) {
                                        return function (dictTop1_) {
                                            return function (dictTypeEquals) {
                                                return new DecodeJsonPer(function (v) {
                                                    return function (v1) {
                                                        return function (decoderStruct) {
                                                            return function (object) {
                                                                var fieldName = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                                                                var decoder = Type_Equality.to(dictTypeEquals)(Data_Struct_Get_RGet.rget(dictRGet)()(Type_Data_RowList.RLProxy.value)(Data_Symbol.SProxy.value)(decoderStruct));
                                                                var v2 = Foreign_Object.lookup(fieldName)(object);
                                                                if (v2 instanceof Data_Maybe.Just) {
                                                                    return Control_Bind.bind(dictBind)(decoder(v2.value0))(function (val) {
                                                                        return Control_Bind.bind(dictBind)(decodeJsonPer(dictDecodeJsonPer)(Type_Data_RowList.RLProxy.value)(Type_Data_RowList.RLProxy.value)(decoderStruct)(object))(function (doRest) {
                                                                            return Data_Operator_Top.top1_(dictTop1_)(Control_Semigroupoid.compose(dictSemigroupoid)(Data_Struct_Insert_RInsert.rinsert(dictRInsert)()()(Type_Data_RowList.RLProxy.value)(Type_Data_RowList.RLProxy.value)(Data_Symbol.SProxy.value)(val))(doRest));
                                                                        });
                                                                    });
                                                                };
                                                                if (v2 instanceof Data_Maybe.Nothing) {
                                                                    return Data_Operator_Bottom.bottom2(dictBottom2)(Data_Argonaut_Decode_Struct_Utils.getMissingFieldErrorMessage(fieldName));
                                                                };
                                                                throw new Error("Failed pattern match at Data.Argonaut.Decode.Struct.Override.DecodeJsonPer (line 75, column 5 - line 81, column 56): " + [ v2.constructor.name ]);
                                                            };
                                                        };
                                                    };
                                                });
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
module.exports = {
    DecodeJsonPer: DecodeJsonPer,
    decodeJsonPer: decodeJsonPer,
    decodeJsonPerNil: decodeJsonPerNil,
    decodeJsonPerCons: decodeJsonPerCons
};