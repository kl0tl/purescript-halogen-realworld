// Generated by purs version 0.13.6
import * as Control_Category from "../Control.Category/index.js";
import * as Control_Semigroupoid from "../Control.Semigroupoid/index.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Record_Builder from "../Record.Builder/index.js";
import * as Type_Data_RowList from "../Type.Data.RowList/index.js";
var MappingWithIndex = function (mappingWithIndex) {
    this.mappingWithIndex = mappingWithIndex;
};
var Mapping = function (mapping) {
    this.mapping = mapping;
};
var MapRecordWithIndex = function (mapRecordWithIndexBuilder) {
    this.mapRecordWithIndexBuilder = mapRecordWithIndexBuilder;
};
var HMap = function (hmap) {
    this.hmap = hmap;
};
var ConstMapping = function (x) {
    return x;
};
var mappingWithIndex = function (dict) {
    return dict.mappingWithIndex;
};
var mapping = function (dict) {
    return dict.mapping;
};
var mapRecordWithIndexNil = new MapRecordWithIndex(function (v) {
    return function (v1) {
        return Control_Category.identity(Record_Builder.categoryBuilder);
    };
});
var mapRecordWithIndexBuilder = function (dict) {
    return dict.mapRecordWithIndexBuilder;
};
var mapRecordWithIndexCons = function (dictIsSymbol) {
    return function (dictMappingWithIndex) {
        return function (dictMapRecordWithIndex) {
            return function (dictCons) {
                return function (dictCons1) {
                    return new MapRecordWithIndex(function (v) {
                        return function (f) {
                            return Control_Semigroupoid.compose(Record_Builder.semigroupoidBuilder)(Record_Builder.modify()()(dictIsSymbol)(Data_Symbol.SProxy.value)(mappingWithIndex(dictMappingWithIndex)(f)(Data_Symbol.SProxy.value)))(mapRecordWithIndexBuilder(dictMapRecordWithIndex)(Type_Data_RowList.RLProxy.value)(f));
                        };
                    });
                };
            };
        };
    };
};
var hmapRecord = function (dictRowToList) {
    return function (dictMapRecordWithIndex) {
        return new HMap((function () {
            var $2701 = mapRecordWithIndexBuilder(dictMapRecordWithIndex)(Type_Data_RowList.RLProxy.value);
            return function ($2702) {
                return Record_Builder.build($2701(ConstMapping($2702)));
            };
        })());
    };
};
var hmap = function (dict) {
    return dict.hmap;
};
var constMapping = function (dictMapping) {
    return new MappingWithIndex(function (v) {
        return function (v1) {
            return mapping(dictMapping)(v);
        };
    });
};
export {
    hmap,
    mapRecordWithIndexBuilder,
    mapping,
    mappingWithIndex,
    Mapping,
    MappingWithIndex,
    ConstMapping,
    HMap,
    MapRecordWithIndex,
    constMapping,
    hmapRecord,
    mapRecordWithIndexCons,
    mapRecordWithIndexNil
};
