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

export const chatBot = async(reqbody,reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/chat`,reqbody,reqHeader)
}
export const contact = async(reqbody)=>{
    return await commonAPI('POST',`${serverURL}/contact`,reqbody,{})
}

export const contactAdminView = async()=>{
    return await commonAPI('GET',`${serverURL}/contact-admin-view`,{})
}

export const addcarreerAPI = async(reqbody)=>{
    return await commonAPI('POST',`${serverURL}/carrerfield-add`,reqbody,{})
}

export const viewCarreerAPI = async()=>{
    return await commonAPI('GEt',`${serverURL}/carrerfield-admin-view`,{})
}