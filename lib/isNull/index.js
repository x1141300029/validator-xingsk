const isArray = require('../isArray');
const isObject = require('../isObject');
/**
 * 校验是否为空
 * @param value
 * @return Boolean true:是 false:否
 */
module.exports = (value) => {
    //判断是否传入内容
    if (!value&&value!==0) return true;
    //判断是否为数组 并且长度大于0
    if (isArray(value) && value.length > 0) return false;
    //判断是否为JSON
    if (isObject(value)) return false;
    //如果为undefined 或null 返回空
    if (value === 'undefined' || value === "null") return true;
    return false;
};

