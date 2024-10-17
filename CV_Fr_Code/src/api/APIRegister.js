import React from 'react';
import axios from 'axios';



import { api_url } from 'src/api/APIURL';



const APIRegister = () => {

  //User_Reg
  const REGISTER = async (data) => {
    try {
      const response = await axios.post(`${api_url}/api/users/register`, data);
      return response.data;
    } catch (error) {
      console.log('Error registering:', error);
      throw error;
    }
  };

  // User_Login
  const LOGIN = async (data) => {
    try {
      const response = await axios.post(`${api_url}/login`, data);
      return response.data;
    } catch (error) {
      console.log('Invalid credentials:', error);
      throw error;
    }
  };

  // //User_Reset_Pass
  // const RESET_PASS = async (data) => {
  //   try {
  //     const response = await axios.post(`${api_url}/Reset_Password/${data.mobileNo}`, { newPassword: data.newPassword });
  //     return response.data;
  //   } catch (error) {
  //     console.log("Can't reset password:", error);
  //     throw error;
  //   }
  // };


  // //Fill_ORG_Details
  // // http://192.168.1.69:3002/Add_Institute/231     :userId
  // const ORG_DETAILS = async (userId, data) => {
  //   try {
  //     const response = await axios.post(`${api_url}/Add_Institute/${userId}`, data);
  //     return response.data;
  //   } catch (error) {
  //     console.log("Unable to add details", error);
  //     throw error;
  //   }
  // };


  // //ADD_SCHOOL_OR_BRANCH
  // // http://192.168.1.69:3002/Add_Branch/231/4    :userId/instituteId
  // const ADD_SCHOOL_OR_BRANCH = async (userId, instituteId, data) => {
  //   try {
  //     const response = await axios.post(`${api_url}/Add_Branch/${userId}/${instituteId}`, data);
  //     return response.data;
  //   } catch (error) {
  //     console.log("Unable to add branch:", error);
  //     throw error;
  //   }
  // };



  // //REG_SCHOOL_OR_BRANCH-------//Add School details by Principal
  // // http://192.168.1.69:3002/Register_Branch/2     :userId
  // const REG_SCHOOL_OR_BRANCH = async (userId, data) => {
  //   try {
  //     const response = await axios.post(`${api_url}/Register_Branch/${userId}`, data);

  //     return response.data;
  //   } catch (error) {
  //     console.log("Unable to add details:", error);
  //     throw error;
  //   }
  // };


  // //Add_Individual_Personal_Details
  // // http://192.168.1.69:3002/Add_Info_Indivisual/249   :userId
  // const ADD_INDIV_PERSO = async (userId, data) => {
  //   try {
  //     const response = await axios.post(`${api_url}/Add_Info_Indivisual/${userId}`, data);
  //     return response.data;
  //   } catch (error) {
  //     console.log("Unable to add details:", error);
  //     throw error;
  //   }
  // };

  return { REGISTER, LOGIN };
}

export { APIRegister };