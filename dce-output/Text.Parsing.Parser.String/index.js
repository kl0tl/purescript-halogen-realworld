// Generated by purs version 0.13.6
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Monad_State_Class from "../Control.Monad.State.Class/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Function from "../Data.Function/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_String_CodePoints from "../Data.String.CodePoints/index.js";
import * as Data_String_CodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data_String_Common from "../Data.String.Common/index.js";
import * as Data_String_Pattern from "../Data.String.Pattern/index.js";
import * as Text_Parsing_Parser from "../Text.Parsing.Parser/index.js";
import * as Text_Parsing_Parser_Combinators from "../Text.Parsing.Parser.Combinators/index.js";
import * as Text_Parsing_Parser_Pos from "../Text.Parsing.Parser.Pos/index.js";
var StringLike = function (drop, indexOf, $$null, uncons) {
    this.drop = drop;
    this.indexOf = indexOf;
    this["null"] = $$null;
    this.uncons = uncons;
};
var uncons = function (dict) {
    return dict.uncons;
};
var stringLikeString = new StringLike(Data_String_CodePoints.drop, Data_String_CodePoints.indexOf, Data_String_Common["null"], Data_String_CodeUnits.uncons);
var $$null = function (dict) {
    return dict["null"];
};
var indexOf = function (dict) {
    return dict.indexOf;
};
var eof = function (dictStringLike) {
    return function (dictMonad) {
        return Control_Bind.bind(Text_Parsing_Parser.bindParserT(dictMonad))(Control_Monad_State_Class.gets(Text_Parsing_Parser.monadStateParserT(dictMonad))(function (v) {
            return v.value0;
        }))(function (input) {
            return Control_Applicative.unless(Text_Parsing_Parser.applicativeParserT(dictMonad))($$null(dictStringLike)(input))(Text_Parsing_Parser.fail(dictMonad)("Expected EOF"));
        });
    };
};
var drop = function (dict) {
    return dict.drop;
};
var string = function (dictStringLike) {
    return function (dictMonad) {
        return function (str) {
            return Control_Bind.bind(Text_Parsing_Parser.bindParserT(dictMonad))(Control_Monad_State_Class.gets(Text_Parsing_Parser.monadStateParserT(dictMonad))(function (v) {
                return v.value0;
            }))(function (input) {
                var v = indexOf(dictStringLike)(Data_Newtype.wrap(Data_String_Pattern.newtypePattern)(str))(input);
                if (v instanceof Data_Maybe.Just && v.value0 === 0) {
                    return Control_Bind.discard(Control_Bind.discardUnit)(Text_Parsing_Parser.bindParserT(dictMonad))(Control_Monad_State_Class.modify_(Text_Parsing_Parser.monadStateParserT(dictMonad))(function (v1) {
                        return new Text_Parsing_Parser.ParseState(drop(dictStringLike)(Data_String_CodePoints.length(str))(input), Text_Parsing_Parser_Pos.updatePosString(v1.value1)(str), true);
                    }))(function ($dollar__unused) {
                        return Control_Applicative.pure(Text_Parsing_Parser.applicativeParserT(dictMonad))(str);
                    });
                };
                return Text_Parsing_Parser.fail(dictMonad)("Expected " + Data_Show.show(Data_Show.showString)(str));
            });
        };
    };
};
var anyChar = function (dictStringLike) {
    return function (dictMonad) {
        return Control_Bind.bind(Text_Parsing_Parser.bindParserT(dictMonad))(Control_Monad_State_Class.gets(Text_Parsing_Parser.monadStateParserT(dictMonad))(function (v) {
            return v.value0;
        }))(function (input) {
            var v = uncons(dictStringLike)(input);
            if (v instanceof Data_Maybe.Nothing) {
                return Text_Parsing_Parser.fail(dictMonad)("Unexpected EOF");
            };
            if (v instanceof Data_Maybe.Just) {
                return Control_Bind.discard(Control_Bind.discardUnit)(Text_Parsing_Parser.bindParserT(dictMonad))(Control_Monad_State_Class.modify_(Text_Parsing_Parser.monadStateParserT(dictMonad))(function (v1) {
                    return new Text_Parsing_Parser.ParseState(v.value0.tail, Text_Parsing_Parser_Pos.updatePosString(v1.value1)(Data_String_CodeUnits.singleton(v.value0.head)), true);
                }))(function ($dollar__unused) {
                    return Control_Applicative.pure(Text_Parsing_Parser.applicativeParserT(dictMonad))(v.value0.head);
                });
            };
            throw new Error("Failed pattern match at Text.Parsing.Parser.String (line 56, column 3 - line 63, column 16): " + [ v.constructor.name ]);
        });
    };
};
var satisfy = function (dictStringLike) {
    return function (dictMonad) {
        return function (f) {
            return Text_Parsing_Parser_Combinators.tryRethrow(dictMonad)(Control_Bind.bind(Text_Parsing_Parser.bindParserT(dictMonad))(anyChar(dictStringLike)(dictMonad))(function (c) {
                var $3054 = f(c);
                if ($3054) {
                    return Control_Applicative.pure(Text_Parsing_Parser.applicativeParserT(dictMonad))(c);
                };
                return Text_Parsing_Parser.fail(dictMonad)("Character '" + (Data_String_CodeUnits.singleton(c) + "' did not satisfy predicate"));
            }));
        };
    };
};
var noneOf = function (dictStringLike) {
    return function (dictMonad) {
        return function (ss) {
            return Text_Parsing_Parser_Combinators.withErrorMessage(dictMonad)(satisfy(dictStringLike)(dictMonad)(Data_Function.flip(Data_Foldable.notElem(Data_Foldable.foldableArray)(Data_Eq.eqChar))(ss)))("none of " + Data_Show.show(Data_Show.showArray(Data_Show.showChar))(ss));
        };
    };
};
export {
    drop,
    indexOf,
    $$null as null,
    uncons,
    StringLike,
    eof,
    string,
    anyChar,
    satisfy,
    noneOf,
    stringLikeString
};
