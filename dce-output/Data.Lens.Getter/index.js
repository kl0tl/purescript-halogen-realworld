// Generated by purs version 0.13.6
import * as Control_Category from "../Control.Category/index.js";
import * as Data_Lens_Internal_Forget from "../Data.Lens.Internal.Forget/index.js";
import * as Data_Newtype from "../Data.Newtype/index.js";
var view = function (l) {
    return Data_Newtype.unwrap(Data_Lens_Internal_Forget.newtypeForget)(l(Control_Category.identity(Control_Category.categoryFn)));
};
export {
    view
};
