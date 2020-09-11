const {CHINESE}=require('../type');
/**
 * 验证是否为中文
 * @author xingsk
 * @param value
 * @return Boolean true:正确 false:错误
 */
module.exports=(value)=>{
    if(!value){
        return false;
    }
    return ((new RegExp(CHINESE)).test(value));
};

