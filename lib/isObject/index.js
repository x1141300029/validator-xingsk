/**
 * 检查是否为对象
 * @param value
 * @return Boolean true:空 false:不是
 */
module.exports=(value)=>{
    try{
        if(!value) return false;
        value=JSON.stringify(value);
        if(value==="{}"){
            return false;
        }
        return true;
    }catch (e) {
        return true;
    }
};