// Generated by purs version 0.13.6
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Profunctor from "../Data.Profunctor/index.js";
var Choice = function (Profunctor0, left, right) {
    this.Profunctor0 = Profunctor0;
    this.left = left;
    this.right = right;
};
var right = function (dict) {
    return dict.right;
};
var choiceFn = new Choice(function ($dollar__unused) {
    return Data_Profunctor.profunctorFn;
}, function (v) {
    return function (v1) {
        if (v1 instanceof Data_Either.Left) {
            return Data_Either.Left.create(v(v1.value0));
        };
        if (v1 instanceof Data_Either.Right) {
            return new Data_Either.Right(v1.value0);
        };
        throw new Error("Failed pattern match at Data.Profunctor.Choice (line 32, column 1 - line 35, column 16): " + [ v.constructor.name, v1.constructor.name ]);
    };
}, Data_Functor.map(Data_Either.functorEither));
export {
    right,
    Choice,
    choiceFn
};
