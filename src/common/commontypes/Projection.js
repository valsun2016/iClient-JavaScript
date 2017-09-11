﻿import SuperMap from '../SuperMap';
import Proj4js from "proj4";
import {Util} from './Util';

/**
 * @class  SuperMap.Projection
 * @classdesc 坐标转换类。这个类封装了与 proj4js 投影对象进行交互的几种方法。
 *
 * > 对于不支持或者用户想要自定义投影类型，可通过下载 proj4js 产品包，并引入产品包中的 proj4js.js
 * 实现自定义的投影转换。
 * > 目前 proj4js 支持的投影种类有：<br>
 * WGS84, EPSG:4326, EPSG:4269, EPSG:3875, EPSG:3785, EPSG4139,EPSG:4181, EPSG:4272, EPSG:4302, EPSG:21781,
 * EPSG:102113,EPSG:26591,EPSG:26912, EPSG:27200, EPSG:27563, EPSG:41001, EPSG:42304,EPSG:102067, EPSG:102757,
 * EPSG:102758, EPSG:900913, GOOGLE
 *
 * @param  projCode - {string} 投影编码。
 * @param  options - {Object} 设置图层上的的附加属性。
 *
 * @example
 * var geographic = new SuperMap.Projection("EPSG:4326");
 */
export default class Projection {

    /**
     * @member SuperMap.Projection.prototype.proj -{Object}
     * @description Proj4js.Proj instance.
     */
    proj = null;

    /**
     * @member SuperMap.Projection.prototype.projCode -{string}
     * @description 投影编码。
     */
    projCode = null;

    /**
     * @member SuperMap.Projection.prototype.titleRegEx -{RegExp}
     * @description regular expression to strip the title from a proj4js definition
     */
    titleRegEx = /\+title=[^\+]*/;

    constructor(projCode, options) {
        Util.extend(this, options);
        this.projCode = projCode;
        if (window.Proj4js) {
            this.proj = new Proj4js(projCode);
        }
    }


    /**
     * @function SuperMap.Projection.prototype.getCode
     * @description 获取SRS代码字符串。
     * @returns {string} SRS代码。
     */
    getCode() {
        return this.proj ? this.proj.srsCode : this.projCode;
    }


    /**
     * @function SuperMap.Projection.prototype.getUnits
     * @description 获取投影的单位字符串。如果 proj4js 不可用则返回null。
     * @returns {string} 获取的单位。
     */
    getUnits() {
        return this.proj ? this.proj.units : null;
    }


    /**
     * @function SuperMap.Projection.prototype.toString
     * @description 将投影转换为字符串(内部封装了getCode方法)
     * @returns {string} 投影代码。
     */
    toString() {
        return this.getCode();
    }


    /**
     * @function SuperMap.Projection.prototype.equals
     * @description Test equality of two projection instances.  Determines equality based
     *     soley on the projection code.
     * @returns {Boolean} The two projections are equivalent.
     */
    equals(projection) {
        var p = projection, equals = false;
        if (p) {
            if (!(p instanceof Projection)) {
                p = new Projection(p);
            }
            if (window.Proj4js && this.proj.defData && p.proj.defData) {
                equals = this.proj.defData.replace(this.titleRegEx, "") ===
                    p.proj.defData.replace(this.titleRegEx, "");
            } else if (p.getCode) {
                var source = this.getCode(), target = p.getCode();
                equals = source === target ||
                    !!Projection.transforms[source] &&
                    Projection.transforms[source][target] ===
                    Projection.nullTransform;
            }
        }
        return equals;
    }


    /**
     * @function SuperMap.Projection.prototype.destroy
     * @description Destroy projection object.
     */
    destroy() {
        delete this.proj;
        delete this.projCode;
    }

    /**
     * @member SuperMap.Projection.transforms
     * @description Transforms is an object, with from properties, each of which may
     * have a to property. This allows you to define projections without
     * requiring support for proj4js to be included.<br>
     *
     * This object has keys which correspond to a 'source' projection object.  The
     * keys should be strings, corresponding to the projection.getCode() value.
     * Each source projection object should have a set of destination projection
     * keys included in the object.<br>
     *
     * Each value in the destination object should be a transformation function,
     * where the function is expected to be passed an object with a .x and a .y
     * property.  The function should return the object, with the .x and .y
     * transformed according to the transformation function.<br>
     *
     * > Note - Properties on this object should not be set directly.  To add a
     *     transform method to this object, use the <addTransform> method.  For an
     *     example of usage, see the SuperMap.Layer.SphericalMercator file.
     */
    static transforms = {};
    /**
     * @member SuperMap.Projection.defaults -{Object}
     * @description 默认支持 EPSG:4326, CRS:84, urn:ogc:def:crs:EPSG:6.6:4326, EPSG:900913, EPSG:3857,
     * EPSG:102113, EPSG:102100 投影间的转换。defaults 定义的关键字为坐标系统编码，相应的属性值为
     * units, maxExtent(坐标系统的有效范围)和yx(当坐标系统有反向坐标轴时为true)
     */
    static defaults = {
        "EPSG:4326": {
            units: "degrees",
            maxExtent: [-180, -90, 180, 90],
            yx: true
            //maxResolution:1.40625
        },
        "CRS:84": {
            units: "degrees",
            maxExtent: [-180, -90, 180, 90]
        },
        "EPSG:900913": {
            units: "m",
            maxExtent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34]
        },
        "EPSG:3857": {
            units: "m",
            maxExtent: [-20037508.34, -20037508.34, 20037508.34, 20037508.34]
        }
    };


    /**
     * @function SuperMap.Projection.addTransform
     * @description 设置自定义投影转换方法。在proj4js库不可用或者自定义的投影需要处理时使用此方法。
     * @param from - {string} 源投影代码。
     * @param to - {string} 目标投影代码。
     * @param method - {Function} 将作为参数的点的源投影转化为目标投影的方法。
     */
    static addTransform(from, to, method) {
        if (method === Projection.nullTransform) {
            var defaults = Projection.defaults[from];
            if (defaults && !Projection.defaults[to]) {
                Projection.defaults[to] = defaults;
            }
        }
        if (!Projection.transforms[from]) {
            Projection.transforms[from] = {};
        }
        Projection.transforms[from][to] = method;
    };


    /**
     * @function SuperMap.Projection.transform
     * @description 点投影转换。
     * @param point - {SuperMap.Geometry.Point| Object} 带有x,y坐标的点对象。
     * @param source - {SuperMap.Projection} 源地图坐标系统。
     * @param dest - {SuperMap.Projection} 目标地图坐标系统。
     * @returns point - {object} 转换后的坐标。
     */
    static transform(point, source, dest) {
        if (source && dest) {
            if (!(source instanceof Projection)) {
                source = new Projection(source);
            }
            if (!(dest instanceof Projection)) {
                dest = new Projection(dest);
            }
            if (source.proj && dest.proj) {
                point = Proj4js(source.proj, dest.proj, point);
            }
            else {
                var sourceCode = source.getCode();
                var destCode = dest.getCode();
                var transforms = Projection.transforms;
                if (transforms[sourceCode] && transforms[sourceCode][destCode]) {
                    transforms[sourceCode][destCode](point);
                }
            }
        }
        return point;
    };


    /**
     * @function SuperMap.Projection.nullTransform
     * @description 空转换，有用的定义投影的别名时proj4js不可用：当proj4js不可用时，用来定义投影的别名。
     * @example
     * SuperMap.Projection.addTransform("EPSG:4326", "EPSG:3857",
     *     SuperMap.Layer.SphericalMercator.projectForward);
     * SuperMap.Projection.addTransform("EPSG:3857", "EPSG:3857",
     *     SuperMap.Layer.SphericalMercator.projectInverse);
     * SuperMap.Projection.addTransform("EPSG:3857", "EPSG:900913",
     *     SuperMap.Projection.nullTransform);
     * SuperMap.Projection.addTransform("EPSG:900913", "EPSG:3857",
     *     SuperMap.Projection.nullTransform);
     */
    static nullTransform = function (point) {
        return point;
    };

    CLASS_NAME = "SuperMap.Projection"
}
SuperMap.Projection = Projection;
/**
 * Note: Transforms for web mercator <-> geographic
 * SuperMap recognizes EPSG:3857, EPSG:900913, EPSG:102113 and EPSG:102100.
 * SuperMap originally started referring to EPSG:900913 as web mercator.
 * The EPSG has declared EPSG:3857 to be web mercator.
 * ArcGIS 10 recognizes the EPSG:3857, EPSG:102113, and EPSG:102100 as
 * equivalent.  See http://blogs.esri.com/Dev/blogs/arcgisserver/archive/2009/11/20/ArcGIS-Online-moving-to-Google-_2F00_-Bing-tiling-scheme_3A00_-What-does-this-mean-for-you_3F00_.aspx#12084.
 * For geographic, SuperMap recognizes EPSG:4326, CRS:84 and
 * urn:ogc:def:crs:EPSG:6.6:4326. SuperMap also knows about the reverse axis
 * order for EPSG:4326.
 */
(function () {

    var pole = 20037508.34;

    function inverseMercator(xy) {
        xy.x = 180 * xy.x / pole;
        xy.y = 180 / Math.PI * (2 * Math.atan(Math.exp((xy.y / pole) * Math.PI)) - Math.PI / 2);
        return xy;
    }

    function forwardMercator(xy) {
        xy.x = xy.x * pole / 180;
        //xy.y = xy.y<-90?-89.99:xy.y;//经纬度转换为墨卡托，当纬度值小于-90时，转换后的结果为NaN，故不能超过范围
        //xy.y = xy.y>90?89.99:xy.y;
        xy.y = Math.log(Math.tan((90 + xy.y) * Math.PI / 360)) / Math.PI * pole;
        return xy;
    }

    function map(base, codes) {
        var add = Projection.addTransform;
        var same = Projection.nullTransform;
        var i, len, code, other, j;
        for (i = 0, len = codes.length; i < len; ++i) {
            code = codes[i];
            add(base, code, forwardMercator);
            add(code, base, inverseMercator);
            for (j = i + 1; j < len; ++j) {
                other = codes[j];
                add(code, other, same);
                add(other, code, same);
            }
        }
    }

    // list of equivalent codes for web mercator
    var mercator = ["EPSG:900913", "EPSG:3857", "EPSG:102113", "EPSG:102100"],
        geographic = ["CRS:84", "urn:ogc:def:crs:EPSG:6.6:4326", "EPSG:4326"],
        i;
    for (i = mercator.length - 1; i >= 0; --i) {
        map(mercator[i], geographic);
    }
    for (i = geographic.length - 1; i >= 0; --i) {
        map(geographic[i], mercator);
    }

})();