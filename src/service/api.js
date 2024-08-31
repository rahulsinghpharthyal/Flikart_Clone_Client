import { axiosPrivate } from '../customAxios/authAxios';
const URL = 'http://localhost:8000';
// const URL = 'https://flipkart-clone-server-iszd.onrender.com';


export const authenticationSignup = async (data) =>{
    try{
       return await axiosPrivate.post(`${URL}/signup`, data)
    }catch(error){
        console.log('Error while calling signup api', error)
    }
}

export const authenticateLogin = async (data) =>{
    try{
       return await axiosPrivate.post(`${URL}/login`, data)
    }catch(error){
        console.log('Error while calling signup api', error)
        return error.response
    }
}

export const payUsingPaytm = async (data) => {
    try{
       const response = await axiosPrivate.post(`${URL}/payment`, data)
       return response.data
    }
    catch(err){
        console.log("Error while calling payment API ", err)
    }
}