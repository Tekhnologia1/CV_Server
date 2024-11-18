import { useState } from "react";

const ArrayData = () => {

    //Parent Signup Fields------
    const [occupations] = useState(
        [
            { 'name': 'Accountant' },
            { 'name': 'Banker' },
            { 'name': 'Business Manager' },
            { 'name': 'Civil Servant' },
            { 'name': 'Data Scientist' },
            { 'name': 'Doctor' },
            { 'name': 'Engineer' },
            { 'name': 'Entrepreneur' },
            { 'name': 'Graphic Designer' },
            { 'name': 'Homemaker' },
            { 'name': 'IT Specialist' },
            { 'name': 'Journalist' },
            { 'name': 'Lawyer' },
            { 'name': 'Marketing Specialist' },
            { 'name': 'Musician' },
            { 'name': 'Nurse' },
            { 'name': 'Pharmacist' },
            { 'name': 'Photographer' },
            { 'name': 'Professor' },
            { 'name': 'Real Estate Agent' },
            { 'name': 'Researcher' },
            { 'name': 'Retired' },
            { 'name': 'Sales Representative' },
            { 'name': 'Software Developer' },
            { 'name': 'Teacher' },
            { 'name': 'Other' }
        ]
    )

    const [higherstudies] = useState(
        [
            { 'name': "Master's Programs" },
            { 'name': 'Doctoral Programs' },
            { 'name': 'Diploma Programs' },
            { 'name': 'Study Abroad' },
            { 'name': 'Other' }
        ]
    )

    const [genders] = useState(
        [
            { 'name': 'Male' },
            { 'name': 'Female' },
            { 'name': 'Other' }
        ]
    );
    //-------------------------------
    //Student Signup Fields------
    const [studClasses] = useState(
        [
            { 'name': '7th' },
            { 'name': '8th' },
            { 'name': '9th' },
            { 'name': '10th' },
            { 'name': '11th' },
            { 'name': '12th' },
        ]
    );
    //-------------------------------
    //Counsellor Signup Fields------
    const [educations] = useState(
        [
            { 'name': 'Graduation' },
            { 'name': 'Post Graduation' }
        ]
    );

    const [experiences] = useState(
        [
            { 'name': '1-3' },
            { 'name': '3-5' },
            { 'name': '5+' }
        ]
    );

    const [jobtimings] = useState(
        [
            { 'name': 'Part Time' },
            { 'name': 'Full Time' }
        ]
    );

    const [consultingPrefs] = useState(
        [
            { 'name': '7th to 9th' },
            { 'name': '10th' },
            { 'name': '11th and 12th' },
            { 'name': '12th + Graduates' }
        ]
    );
    //-------------------------------
    return { occupations, studClasses, higherstudies, educations, genders, experiences, jobtimings, consultingPrefs };
}

export { ArrayData };