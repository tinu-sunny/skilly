import commonAPI from "./CommonAPI";
import { serverURL } from "./serverURL";

export const userRegistration = async (reqbody)=>{
    return await commonAPI('POST', `${serverURL}/register`,reqbody,{})
}