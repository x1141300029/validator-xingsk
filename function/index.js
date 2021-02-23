const {
    isArray,
    isNull,
    isPhone,
    isObject,
    isEmail
} = require('../lib');
const {message} = require('../config')

/**
 * {value: body.email||"", required: true, type: 'email',message:'邮箱格式错误'},
 {value:body.code,required:true,length:6,message:'请输入6位数的验证码'},
 */
/**
 * 校验函数
 * @param options {Array} 参数
 * @param options.value {String|Number} 值
 * @param [options.require] {Boolean} default:false 是否为必填
 * @param [options.type] {String} 值类型 可选值：email|phone
 * @param [options.minlength] {Number} 最小长度
 * @param [options.maxlenght] {Number} 最大长度
 * @param [options.length] {Number} 值长度
 * @param [options.message] {String} 错误消息
 * @param [options.pattern] 自定义正则表达式 可选：'^123$' /^123$/ 两种方式
 * @return message {Object} 返回值
 */
module.exports = (options = []) => {
    if (!(isArray(options))) {
        console.error(`配置错误：参数必须是Array，详细配置见github：https://github.com/x1141300029/validator-xingsk`);
        return message['-10'];
    }
    for (let i = 0; i < options.length; i++) {
        let item = options[i];
        if (!(isObject(item))) {
            console.error(`配置错误：每一项必须是Object/JSON，详细配置见github：https://github.com/x1141300029/validator-xingsk`);
            return message['-12'];
        } else if (item.required === true) {//判断是否必填
            //判断值是否为空
            if (isNull(item.value)) {
                return Object.assign(message['-11'], {message: item.message || (message['-11']).message});
            }
        } else if (item.type) {
            if (item.type === "phone") {
                //验证是否是手机号
                if (!(isPhone(item.value))) {
                    return Object.assign(message['-10'], {message: item.message || (message['-10']).message})
                }
            } else if (item.type === "email") {
                //验证是否是邮箱
                if (!(isEmail(item.value))) {
                    return Object.assign(message['-10'], {message: item.message || (message['-10']).message})
                }
            }
        } else if (!isNull(item.minlength) || (item.maxlength)) {
            item.minlength = parseInt(item.minlength + '');
            item.maxlength = parseInt(item.maxlength + '');

            //如果最小长度和最大长度都传则匹配区间值
            if (!isNull(item.minlength) && !isNull(item.maxlength)) {
                // 123 1 4
                if (isNull(item.value)) {
                    return Object.assign(message['-11'], {message: item.message || (message['-11']).message});
                } else if (item.value.length < item.minlength || item.value.length > item.maxlength) {
                    return Object.assign(message['-10'], {message: item.message || (message['-10']).message})
                }
            } else {
                if (!isNull(item.minlength)) {
                    if (isNull(item.value)) {
                        return Object.assign(message['-11'], {message: item.message || (message['-11']).message});
                    } else if (item.value.length < item.minlength) {
                        return Object.assign(message['-10'], {message: item.message || (message['-10']).message})
                    }
                }else{
                    if (isNull(item.value)) {
                        return Object.assign(message['-11'], {message: item.message || (message['-11']).message});
                    } else if (item.value.length > item.maxlength) {
                        return Object.assign(message['-10'], {message: item.message || (message['-10']).message})
                    }
                }
            }
        }else if(item.length){//判断值长度
            item.length=parseInt(item.length+'');
            if (isNull(item.value)) {
                return Object.assign(message['-11'], {message: item.message || (message['-11']).message});
            } else if (item.value.length !== item.length) {
                return Object.assign(message['-10'], {message: item.message || (message['-10']).message})
            }
        } else if (item.pattern) {
            // let pat = item.pattern.toString();
            // if (typeof item.pattern === "object") {
            //     if (!(/\/([a][\S]{2}|[\S][b][\S]|[\S]{2}[^c])\/$/.test(pat))) {
            //         console.error('配置错误：您输入的正则表达式不正确，详细配置见github：https://github.com/x1141300029/validator-xingsk')
            //         return message['-13'];
            //     }
            // }
            // pat = pat.substring(1, pat.length - 1);
            // if (!(new RegExp(pat).test(item.value))) {
            //     return Object.assign(message['-14'], {message: item.message || (message['-10']).message});
            // }
            if(!(new RegExp(item.pattern).test(item.value))){
                return  Object.assign(message['-14'],{message:item.message||(message['-10']).message});
            }
        }
    }
    return message['1']
}