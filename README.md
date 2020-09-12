## 校验

```
作者:邢世宽
邮箱:1141300029@qq.com
qq:1141300029@qq.com
微信:13161497787
```
### 安装
```
npm install validator-xingsk -D
```
### 使用
```javascript
import {isPhone} from 'validator-xingsk'

console.log(isPhone('13161497787')) //true
console.log(isPhone('131')) //false
```
### 可用函数
```
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
```

### 函数说明

#### isArray

> 是否为数组

```javascript
import {isArray} from 'validator-xingsk'

console.log(isArray('')) //false
console.log(isArray(['1'])) //true
console.log(isArray([])) //true
```

#### isChinese

> 是否为中文

```
import {isChinese} from 'validator-xingsk'

console.log(isChinese('123')) //false
console.log(isChinese(['你好'])) //true
```

#### isDouble

> 是否为浮点数(小数)，支持正小数或负小数

```
import {isDouble} from 'validator-xingsk'

console.log(isDouble(123)) //false
console.log(isDouble(123.123)) //true
```

#### isIDCard

> 是否为身份证号

```
import {isIDCard} from 'validator-xingsk'

console.log(isIDCard(123)) //false
//身份证号就不在这里演示了
```

#### isInteger

> 是否为整数，支持正整数或负整数

```
import {isInteger} from 'validator-xingsk'

console.log(isInteger(123)) //true
console.log(isInteger(123.123)) //false
```

#### isNull

> 是否为空。注意：数字0不为空

```
import {isNull} from 'validator-xingsk'

console.log(isNull('')) //true
console.log(isNull('123')) //false
console.log(isNull(0)) //false
```

#### isNumber

> 是否为数字

```
import {isNumber} from 'validator-xingsk'

console.log(isNumber('')) //false
console.log(isNumber('123')) //true
console.log(isNumber(123.123)) //true
```

#### isObject

> 是否为JSON

```
import {isObject} from 'validator-xingsk'

console.log(isObject('')) //false
console.log(isObject({code:1})) //true
```

#### isPhone

> 是否为手机号

```
import {isPhone} from 'validator-xingsk'

console.log(isPhone('123123')) //false
console.log(isPhone('13161497787')) //true
```

#### isZip

> 是否为邮编

```
import {isPhone} from 'validator-xingsk'

console.log(isPhone('100010')) //true
console.log(isPhone('00000')) //false
```

#### validate *

```javascript
import {validate} from 'validator-xingsk'

let validateMessage=validate([
    {value:'1141300029@qq.com',required:true,type:'email'},
    {value:'1141300029@qq.com',required:true,type:'email',message:'邮箱格式错误'},
    {value:'123',min:1,max:6,message:'最少1位数最多6位数'},
    {pattern:/[0-9]/,message:'请输入0-9的数字'},
    {pattern:'[0-9]',message:'请输入0-9的数字'}
])
if(validateMessage<0){
    console.log('匹配失败');
    //如有自定义错误信息则输出自定义错误信息，如果没有自定义则输出默认定义消息
    console.log(validateMessage.message)
}else{
    // TODO 
}
```

