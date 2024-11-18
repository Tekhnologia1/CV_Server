import React from 'react';
import axios from 'axios';



import { api_url } from 'src/services/api/APIURL';

const APIStudent = () => {

    const GetAllConsellors = async () => {
        try {

            const response = await fetch(`${api_url}/GetAllCounsellor`);
            console.log(response);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const resdata = await response.json();
            return resdata;
        } catch (error) {
            console.log('Error :', error);
            throw error;
        }
    };

    return { GetAllConsellors }
}

export { APIStudent };