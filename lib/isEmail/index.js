const {EMAIL}=require('../../config');
/**
 * 验证邮箱
 * @author xingsk
 * @param value
 * @return Boolean true:是邮箱 false:不是邮箱
 */
module.exports=(value)=>{
    if(!value){
        return false;
    }
    return (new RegExp(EMAIL)).test(value);
};

