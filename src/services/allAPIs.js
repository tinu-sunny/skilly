import commonAPI from "./CommonAPI";
import { serverURL } from "./serverURL";


// user registration 
export const userRegistration = async (reqbody)=>{
    return await commonAPI('POST', `${serverURL}/register`,reqbody,{})
}


// users login
export const loginUser = async(reqbody)=>{
    return await commonAPI('POST',`${serverURL}/login`,reqbody,{})
}

// admin all user view 
export const users = async()=>{
    return await commonAPI('GET',`${serverURL}/admin-user-management`,{})
}

// for chat bot api call
export const chatBot = async(reqbody,reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/chat`,reqbody,reqHeader)
}

// add contact data from index page 
export const contact = async(reqbody)=>{
    return await commonAPI('POST',`${serverURL}/contact`,reqbody,{})
}


// contact view  admin
export const contactAdminView = async()=>{
    return await commonAPI('GET',`${serverURL}/contact-admin-view`,{})
}


// admin carreer add 
export const addcarreerAPI = async(reqbody)=>{
    return await commonAPI('POST',`${serverURL}/carrerfield-add`,reqbody,{})
}

// admin carreer view 
export const viewCarreerAPI = async()=>{
    return await commonAPI('GET',`${serverURL}/carrerfield-admin-view`,{})
}

// admin user activation and deactivation

export const  statusupdateadmin = async(reqbody)=>{
    return await commonAPI('PUT',`${serverURL}/admin-user-statusupdate`,reqbody,{})
}

// view  login users 

export const  activeuserAPI = async()=>{
    return await commonAPI('GET',`${serverURL}/active-user`,null,{})
}

// student career view
export const careerview = async()=>{
    return await commonAPI("GET",`${serverURL}/career-view`,null,{})
}

// student  feedback add 
export const studentfeedbackadd =async(reqbody)=>{
    return await commonAPI("POST",`${serverURL}/feedback-add-student`,reqbody,{})
}





// working post add 
export const workingpostadd =async(reqbody)=>{
    return await commonAPI("POST",`${serverURL}/post-add-working`,reqbody,{})
}


export const workingpostView =async()=>{
    return await commonAPI("GET",`${serverURL}/post-view-working`,null,{})
}

export const feedbackadminview =async()=>{
    return await commonAPI("GET",`${serverURL}/admin-feedback-view`,null,{})
}

export const googlelogin = async(reqbody)=>{
    return await commonAPI("POST",`${serverURL}/googlelogin`,reqbody,{})
}

export const googlelogindatasave = async(reqbody)=>{
    return await commonAPI("POST",`${serverURL}/googlelogin-datasave`,reqbody,{})
}


export const carrerfileldupdateAPI = async(reqbody)=>{
    return await commonAPI("PATCH",`${serverURL}/admin-carrerupdate`,reqbody,{})
}

export const carrerfieldDelete = async(reqbody)=>{
    return await commonAPI("DELETE",`${serverURL}/admin-carrerfield-delete`,reqbody,{})
}

// company all api calls

export const jobadd= async(reqbody)=>{
    return await commonAPI("POST",`${serverURL}/job-add`,reqbody,{})
}

// view posted jobs


export const jobviewcompany = async()=>{
    return await commonAPI("GET",`${serverURL}/job-view-company`,{},{})
}

// edit job
export const jobeditcompany = async(reqbody)=>{
    return await commonAPI("PATCH",`${serverURL}/job-edit-company`,reqbody,{})
}

// close job application
export const closejobaplication = async(reqbody)=>{
    return await commonAPI("PATCH",`${serverURL}/job-aplication-company-close`,reqbody,{})
}

// delete job application
export const deletejobaplication = async(reqbody)=>{
    return await commonAPI("DELETE",`${serverURL}/job-company-delete`,reqbody,{})
}




// student Api call 

// studet -job view
export const studentjobview =async()=>{
    return await commonAPI("GET",`${serverURL}/student-job-view`,{},{})
}