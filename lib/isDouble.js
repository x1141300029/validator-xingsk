const {DOUBLE}=require('../type');
/**
 * 验证是否是小数
 * @author xingsk
 * @param value
 * @return Boolean true:正确 false:错误
 */
module.exports=(value)=>{
    if(!value){
        return false;
    }
    return ((new RegExp(DOUBLE)).test(value));
};

