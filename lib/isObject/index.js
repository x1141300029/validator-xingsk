/**
 * 检查是否为对象
 * @param value
 * @return Boolean true:是对象 false:不是对象
 */
module.exports=(value)=>{
    try{
        if(!value) return false;
        JSON.stringify(value);
        return true;
    }catch (e) {
        return false;
    }
};
