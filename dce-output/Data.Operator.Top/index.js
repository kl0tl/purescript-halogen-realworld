// Generated by purs version 0.13.6
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Data_Either from "../Data.Either/index.js";
var Top1_ = function (top1_) {
    this.top1_ = top1_;
};
var top1_Either = new Top1_(Control_Applicative.pure(Data_Either.applicativeEither));
var top1_ = function (dict) {
    return dict.top1_;
};
export {
    Top1_,
    top1_,
    top1_Either
};
