/**
 * <code>FrameOverTime</code> 类用于创建时间帧。
 */
export class FrameOverTime {
    /**
     * 创建一个 <code>FrameOverTime,不允许new，请使用静态创建函数。</code> 实例。
     */
    constructor() {
        this._type = 0;
        this._constant = 0;
        this._overTime = null;
        this._constantMin = 0;
        this._constantMax = 0;
        this._overTimeMin = null;
        this._overTimeMax = null;
    }
    /**
     * 通过固定帧创建一个 <code>FrameOverTime</code> 实例。
     * @param	constant 固定帧。
     * @return 时间帧。
     */
    static createByConstant(constant) {
        var rotationOverLifetime = new FrameOverTime();
        rotationOverLifetime._type = 0;
        rotationOverLifetime._constant = constant;
        return rotationOverLifetime;
    }
    /**
     * 通过时间帧创建一个 <code>FrameOverTime</code> 实例。
     * @param	overTime 时间帧。
     * @return 时间帧。
     */
    static createByOverTime(overTime) {
        var rotationOverLifetime = new FrameOverTime();
        rotationOverLifetime._type = 1;
        rotationOverLifetime._overTime = overTime;
        return rotationOverLifetime;
    }
    /**
     * 通过随机双固定帧创建一个 <code>FrameOverTime</code> 实例。
     * @param	constantMin 最小固定帧。
     * @param	constantMax 最大固定帧。
     * @return 时间帧。
     */
    static createByRandomTwoConstant(constantMin, constantMax) {
        var rotationOverLifetime = new FrameOverTime();
        rotationOverLifetime._type = 2;
        rotationOverLifetime._constantMin = constantMin;
        rotationOverLifetime._constantMax = constantMax;
        return rotationOverLifetime;
    }
    /**
     * 通过随机双时间帧创建一个 <code>FrameOverTime</code> 实例。
     * @param	gradientFrameMin 最小时间帧。
     * @param	gradientFrameMax 最大时间帧。
     * @return 时间帧。
     */
    static createByRandomTwoOverTime(gradientFrameMin, gradientFrameMax) {
        var rotationOverLifetime = new FrameOverTime();
        rotationOverLifetime._type = 3;
        rotationOverLifetime._overTimeMin = gradientFrameMin;
        rotationOverLifetime._overTimeMax = gradientFrameMax;
        return rotationOverLifetime;
    }
    /**
     *生命周期旋转类型,0常量模式，1曲线模式，2随机双常量模式，3随机双曲线模式。
     */
    get type() {
        return this._type;
    }
    /**
     * 固定帧。
     */
    get constant() {
        return this._constant;
    }
    /**
     * 时间帧。
     */
    get frameOverTimeData() {
        return this._overTime;
    }
    /**
     * 最小固定帧。
     */
    get constantMin() {
        return this._constantMin;
    }
    /**
     * 最大固定帧。
     */
    get constantMax() {
        return this._constantMax;
    }
    /**
     * 最小时间帧。
     */
    get frameOverTimeDataMin() {
        return this._overTimeMin;
    }
    /**
     * 最大时间帧。
     */
    get frameOverTimeDataMax() {
        return this._overTimeMax;
    }
    /**
     * 克隆。
     * @param	destObject 克隆源。
     */
    cloneTo(destObject) {
        var destFrameOverTime = destObject;
        destFrameOverTime._type = this._type;
        destFrameOverTime._constant = this._constant;
        this._overTime.cloneTo(destFrameOverTime._overTime);
        destFrameOverTime._constantMin = this._constantMin;
        destFrameOverTime._constantMax = this._constantMax;
        this._overTimeMin.cloneTo(destFrameOverTime._overTimeMin);
        this._overTimeMax.cloneTo(destFrameOverTime._overTimeMax);
    }
    /**
     * 克隆。
     * @return	 克隆副本。
     */
    clone() {
        var destFrameOverTime = new FrameOverTime();
        this.cloneTo(destFrameOverTime);
        return destFrameOverTime;
    }
}