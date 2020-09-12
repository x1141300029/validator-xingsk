const {PHONE,TELPHONE}=require('../../config');
/**
 * 验证手机号或座机
 * @author xingsk
 * @param value
 * @return Boolean true:是手机号 false 不是手机号
 */
module.exports=(value)=>{
    if(!value){
        return false;
    }
    return (new RegExp(PHONE)).test(value)||(new RegExp(TELPHONE)).test(value);
};

