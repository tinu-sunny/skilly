import commonAPI from "./CommonAPI";
import { serverURL } from "./serverURL";

export const userRegistration = async (reqbody)=>{
    return await commonAPI('POST', `${serverURL}/register`,reqbody,{})
}

export const loginUser = async(reqbody)=>{
    return await commonAPI('POST',`${serverURL}/login`,reqbody,{})
}

export const users = async()=>{
    return await commonAPI('GET',`${serverURL}/admin-user-management`,{})
}