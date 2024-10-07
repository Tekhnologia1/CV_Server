

import axios from 'axios';

const http = axios.create({
  // baseURL: 'http://192.168.1.1:3005',
  baseURL: 'http://192.168.1.69:3002',
});

class Auth {
  static isAuthenticated() {
    const token = localStorage.getItem('token');
    return token !== null;
  }

  // static getUserRole() {
  //   return localStorage.getItem('userRole');
  // }

  // static getUserId() {
  //   return localStorage.getItem('userId');
  // }

  // static getSchoolIds() {
  //   return localStorage.getItem('schoolId');
  // }

  static login(token) {
    localStorage.setItem('token', token);
    // localStorage.setItem('userRole', userRole);
    // localStorage.setItem('userId', userId);
  }

  static logout() {
    localStorage.removeItem('token');
    // localStorage.removeItem('userRole');
  }

  static getUserData() {
    return localStorage.getItem('user');
  }
}

export { Auth, http };

