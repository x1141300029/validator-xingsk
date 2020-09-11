const {IDNUMBER15,IDNUMBER18}=require('../type');
/**
 * 验证身份证号
 * @author xingsk
 * @param value
 * @return Boolean true:正确的身份证号 false:错误的身份证号
 */
module.exports=(value)=>{
    if(!value){
        return false;
    }
    return ((new RegExp(IDNUMBER15)).test(value))||((new RegExp(IDNUMBER18)).test(value));
};

