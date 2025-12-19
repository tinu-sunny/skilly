import axios from "axios";

const commonAPI = async(httpMethod,url,reqbody,reqHeader)=>{
    const reqconfig={
        method:httpMethod,
        url,
        data:reqbody,
        header:reqHeader
    }
    return await axios(reqconfig).then(res=>{
        return res
    })
    .catch(err=>{
        return err
    })
}

export default commonAPI