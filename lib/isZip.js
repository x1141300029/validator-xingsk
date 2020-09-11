const {ZIP}=require('../type');
/**
 * 验证邮编
 * @author xingsk
 * @param value
 * @return Boolean true:正确 false:错误
 */
module.exports=(value)=>{
    if(!value){
        return false;
    }
    return ((new RegExp(ZIP)).test(value));
};

