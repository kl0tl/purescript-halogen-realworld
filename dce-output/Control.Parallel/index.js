// Generated by purs version 0.13.6
import * as Control_Category from "../Control.Category/index.js";
import * as Control_Parallel_Class from "../Control.Parallel.Class/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
var parTraverse_ = function (dictParallel) {
    return function (dictFoldable) {
        return function (f) {
            var $978 = Control_Parallel_Class.sequential(dictParallel);
            var $979 = Data_Foldable.traverse_(dictParallel.Applicative1())(dictFoldable)((function () {
                var $981 = Control_Parallel_Class.parallel(dictParallel);
                return function ($982) {
                    return $981(f($982));
                };
            })());
            return function ($980) {
                return $978($979($980));
            };
        };
    };
};
var parSequence_ = function (dictParallel) {
    return function (dictFoldable) {
        return parTraverse_(dictParallel)(dictFoldable)(Control_Category.identity(Control_Category.categoryFn));
    };
};
export {
    parTraverse_,
    parSequence_
};
