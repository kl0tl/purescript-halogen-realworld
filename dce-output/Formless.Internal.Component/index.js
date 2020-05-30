// Generated by purs version 0.13.8
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_State_Class = require("../Control.Monad.State.Class/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Formless_Internal_Transform = require("../Formless.Internal.Transform/index.js");
var Formless_Types_Component = require("../Formless.Types.Component/index.js");
var Halogen_Query_HalogenM = require("../Halogen.Query.HalogenM/index.js");
var Record_Builder = require("../Record.Builder/index.js");
var submit = function (dictMonadAff) {
    return function (dictRowToList) {
        return function (dictAllTouched) {
            return function (dictSetFormFieldsTouched) {
                return function (dictValidateAll) {
                    return function (dictFormFieldToMaybeOutput) {
                        return function (dictValidateAll1) {
                            return function (dictNewtype) {
                                return function (dictNewtype1) {
                                    return function (dictNewtype2) {
                                        return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (validated) {
                                            return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify_(Halogen_Query_HalogenM.monadStateHalogenM)(function (v) {
                                                var $2107 = {};
                                                for (var $2108 in v) {
                                                    if ({}.hasOwnProperty.call(v, $2108)) {
                                                        $2107[$2108] = v[$2108];
                                                    };
                                                };
                                                $2107.submitting = false;
                                                return $2107;
                                            }))(function ($dollar__unused) {
                                                return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)((function () {
                                                    if (validated.validity instanceof Formless_Types_Component.Valid) {
                                                        return Formless_Internal_Transform.formFieldsToMaybeOutputFields()(dictNewtype)(dictNewtype1)(dictFormFieldToMaybeOutput)(validated.form);
                                                    };
                                                    return Data_Maybe.Nothing.value;
                                                })());
                                            });
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
var preSubmit = function (dictMonadAff) {
    return function (dictRowToList) {
        return function (dictAllTouched) {
            return function (dictSetFormFieldsTouched) {
                return function (dictValidateAll) {
                    return function (dictFormFieldToMaybeOutput) {
                        return function (dictValidateAll1) {
                            return function (dictNewtype) {
                                return function (dictNewtype1) {
                                    return function (dictNewtype2) {
                                        return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (st) {
                                            var $2111 = {};
                                            for (var $2112 in st) {
                                                if ({}.hasOwnProperty.call(st, $2112)) {
                                                    $2111[$2112] = st[$2112];
                                                };
                                            };
                                            $2111.submitAttempts = st.submitAttempts + 1 | 0;
                                            $2111.submitting = true;
                                            return $2111;
                                        }))(function (init) {
                                            var internal = Data_Newtype.unwrap(Formless_Types_Component.newtypeInternalState)(init.internal);
                                            return Control_Applicative.when(Halogen_Query_HalogenM.applicativeHalogenM)(!internal.allTouched)(Control_Monad_State_Class.modify_(Halogen_Query_HalogenM.monadStateHalogenM)(function (v) {
                                                var $2114 = {};
                                                for (var $2115 in v) {
                                                    if ({}.hasOwnProperty.call(v, $2115)) {
                                                        $2114[$2115] = v[$2115];
                                                    };
                                                };
                                                $2114.form = Formless_Internal_Transform.setFormFieldsTouched()(dictSetFormFieldsTouched)(dictNewtype)(init.form);
                                                $2114.internal = Data_Newtype.over(Formless_Types_Component.newtypeInternalState)(Formless_Types_Component.newtypeInternalState)(Formless_Types_Component.InternalState)(function (v1) {
                                                    return {
                                                        allTouched: true,
                                                        debounceRef: v1.debounceRef,
                                                        initialInputs: v1.initialInputs,
                                                        validationRef: v1.validationRef,
                                                        validators: v1.validators
                                                    };
                                                })(init.internal);
                                                return $2114;
                                            }));
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
var getPublicState = function (dictLacks) {
    return Record_Builder.build(Record_Builder["delete"](new Data_Symbol.IsSymbol(function ($dollar__unused) {
        return "internal";
    }))()()(Data_Symbol.SProxy.value));
};
module.exports = {
    getPublicState: getPublicState,
    preSubmit: preSubmit,
    submit: submit
};
