// Generated by purs version 0.13.8
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Formless_Data_FormFieldResult = require("../Formless.Data.FormFieldResult/index.js");
var Formless_Types_Form = require("../Formless.Types.Form/index.js");
var Formless_Validation = require("../Formless.Validation/index.js");
var Record = require("../Record/index.js");
var Record_Builder = require("../Record.Builder/index.js");
var Record_Unsafe = require("../Record.Unsafe/index.js");
var Type_Data_RowList = require("../Type.Data.RowList/index.js");
var ValidateAll = function (validateAllBuilder) {
    this.validateAllBuilder = validateAllBuilder;
};
var SetFormFieldsTouched = function (setFormFieldsTouchedBuilder) {
    this.setFormFieldsTouchedBuilder = setFormFieldsTouchedBuilder;
};
var ReplaceFormFieldInputs = function (replaceFormFieldInputsBuilder) {
    this.replaceFormFieldInputsBuilder = replaceFormFieldInputsBuilder;
};
var ModifyAll = function (modifyAllBuilder) {
    this.modifyAllBuilder = modifyAllBuilder;
};
var InputFieldsToFormFields = function (inputFieldsToFormFieldsBuilder) {
    this.inputFieldsToFormFieldsBuilder = inputFieldsToFormFieldsBuilder;
};
var FormFieldsToInputFields = function (formFieldsToInputFieldsBuilder) {
    this.formFieldsToInputFieldsBuilder = formFieldsToInputFieldsBuilder;
};
var FormFieldToMaybeOutput = function (formFieldsToMaybeOutputBuilder) {
    this.formFieldsToMaybeOutputBuilder = formFieldsToMaybeOutputBuilder;
};
var CountErrors = function (countErrorsImpl) {
    this.countErrorsImpl = countErrorsImpl;
};
var AllTouched = function (allTouchedImpl) {
    this.allTouchedImpl = allTouchedImpl;
};
var validateAllBuilder = function (dict) {
    return dict.validateAllBuilder;
};
var unsafeRunValidationVariant = function (dictMonad) {
    return function (dictNewtype) {
        return function (dictNewtype1) {
            return function (dictNewtype2) {
                return function ($$var) {
                    return function (vs) {
                        return function (rec) {
                            var label = (function () {
                                var v = Data_Newtype.unwrap(dictNewtype)($$var);
                                return v.type;
                            })();
                            var rec2 = (function () {
                                var v = Record_Unsafe.unsafeGet(label)(Data_Newtype.unwrap(dictNewtype1)(rec));
                                return Control_Bind.bind(dictMonad.Bind1())(Formless_Validation.runValidation(dictMonad)(Record_Unsafe.unsafeGet(label)(Data_Newtype.unwrap(dictNewtype2)(vs)))(rec)(v.input))(function (res) {
                                    var rec$prime = Record_Unsafe.unsafeSet(label)(Formless_Types_Form.FormField({
                                        input: v.input,
                                        touched: v.touched,
                                        result: Formless_Data_FormFieldResult.fromEither(res)
                                    }))(Data_Newtype.unwrap(dictNewtype1)(rec));
                                    return Control_Applicative.pure(dictMonad.Applicative0())(Data_Newtype.wrap(dictNewtype1)(rec$prime));
                                });
                            })();
                            return rec2;
                        };
                    };
                };
            };
        };
    };
};
var unsafeModifyInputVariant = function (dictNewtype) {
    return function (dictNewtype1) {
        return function (f) {
            return function ($$var) {
                return function (rec) {
                    var rep = (function () {
                        var v = Data_Newtype.unwrap(dictNewtype)($$var);
                        return new Data_Tuple.Tuple(v.type, v.value);
                    })();
                    var val = (function () {
                        var v = Record_Unsafe.unsafeGet(Data_Tuple.fst(rep))(Data_Newtype.unwrap(dictNewtype1)(rec));
                        return Formless_Types_Form.FormField({
                            input: Data_Newtype.unwrap(Formless_Types_Form.newtypeInputFunction)(Data_Tuple.snd(rep))(v.input),
                            touched: true,
                            result: f(v.result)
                        });
                    })();
                    return Data_Newtype.wrap(dictNewtype1)(Record_Unsafe.unsafeSet(Data_Tuple.fst(rep))(val)(Data_Newtype.unwrap(dictNewtype1)(rec)));
                };
            };
        };
    };
};
var setFormFieldsTouchedNil = new SetFormFieldsTouched(function (v) {
    return function (v1) {
        return Control_Category.identity(Record_Builder.categoryBuilder);
    };
});
var setFormFieldsTouchedBuilder = function (dict) {
    return dict.setFormFieldsTouchedBuilder;
};
var setFormFieldsTouchedCons = function (dictIsSymbol) {
    return function (dictCons) {
        return function (dictSetFormFieldsTouched) {
            return function (dictRow1Cons) {
                return new SetFormFieldsTouched(function (v) {
                    return function (r) {
                        var rest = setFormFieldsTouchedBuilder(dictSetFormFieldsTouched)(Type_Data_RowList.RLProxy.value)(r);
                        var val = Data_Newtype.over(Formless_Types_Form.newtypeFormField)(Formless_Types_Form.newtypeFormField)(Formless_Types_Form.FormField)(function (v1) {
                            return {
                                touched: true,
                                input: v1.input,
                                result: v1.result
                            };
                        })(Record.get(dictIsSymbol)()(Data_Symbol.SProxy.value)(r));
                        var first = Record_Builder.insert()()(dictIsSymbol)(Data_Symbol.SProxy.value)(val);
                        return Control_Semigroupoid.compose(Record_Builder.semigroupoidBuilder)(first)(rest);
                    };
                });
            };
        };
    };
};
var replaceFormFieldInputsTouchedNil = new ReplaceFormFieldInputs(function (v) {
    return function (v1) {
        return function (v2) {
            return Control_Category.identity(Record_Builder.categoryBuilder);
        };
    };
});
var replaceFormFieldInputsBuilder = function (dict) {
    return dict.replaceFormFieldInputsBuilder;
};
var replaceFormFieldInputsTouchedCons = function (dictIsSymbol) {
    return function (dictNewtype) {
        return function (dictNewtype1) {
            return function (dictCons) {
                return function (dictCons1) {
                    return function (dictRow1Cons) {
                        return function (dictReplaceFormFieldInputs) {
                            return new ReplaceFormFieldInputs(function (ir) {
                                return function (v) {
                                    return function (fr) {
                                        var rest = replaceFormFieldInputsBuilder(dictReplaceFormFieldInputs)(ir)(Type_Data_RowList.RLProxy.value)(fr);
                                        var i = Record.get(dictIsSymbol)()(Data_Symbol.SProxy.value)(ir);
                                        var first = Record_Builder.insert()()(dictIsSymbol)(Data_Symbol.SProxy.value)(Formless_Types_Form.FormField({
                                            input: Data_Newtype.unwrap(dictNewtype)(i),
                                            touched: false,
                                            result: Formless_Data_FormFieldResult.NotValidated.value
                                        }));
                                        return Control_Semigroupoid.compose(Record_Builder.semigroupoidBuilder)(first)(rest);
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
var nilCountErrors = new CountErrors(function (v) {
    return function (v1) {
        return 0;
    };
});
var nilAllTouched = new AllTouched(function (v) {
    return function (v1) {
        return true;
    };
});
var modifyAllNil = new ModifyAll(function (v) {
    return function (v1) {
        return function (v2) {
            return Control_Category.identity(Record_Builder.categoryBuilder);
        };
    };
});
var modifyAllBuilder = function (dict) {
    return dict.modifyAllBuilder;
};
var modifyAllCons = function (dictIsSymbol) {
    return function (dictNewtype) {
        return function (dictNewtype1) {
            return function (dictCons) {
                return function (dictCons1) {
                    return function (dictRow1Cons) {
                        return function (dictModifyAll) {
                            return new ModifyAll(function (ifs) {
                                return function (v) {
                                    return function (r) {
                                        var rest = modifyAllBuilder(dictModifyAll)(ifs)(Type_Data_RowList.RLProxy.value)(r);
                                        var f = Data_Newtype.unwrap(dictNewtype)(Record.get(dictIsSymbol)()(Data_Symbol.SProxy.value)(ifs));
                                        var field = Record.get(dictIsSymbol)()(Data_Symbol.SProxy.value)(r);
                                        var first = Record_Builder.insert()()(dictIsSymbol)(Data_Symbol.SProxy.value)(Data_Newtype.over(dictNewtype1)(dictNewtype1)(Formless_Types_Form.FormField)(function (x) {
                                            return {
                                                input: f(x.input),
                                                result: x.result,
                                                touched: x.touched
                                            };
                                        })(field));
                                        return Control_Semigroupoid.compose(Record_Builder.semigroupoidBuilder)(first)(rest);
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
var inputFieldsToInputNil = new FormFieldsToInputFields(function (v) {
    return function (v1) {
        return Control_Category.identity(Record_Builder.categoryBuilder);
    };
});
var inputFieldsToFormFieldsNil = new InputFieldsToFormFields(function (v) {
    return function (v1) {
        return Control_Category.identity(Record_Builder.categoryBuilder);
    };
});
var inputFieldsToFormFieldsBuilder = function (dict) {
    return dict.inputFieldsToFormFieldsBuilder;
};
var inputFieldsToFormFieldsCons = function (dictIsSymbol) {
    return function (dictCons) {
        return function (dictInputFieldsToFormFields) {
            return function (dictRow1Cons) {
                return new InputFieldsToFormFields(function (v) {
                    return function (r) {
                        var transform = function (v1) {
                            return {
                                input: v1,
                                touched: false,
                                result: Formless_Data_FormFieldResult.NotValidated.value
                            };
                        };
                        var rest = inputFieldsToFormFieldsBuilder(dictInputFieldsToFormFields)(Type_Data_RowList.RLProxy.value)(r);
                        var val = transform(Record.get(dictIsSymbol)()(Data_Symbol.SProxy.value)(r));
                        var first = Record_Builder.insert()()(dictIsSymbol)(Data_Symbol.SProxy.value)(val);
                        return Control_Semigroupoid.compose(Record_Builder.semigroupoidBuilder)(first)(rest);
                    };
                });
            };
        };
    };
};
var fromScratch = Data_Functor.flap(Data_Functor.functorFn)(Record_Builder.build)({});
var inputFieldsToFormFields = function (dictRowToList) {
    return function (dictInputFieldsToFormFields) {
        return function (dictNewtype) {
            return function (dictNewtype1) {
                return function (r) {
                    var builder = inputFieldsToFormFieldsBuilder(dictInputFieldsToFormFields)(Type_Data_RowList.RLProxy.value)(Data_Newtype.unwrap(dictNewtype)(r));
                    return Data_Newtype.wrap(dictNewtype1)(fromScratch(builder));
                };
            };
        };
    };
};
var modifyAll = function (dictRowToList) {
    return function (dictModifyAll) {
        return function (dictNewtype) {
            return function (dictNewtype1) {
                return function (ifs) {
                    return function (fs) {
                        var builder = modifyAllBuilder(dictModifyAll)(Data_Newtype.unwrap(dictNewtype)(ifs))(Type_Data_RowList.RLProxy.value)(Data_Newtype.unwrap(dictNewtype1)(fs));
                        return Data_Newtype.wrap(dictNewtype1)(fromScratch(builder));
                    };
                };
            };
        };
    };
};
var replaceFormFieldInputs = function (dictRowToList) {
    return function (dictReplaceFormFieldInputs) {
        return function (dictNewtype) {
            return function (dictNewtype1) {
                return function (is) {
                    return function (fs) {
                        var builder = replaceFormFieldInputsBuilder(dictReplaceFormFieldInputs)(Data_Newtype.unwrap(dictNewtype)(is))(Type_Data_RowList.RLProxy.value)(Data_Newtype.unwrap(dictNewtype1)(fs));
                        return Data_Newtype.wrap(dictNewtype1)(fromScratch(builder));
                    };
                };
            };
        };
    };
};
var setFormFieldsTouched = function (dictRowToList) {
    return function (dictSetFormFieldsTouched) {
        return function (dictNewtype) {
            return function (r) {
                var builder = setFormFieldsTouchedBuilder(dictSetFormFieldsTouched)(Type_Data_RowList.RLProxy.value)(Data_Newtype.unwrap(dictNewtype)(r));
                return Data_Newtype.wrap(dictNewtype)(fromScratch(builder));
            };
        };
    };
};
var validateAll = function (dictRowToList) {
    return function (dictMonad) {
        return function (dictValidateAll) {
            return function (dictNewtype) {
                return function (dictNewtype1) {
                    return function (vs) {
                        return function (fs) {
                            var builder = validateAllBuilder(dictValidateAll)(Data_Newtype.unwrap(dictNewtype)(vs))(Type_Data_RowList.RLProxy.value)(Data_Newtype.unwrap(dictNewtype1)(fs));
                            return Data_Functor.map(((dictMonad.Bind1()).Apply0()).Functor0())(Data_Newtype.wrap(dictNewtype1))(Data_Functor.map(((dictMonad.Bind1()).Apply0()).Functor0())(fromScratch)(builder));
                        };
                    };
                };
            };
        };
    };
};
var formFieldsToMaybeOutputNil = new FormFieldToMaybeOutput(function (v) {
    return function (v1) {
        return new Data_Maybe.Just(Control_Category.identity(Record_Builder.categoryBuilder));
    };
});
var formFieldsToMaybeOutputBuilder = function (dict) {
    return dict.formFieldsToMaybeOutputBuilder;
};
var formFieldsToMaybeOutputCons = function (dictIsSymbol) {
    return function (dictCons) {
        return function (dictFormFieldToMaybeOutput) {
            return function (dictRow1Cons) {
                return new FormFieldToMaybeOutput(function (v) {
                    return function (r) {
                        var rest = formFieldsToMaybeOutputBuilder(dictFormFieldToMaybeOutput)(Type_Data_RowList.RLProxy.value)(r);
                        var transform = function (v1) {
                            return function (builder$prime) {
                                return Control_Semigroupoid.compose(Record_Builder.semigroupoidBuilder)(Record_Builder.insert()()(dictIsSymbol)(Data_Symbol.SProxy.value)(v1))(builder$prime);
                            };
                        };
                        var val = Data_Functor.map(Data_Maybe.functorMaybe)(Formless_Types_Form.OutputField)(Formless_Data_FormFieldResult.toMaybe((Data_Newtype.unwrap(Formless_Types_Form.newtypeFormField)(Record.get(dictIsSymbol)()(Data_Symbol.SProxy.value)(r))).result));
                        return Control_Apply.apply(Data_Maybe.applyMaybe)(Data_Functor.map(Data_Maybe.functorMaybe)(transform)(val))(rest);
                    };
                });
            };
        };
    };
};
var formFieldsToMaybeOutputFields = function (dictRowToList) {
    return function (dictNewtype) {
        return function (dictNewtype1) {
            return function (dictFormFieldToMaybeOutput) {
                return function (r) {
                    var builder = formFieldsToMaybeOutputBuilder(dictFormFieldToMaybeOutput)(Type_Data_RowList.RLProxy.value)(Data_Newtype.unwrap(dictNewtype)(r));
                    return Data_Functor.map(Data_Maybe.functorMaybe)(Data_Newtype.wrap(dictNewtype1))(Data_Functor.map(Data_Maybe.functorMaybe)(fromScratch)(builder));
                };
            };
        };
    };
};
var formFieldsToInputFieldsBuilder = function (dict) {
    return dict.formFieldsToInputFieldsBuilder;
};
var inputFieldsToInputCons = function (dictIsSymbol) {
    return function (dictCons) {
        return function (dictFormFieldsToInputFields) {
            return function (dictRow1Cons) {
                return new FormFieldsToInputFields(function (v) {
                    return function (r) {
                        var transform = function (v1) {
                            return v1.input;
                        };
                        var rest = formFieldsToInputFieldsBuilder(dictFormFieldsToInputFields)(Type_Data_RowList.RLProxy.value)(r);
                        var val = transform(Record.get(dictIsSymbol)()(Data_Symbol.SProxy.value)(r));
                        var first = Record_Builder.insert()()(dictIsSymbol)(Data_Symbol.SProxy.value)(val);
                        return Control_Semigroupoid.compose(Record_Builder.semigroupoidBuilder)(first)(rest);
                    };
                });
            };
        };
    };
};
var formFieldsToInputFields = function (dictRowToList) {
    return function (dictFormFieldsToInputFields) {
        return function (dictNewtype) {
            return function (dictNewtype1) {
                return function (r) {
                    var builder = formFieldsToInputFieldsBuilder(dictFormFieldsToInputFields)(Type_Data_RowList.RLProxy.value)(Data_Newtype.unwrap(dictNewtype1)(r));
                    return Data_Newtype.wrap(dictNewtype)(fromScratch(builder));
                };
            };
        };
    };
};
var countErrorsImpl = function (dict) {
    return dict.countErrorsImpl;
};
var countErrors = function (dictRowToList) {
    return function (dictCountErrors) {
        return function (dictNewtype) {
            var $2141 = countErrorsImpl(dictCountErrors)(Type_Data_RowList.RLProxy.value);
            var $2142 = Data_Newtype.unwrap(dictNewtype);
            return function ($2143) {
                return $2141($2142($2143));
            };
        };
    };
};
var consCountErrors = function (dictIsSymbol) {
    return function (dictCons) {
        return function (dictCountErrors) {
            return new CountErrors(function (v) {
                return function (r) {
                    var res = (function () {
                        var v1 = (Data_Newtype.unwrap(Formless_Types_Form.newtypeFormField)(Record.get(dictIsSymbol)()(Data_Symbol.SProxy.value)(r))).result;
                        if (v1 instanceof Formless_Data_FormFieldResult["Error"]) {
                            return 1;
                        };
                        return 0;
                    })();
                    return res + countErrorsImpl(dictCountErrors)(Type_Data_RowList.RLProxy.value)(r) | 0;
                };
            });
        };
    };
};
var applyToValidationNil = function (dictMonad) {
    return new ValidateAll(function (v) {
        return function (v1) {
            return function (v2) {
                return Control_Applicative.pure(dictMonad.Applicative0())(Control_Category.identity(Record_Builder.categoryBuilder));
            };
        };
    });
};
var applyToValidationCons = function (dictIsSymbol) {
    return function (dictMonad) {
        return function (dictCons) {
            return function (dictNewtype) {
                return function (dictCons1) {
                    return function (dictRow1Cons) {
                        return function (dictValidateAll) {
                            return new ValidateAll(function (vs) {
                                return function (v) {
                                    return function (r) {
                                        var rest = validateAllBuilder(dictValidateAll)(vs)(Type_Data_RowList.RLProxy.value)(r);
                                        var fn = function (val$prime) {
                                            return function (rest$prime) {
                                                return Control_Semigroupoid.compose(Record_Builder.semigroupoidBuilder)(Record_Builder.insert()()(dictIsSymbol)(Data_Symbol.SProxy.value)(val$prime))(rest$prime);
                                            };
                                        };
                                        var val = (function () {
                                            var validator = Data_Newtype.unwrap(Formless_Validation.newtypeValidation)(Record.get(dictIsSymbol)()(Data_Symbol.SProxy.value)(vs));
                                            var formField = Data_Newtype.unwrap(Formless_Types_Form.newtypeFormField)(Record.get(dictIsSymbol)()(Data_Symbol.SProxy.value)(r));
                                            return Control_Bind.bind(dictMonad.Bind1())(validator(Data_Newtype.wrap(dictNewtype)(r))(formField.input))(function (res) {
                                                return Control_Applicative.pure(dictMonad.Applicative0())(Data_Newtype.wrap(Formless_Types_Form.newtypeFormField)((function () {
                                                    var $2137 = {};
                                                    for (var $2138 in formField) {
                                                        if ({}.hasOwnProperty.call(formField, $2138)) {
                                                            $2137[$2138] = formField[$2138];
                                                        };
                                                    };
                                                    $2137.result = Formless_Data_FormFieldResult.fromEither(res);
                                                    return $2137;
                                                })()));
                                            });
                                        })();
                                        return Control_Apply.apply((dictMonad.Bind1()).Apply0())(Data_Functor.map(((dictMonad.Bind1()).Apply0()).Functor0())(fn)(val))(rest);
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
var allTouchedImpl = function (dict) {
    return dict.allTouchedImpl;
};
var consAllTouched = function (dictIsSymbol) {
    return function (dictCons) {
        return function (dictAllTouched) {
            return new AllTouched(function (v) {
                return function (r) {
                    var $2140 = (Data_Newtype.unwrap(Formless_Types_Form.newtypeFormField)(Record.get(dictIsSymbol)()(Data_Symbol.SProxy.value)(r))).touched;
                    if ($2140) {
                        return allTouchedImpl(dictAllTouched)(Type_Data_RowList.RLProxy.value)(r);
                    };
                    return false;
                };
            });
        };
    };
};
var allTouched = function (dictRowToList) {
    return function (dictAllTouched) {
        return function (dictNewtype) {
            var $2144 = allTouchedImpl(dictAllTouched)(Type_Data_RowList.RLProxy.value);
            var $2145 = Data_Newtype.unwrap(dictNewtype);
            return function ($2146) {
                return $2144($2145($2146));
            };
        };
    };
};
module.exports = {
    allTouchedImpl: allTouchedImpl,
    countErrorsImpl: countErrorsImpl,
    formFieldsToInputFieldsBuilder: formFieldsToInputFieldsBuilder,
    formFieldsToMaybeOutputBuilder: formFieldsToMaybeOutputBuilder,
    inputFieldsToFormFieldsBuilder: inputFieldsToFormFieldsBuilder,
    modifyAllBuilder: modifyAllBuilder,
    replaceFormFieldInputsBuilder: replaceFormFieldInputsBuilder,
    setFormFieldsTouchedBuilder: setFormFieldsTouchedBuilder,
    validateAllBuilder: validateAllBuilder,
    fromScratch: fromScratch,
    allTouched: allTouched,
    countErrors: countErrors,
    setFormFieldsTouched: setFormFieldsTouched,
    formFieldsToInputFields: formFieldsToInputFields,
    inputFieldsToFormFields: inputFieldsToFormFields,
    formFieldsToMaybeOutputFields: formFieldsToMaybeOutputFields,
    replaceFormFieldInputs: replaceFormFieldInputs,
    modifyAll: modifyAll,
    validateAll: validateAll,
    unsafeModifyInputVariant: unsafeModifyInputVariant,
    unsafeRunValidationVariant: unsafeRunValidationVariant,
    SetFormFieldsTouched: SetFormFieldsTouched,
    FormFieldsToInputFields: FormFieldsToInputFields,
    InputFieldsToFormFields: InputFieldsToFormFields,
    FormFieldToMaybeOutput: FormFieldToMaybeOutput,
    CountErrors: CountErrors,
    AllTouched: AllTouched,
    ValidateAll: ValidateAll,
    ModifyAll: ModifyAll,
    ReplaceFormFieldInputs: ReplaceFormFieldInputs,
    setFormFieldsTouchedNil: setFormFieldsTouchedNil,
    setFormFieldsTouchedCons: setFormFieldsTouchedCons,
    inputFieldsToInputNil: inputFieldsToInputNil,
    inputFieldsToInputCons: inputFieldsToInputCons,
    inputFieldsToFormFieldsNil: inputFieldsToFormFieldsNil,
    inputFieldsToFormFieldsCons: inputFieldsToFormFieldsCons,
    formFieldsToMaybeOutputNil: formFieldsToMaybeOutputNil,
    formFieldsToMaybeOutputCons: formFieldsToMaybeOutputCons,
    nilCountErrors: nilCountErrors,
    consCountErrors: consCountErrors,
    nilAllTouched: nilAllTouched,
    consAllTouched: consAllTouched,
    applyToValidationNil: applyToValidationNil,
    applyToValidationCons: applyToValidationCons,
    modifyAllNil: modifyAllNil,
    modifyAllCons: modifyAllCons,
    replaceFormFieldInputsTouchedNil: replaceFormFieldInputsTouchedNil,
    replaceFormFieldInputsTouchedCons: replaceFormFieldInputsTouchedCons
};