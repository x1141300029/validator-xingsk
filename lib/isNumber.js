const {NUMBER}=require('../type');
/**
 * 验证是否是数字包括整数小数
 * @author xingsk
 * @param value
 * @return Boolean true:正确 false:错误
 */
module.exports=(value)=>{
    if(!value){
        return false;
    }
    return ((new RegExp(NUMBER)).test(value));
};

