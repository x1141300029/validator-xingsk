/**
 * isArray:是否为数组
 * isChinese:是否为中文
 * isDouble:是否为浮点数(小数)
 * isIDCard:是否为身份证号
 * isInteger:是否为整数
 * isLetter:是否为全英文
 * isNull:是否为空
 * isNumber:是否为数字
 * isObject:是否为json数据
 * isPhone:是否为手机号
 * isZip:是否为邮编
 */
module.exports={
  isArray:require('./lib/isArray'),
  isChinese:require('./lib/isChinese'),
  isDouble:require('./lib/isDouble'),
  isEmail:require('./lib/isEmail'),
  isIDCard:require('./lib/isIDCard'),
  isInteger:require('./lib/isInteger'),
  isLetter:require('./lib/isLetter'),
  isNull:require('./lib/isNull'),
  isNumber:require('./lib/isNumber'),
  isObject:require('./lib/isObject'),
  isPhone:require('./lib/isPhone'),
  isZip:require('./lib/isZip'),
};
