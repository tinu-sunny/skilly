import axios from "axios";


const commonAPI = async(httpMethod,url,reqbody,reqHeader={})=>{
const token = sessionStorage.getItem("token");

    const reqconfig={
        method:httpMethod,
        url,
        data:reqbody,
        headers:{
      Authorization: `Bearer ${token}`,
      ...reqHeader
    }
    }
    return await axios(reqconfig).then(res=>{
        return res
    })
    .catch(err=>{
        return err
    })
}

export default commonAPI