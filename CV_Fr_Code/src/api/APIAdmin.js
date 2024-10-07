import React from 'react';
import axios from 'axios';



const api_url = 'http://192.168.29.17:3007';


const APIAdmin = () => {


  //Create Firm
  const CREATE_FIRM = async (userId, data) => {
    try {
      const response = await axios.post(`${api_url}/api/users/create_firm/${userId}`, data);
      return response.data;
    } catch (error) {
      console.log("Unable to create firm:", error);
      throw error;
    }
  };

//Get All firms user_id
  const GET_ALL_FIRMS = async (userId) => {
  try {
    const response = await fetch(`${api_url}/api/users/get_all_firms_by_user/${userId}`);
    return response.data;
  } catch (error) {
    console.log("Unable to fetch firms:", error);
    throw error;
  }
};

  // CRUD Opearation of General Ledger
  // Create Gen Ledger using firm_id
  const CREATE_GENE_LEDGER = async (firm_id, data) => {
    try {
      const response = await axios.post(`${api_url}/api/users/create_general_ledgers/${firm_id}`, data);
      const json_response = await response.json();
      return json_response;
    } catch (error) {
      console.log('Unable to create gene ledger:', error);
      throw error;
    }
  };

  const GET_GENE_LEDGER = async (firm_id) => {
    try {
      const response = await fetch(`${api_url}/api/users/get_general_ledgers/${firm_id}`);
      const json_response = await response.json();
      return json_response;
    } catch (error) {
      console.log('Invalid credentials:', error);
      throw error;
    }
  };

  const UPDATE_GENE_LEDGER = async (firm_id, gl_id, data) => {
    try {
      const response = await axios.update(`${api_url}/api/users/update_general_ledgers/${firm_id}/${gl_id}`, data);
      const json_response = await response.json();
      return json_response;
    } catch (error) {
      console.log('Invalid credentials:', error);
      throw error;
    }
  };

  const DELETE_GENE_LEDGER = async (firm_id, gl_id) => {
    try {
      const response = await axios.delete(`${api_url}/api/users/delete_general_ledgers/${firm_id}/${gl_id}`);
      const json_response = await response.json();
      return json_response;
    } catch (error) {
      console.log('Invalid credentials:', error);
      throw error;
    }
  };

  // const GET_ALL_GENE_LEDGER = async (firm_id) => {
  //   try {
  //     const response = await fetch(`${api_url}/api/users/get_general_ledgers/${firm_id}`);
  //     const json_response = await response.json();
  //     return json_response;
  //   } catch (error) {
  //     console.log('Invalid credentials:', error);
  //     throw error;
  //   }
  // };
  // //---------------------
  // //Fetch Menu list and Permissions list
  // const MENU_AND_PERMISSIONS = async () => {
  //   try {
  //     const response = await fetch(`${api_url}/fetch_menu_permissions`);
  //     const json_response = await response.json();
  //     return json_response;
  //   } catch (error) {
  //     console.error('Error fetching menu permissions:', error);
  //     throw error;
  //   }
  // };

  //   //Assign Menu and Permissions to Roles/Designations
  // const ADDROLE_WITH_PERMISSIONS = async (userId, instituteId, data) => {
  //   try {
  //     const response = await axios.post(`${api_url}/Add_Role_And_MenuAccess/${userId}/${instituteId}`, data);
  //     const json_response = await response.data;
      
  //     return json_response;
  //   } catch (error) {
  //     console.log('MenuPermissions are not added:', error);
  //     throw error;
  //   }
  // };

  // //Add users with role and menu and permissions
  // const ADD_USER_WITH_ROLE_PERMISSIONS = async (userId, instituteId, data) => {
  //   try {
  //     const response = await axios.post(`${api_url}/Add_Users_with_MenuAccess/${userId}/${instituteId}`, data);
  //     const json_response = await response.data;
      
  //     return json_response;
  //   } catch (error) {
  //     console.log('MenuPermissions are not added:', error);
  //     throw error;
  //   }
  // };


  return { CREATE_FIRM, GET_ALL_FIRMS, CREATE_GENE_LEDGER, GET_GENE_LEDGER, UPDATE_GENE_LEDGER,DELETE_GENE_LEDGER };
}

export { APIAdmin };


// import React from 'react';
// import axios from 'axios';



// const api_url = 'http://192.168.1.75:3007';



// const APIAdmin = () => {

//   //CRUD Operations by Admin
//   //Designation CRUD
//   //Adding
//   const DESIGNATION_CRUD_ADD = async (userId, instituteId, data) => {
//     try {
//       const response = await axios.post(`${api_url}/Add_Designation/${userId}/${instituteId}`, data);
//       return response.data;
//     } catch (error) {
//       console.log("Unable to add Designation:", error);
//       throw error;
//     }
//   };

//   //Fetching CRUD Designations List
//   const DESIGNATION_CRUD_FETCH = async (instituteId) => {
//     try {
//       const response = await fetch(`${api_url}/Get_All_Designation/${instituteId}`);
//       const json_response = await response.json();
//       return json_response;
//     } catch (error) {
//       console.log('Invalid credentials:', error);
//       throw error;
//     }
//   };
//   //---------------------
//   //Fetch Menu list and Permissions list
//   const MENU_AND_PERMISSIONS = async () => {
//     try {
//       const response = await fetch(`${api_url}/fetch_menu_permissions`);
//       const json_response = await response.json();
//       return json_response;
//     } catch (error) {
//       console.error('Error fetching menu permissions:', error);
//       throw error;
//     }
//   };

//     //Assign Menu and Permissions to Roles/Designations
//   const ADDROLE_WITH_PERMISSIONS = async (userId, instituteId, data) => {
//     try {
//       const response = await axios.post(`${api_url}/Add_Role_And_MenuAccess/${userId}/${instituteId}`, data);
//       const json_response = await response.data;
      
//       return json_response;
//     } catch (error) {
//       console.log('MenuPermissions are not added:', error);
//       throw error;
//     }
//   };

//   //Add users with role and menu and permissions
//   const ADD_USER_WITH_ROLE_PERMISSIONS = async (userId, instituteId, data) => {
//     try {
//       const response = await axios.post(`${api_url}/Add_Users_with_MenuAccess/${userId}/${instituteId}`, data);
//       const json_response = await response.data;
      
//       return json_response;
//     } catch (error) {
//       console.log('MenuPermissions are not added:', error);
//       throw error;
//     }
//   };


//   return { DESIGNATION_CRUD_ADD, DESIGNATION_CRUD_FETCH, MENU_AND_PERMISSIONS, ADDROLE_WITH_PERMISSIONS, ADD_USER_WITH_ROLE_PERMISSIONS };
// }

// export { APIAdmin };




// // import axios from 'axios';

// // const userId = "45";
// // const schoolId = "20"

// // // const api_url = 'http://192.168.1.43:3005';

// // const api_url = 'http://localhost:3005';


// // // Fetch

// // export const fetchClass = async () => {
// //     try {
// //       const response = await axios.get(`${api_url}/classdata/${schoolId}`);
// //       return response.data;
// //     } catch (error) {
// //       console.error('Error fetching class:', error);
// //       throw error;
// //     }
// // };


// // export const fetchSection = async () => {
// //     try {
// //       const response = await axios.get(`${api_url}/sectiondata/${schoolId}`);
// //       return response.data;
// //     } catch (error) {
// //       console.error('Error fetching section:', error);
// //       throw error;
// //     }
// // };


// // export const fetchTeacher = async () => {
// //     try {
// //       const response = await axios.get(`${api_url}/teacherdata/${schoolId}`);
// //       return response.data;
// //     } catch (error) {
// //       console.error('Error fetching teacher:', error);
// //       throw error;
// //     }
// // };


// // export const fetchSubject = async () => {
// //     try {
// //       const response = await axios.get(`${api_url}/subjectdata/${schoolId}`);
// //       return response.data;
// //     } catch (error) {
// //       console.error('Error fetching subject:', error);
// //       throw error;
// //     }
// // };


// // export const fetchStudentsFromClass = async (classId) => {
// //   try {
// //       const response = await axios.get(`${api_url}/getStudentFrom_Class/${classId}`);
// //       return response.data;
// //   } catch (error) {
// //       throw new Error('Error fetching student data from class');
// //   }
// // }


// // export const fetchClassSection = async () => {
// //   try {
// //       const response = await axios.get(`${api_url}/getClass_Section_admin/${schoolId}`);
// //       return response.data;
// //   } catch (error) {
// //       throw new Error('Error fetching student data from class');
// //   }
// // }


// // export const fetchClassSubTeacher = async () => {
// //   try {
// //       const response = await axios.get(`${api_url}/getClsSecTeachSub_For_admin/${schoolId}`);
// //       return response.data;
// //   } catch (error) {
// //       throw new Error('Error fetching class subject teacher');
// //   }
// // }


// // export const fetchStudent = async () => {
// //   try {
// //       const response = await axios.get(`${api_url}/studentdata/${schoolId}`);
// //       return response.data;
// //   } catch (error) {
// //       throw new Error('Error fetching student');
// //   }
// // }


// // export const fetchStudentClass = async () => {
// //   try {
// //       const response = await axios.get(`${api_url}/getStudents_Class_For_admin/${schoolId}`);
// //       return response.data;
// //   } catch (error) {
// //       throw new Error('Error fetching student class');
// //   }
// // }


// // // Add or Register

// // export const registerTeacher = async (teacherData) => {
// //     try {
// //       const response = await axios.post(`${api_url}/teachers/${userId}/${schoolId}`, teacherData);
// //       return response.data;
// //     } catch (error) {
// //       console.log('Error registering teacher:', error);
// //       throw error;
// //     }
// // };


// // export const addClass = async (classData) => {
// //     try {
// //     const response = await axios.post(`${api_url}/addingClass/${userId}/${schoolId}`, classData);
// //     return response.data;
// //     } catch (error) {
// //     console.log('Error adding class:', error);
// //     throw error;
// //     }
// // };

// // export const addSection = async (sectionData) => {
// //     try {
// //     const response = await axios.post(`${api_url}/addingSection/${userId}/${schoolId}`, sectionData);
// //     return response.data;
// //     } catch (error) {
// //     console.log('Error adding section:', error);
// //     throw error;
// //     }
// // };

// // export const addSubject = async (subjectData) => {
// //     try {
// //     const response = await axios.post(`${api_url}/addingSubject/${userId}/${schoolId}`, subjectData);
// //     return response.data;
// //     } catch (error) {
// //     console.log('Error adding subject:', error);
// //     throw error;
// //     }
// // };


// // export const addClassSection = async (classSectionData) => {
// //     try {
// //     const response = await axios.post(`${api_url}/Assigning_Sub_For_Class_Sec`, classSectionData);
// //     return response.data;
// //     } catch (error) {
// //     console.log('Error adding class section:', error);
// //     throw error;
// //     }
// // };


// // export const addSubjectTeacher = async (data) => {
// //     try {
// //     const response = await axios.post(`${api_url}/Assigning_Sub_For_Teach`, data);
// //     return response.data;
// //     } catch (error) {
// //     console.log('Error adding subject teacher:', error);
// //     throw error;
// //     }
// // };


// // export const registerStudent = async (studentData) => {
// //   try {
// //     const response = await axios.post(`${api_url}/students/${userId}/${schoolId}`, studentData);
// //     return response.data;
// //   } catch (error) {
// //     console.log('Error registering student:', error);
// //     throw error;
// //   }
// // };


// // export const addStudentClass = async (data) => {
// //   try {
// //   const response = await axios.post(`${api_url}/Adding_Class_Sec_For_Stud`, data);
// //   return response.data;
// //   } catch (error) {
// //   console.log('Error adding subject teacher:', error);
// //   throw error;
// //   }
// // };



// // //  update or Edit


// // export const updateTeacher = async ( editingTeacherId, data) => {
// //   try {
// //     const response = await axios.put(`${api_url}/updateTeacher/${userId}/${editingTeacherId}`, data);
// //     return response.data;
// //   } catch (error) {
// //     console.log('Error updating teacher:', error);
// //     throw error;
// //   }
// // };


// // export const updateClass = async (editingClassId, data) => {
// //   try {
// //     const response = await axios.put(`${api_url}/updateClass/${userId}/${editingClassId}`, data);
// //     return response.data;
// //   } catch (error) {
// //     console.log('Error updating class:', error);
// //     throw error;
// //   }
// // };


// // export const updateSection = async ( editingSectionId, data) => {
// //   try {
// //     const response = await axios.put(`${api_url}/updateSection/${userId}/${editingSectionId}`, data);
// //     return response.data;
// //   } catch (error) {
// //     console.log('Error updating section:', error);
// //     throw error;
// //   }
// // };


// // export const updateSubject = async ( editingSubjectId, data) => {
// //   try {
// //     const response = await axios.put(`${api_url}/updateSubject/${userId}/${editingSubjectId}`, data);
// //     return response.data;
// //   } catch (error) {
// //     console.log('Error updating subject:', error);
// //     throw error;
// //   }
// // };


// // export const updateClassSection = async ( editingClsSecId, data) => {
// //   try {
// //     const response = await axios.put(`${api_url}/updateClassSection/${userId}/${editingClsSecId}`, data);
// //     return response.data;
// //   } catch (error) {
// //     console.log('Error updating class section:', error);
// //     throw error;
// //   }
// // };


// // export const updateClassSubTeacher = async ( editingClsSubTeaId, data) => {
// //   try {
// //     const response = await axios.put(`${api_url}/updateClsSecSubTea/${userId}/${editingClsSubTeaId}`, data);
// //     return response.data;
// //   } catch (error) {
// //     console.log('Error updating class section:', error);
// //     throw error;
// //   }
// // };


// // export const updateStudent = async ( editingStudentId, data) => {
// //   try {
// //     const response = await axios.put(`${api_url}/updateStudent/${userId}/${editingStudentId}`, data);
// //     return response.data;
// //   } catch (error) {
// //     console.log('Error updating student:', error);
// //     throw error;
// //   }
// // };


// // export const updateStudentClass = async ( editingStdClsId, data) => {
// //   try {
// //     const response = await axios.put(`${api_url}/addStudentsInStudCls/${userId}/${editingStdClsId}`, data);
// //     return response.data;
// //   } catch (error) {
// //     console.log('Error updating student class:', error);
// //     throw error;
// //   }
// // };

// // //  Delete

// // export const deleteTeacher = async ( teacherToDelete) => {
// //   try {
// //     const response = await axios.delete(`${api_url}/deleteTeacher/${userId}/${teacherToDelete}`);
// //     return response.data;
// //   } catch (error) {
// //     console.log('Error deleting teacher:', error);
// //     throw error;
// //   }
// // };


// // export const deleteClass = async ( classToDelete) => {
// //   try {
// //     const response = await axios.delete(`${api_url}/deleteClass/${userId}/${classToDelete}`);
// //     return response.data;
// //   } catch (error) {
// //     console.log('Error deleting class:', error);
// //     throw error;
// //   }
// // };


// // export const deleteSection = async ( sectionToDelete) => {
// //   try {
// //     const response = await axios.delete(`${api_url}/deleteSection/${userId}/${sectionToDelete}`);
// //     return response.data;
// //   } catch (error) {
// //     console.log('Error deleting section:', error);
// //     throw error;
// //   }
// // };

// // export const deleteSubject = async (subjectToDelete) => {
// //   try {
// //     const response = await axios.delete(`${api_url}/deleteSubject/${userId}/${subjectToDelete}`);
// //     return response.data;
// //   } catch (error) {
// //     console.log('Error deleting subject:', error);
// //     throw error;
// //   }
// // };


// // export const deleteClassSection = async ( clsSecToDelete) => {
// //   try {
// //     const response = await axios.delete(`${api_url}/deleteClassSection/${userId}/${clsSecToDelete}`);
// //     return response.data;
// //   } catch (error) {
// //     console.log('Error deleting class section:', error);
// //     throw error;
// //   }
// // };


// // export const deleteClassSubTeacher = async ( clsSecToDelete) => {
// //   try {
// //     const response = await axios.delete(`${api_url}/deleteClassSection/${userId}/${clsSecToDelete}`);
// //     return response.data;
// //   } catch (error) {
// //     console.log('Error deleting class section:', error);
// //     throw error;
// //   }
// // };


// // export const deleteStudent = async ( studentToDelete) => {
// //   try {
// //     const response = await axios.delete(`${api_url}/deleteStudent/${userId}/${studentToDelete}`);
// //     return response.data;
// //   } catch (error) {
// //     console.log('Error deleting class section:', error);
// //     throw error;
// //   }
// // };


// // export const deleteStudentClass = async ( stdClsToDelete) => {
// //   try {
// //     const response = await axios.delete(`${api_url}/deleteClsStudent/${stdClsToDelete}`);
// //     return response.data;
// //   } catch (error) {
// //     console.log('Error deleting class section:', error);
// //     throw error;
// //   }
// // };