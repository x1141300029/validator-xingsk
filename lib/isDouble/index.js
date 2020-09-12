const {DOUBLE}=require('../../config');
/**
 * 验证是否是小数
 * @author xingsk
 * @param value
 * @return Boolean true:正确 false:错误
 */
module.exports=(value)=>{
    return ((new RegExp(DOUBLE)).test(value));
};

