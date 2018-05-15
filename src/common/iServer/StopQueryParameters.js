﻿import {SuperMap} from '../SuperMap';
import {Util} from '../commontypes/Util';

/**
 * @class SuperMap.StopQueryParameters
 * @category  iServer TrafficTransferAnalyst TransferStops
 * @classdesc 站点查询参数类。
 * @param {Object} options - 参数。
 */
export class StopQueryParameters {

    constructor(options) {
        options = options || {};
        /**
         *  @member {string} SuperMap.StopQueryParameters.prototype.keyWord
         *  @description 站点名称关键字。
         */
        this.keyWord = null;

        /**
         * @member {boolean} SuperMap.StopQueryParameters.prototype.returnPosition
         * @description 是否返回站点坐标信息。
         */
        this.returnPosition = false;

        Util.extend(this, options);

        this.CLASS_NAME = "SuperMap.StopQueryParameters";
    }

    /**
     * @function SuperMap.StopQueryParameters.prototype.destroy
     * @description 释放资源，将引用资源的属性置空。
     */
    destroy() {
        Util.reset(this);
    }

}

SuperMap.StopQueryParameters = StopQueryParameters;