// Generated by purs version 0.13.6
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Monad_State_Class from "../Control.Monad.State.Class/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Formless_Internal_Transform from "../Formless.Internal.Transform/index.js";
import * as Formless_Types_Component from "../Formless.Types.Component/index.js";
import * as Halogen_Query_HalogenM from "../Halogen.Query.HalogenM/index.js";
import * as Record_Builder from "../Record.Builder/index.js";
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
                                                var $2111 = {};
                                                for (var $2112 in v) {
                                                    if ({}.hasOwnProperty.call(v, $2112)) {
                                                        $2111[$2112] = v[$2112];
                                                    };
                                                };
                                                $2111.submitting = false;
                                                return $2111;
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
                                            var $2115 = {};
                                            for (var $2116 in st) {
                                                if ({}.hasOwnProperty.call(st, $2116)) {
                                                    $2115[$2116] = st[$2116];
                                                };
                                            };
                                            $2115.submitAttempts = st.submitAttempts + 1 | 0;
                                            $2115.submitting = true;
                                            return $2115;
                                        }))(function (init) {
                                            var internal = Data_Newtype.unwrap(Formless_Types_Component.newtypeInternalState)(init.internal);
                                            return Control_Applicative.when(Halogen_Query_HalogenM.applicativeHalogenM)(!internal.allTouched)(Control_Monad_State_Class.modify_(Halogen_Query_HalogenM.monadStateHalogenM)(function (v) {
                                                var $2118 = {};
                                                for (var $2119 in v) {
                                                    if ({}.hasOwnProperty.call(v, $2119)) {
                                                        $2118[$2119] = v[$2119];
                                                    };
                                                };
                                                $2118.form = Formless_Internal_Transform.setFormFieldsTouched()(dictSetFormFieldsTouched)(dictNewtype)(init.form);
                                                $2118.internal = Data_Newtype.over(Formless_Types_Component.newtypeInternalState)(Formless_Types_Component.newtypeInternalState)(Formless_Types_Component.InternalState)(function (v1) {
                                                    return {
                                                        allTouched: true,
                                                        debounceRef: v1.debounceRef,
                                                        initialInputs: v1.initialInputs,
                                                        validationRef: v1.validationRef,
                                                        validators: v1.validators
                                                    };
                                                })(init.internal);
                                                return $2118;
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
export {
    getPublicState,
    preSubmit,
    submit
};
