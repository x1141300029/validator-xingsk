/**
 * @function isArray:是否为数组
 * @function isChinese:是否为中文
 * @function isDouble:是否为浮点数(小数)
 * @function isIDCard:是否为身份证号
 * @function isInteger:是否为整数
 * @function isLetter:是否为全英文
 * @function isNull:是否为空
 * @function isNumber:是否为数字
 * @function isObject:是否为json数据
 * @function isPhone:是否为手机号
 * @function isZip:是否为邮编
 *
 * @function validate:校验函数
 */
const validate = require('./function');
const {
    isArray,
    isChinese,
    isDouble,
    isIDCard,
    isInteger,
    isLetter,
    isNull,
    isNumber,
    isObject,
    isPhone,
    isZip,
} = require('./lib');
module.exports = {
    isArray,
    isChinese,
    isDouble,
    isIDCard,
    isInteger,
    isLetter,
    isNull,
    isNumber,
    isObject,
    isPhone,
    isZip,
    validate,
};
