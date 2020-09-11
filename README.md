##校验
```
作者:邢世宽
邮箱:1141300029@qq.com
qq:1141300029@qq.com
微信:13161497787
```
###### 安装
```
npm install validator-xingsk -D
```
###### 使用
```
import {isPhone} from 'validator-xingsk'

console.log(isPhone('13161497787')) //true
console.log(isPhone('131')) //false
```
###### 可用函数
```
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
```

