// import React from 'react'
import PropTypes from 'prop-types';
// import { useState } from 'react';
import {FaMapMarker} from 'react-icons/fa'
import { Link } from 'react-router-dom';
// import PatientPage from '../pages/PatientPage';


const DoctorCard = ({doctor}) => {
    // const [fullDescription, setFullDescription] = useState(false);
    let description = doctor.description;
    // if (!fullDescription) {
    //     description = description.substring(0, 100)+'...';
    // }


    return (
        <>
        <div className="bg-white rounded-xl shadow">
                <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{doctor.type}</div>
                    <h3 className="text-xl font-bold">{doctor.name}</h3>
                </div>

                <div className="mb-5">
                {description}
                </div>
                {/* <button onClick={()=>setFullDescription((prevState)=>
                !prevState)} className='text-indigo-500 mb-2'>{fullDescription? 'less':'more'}</button> */}

                <h3 className="text-indigo-500 mb-2">{doctor.gender}</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                    <FaMapMarker className="inline text-lg mb-1 mr-1" />
                    {doctor.address}
                    </div>
                    <Link
                    to={`/doctor/${doctor.id}`}
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                    Read more
                    </Link>
                </div>
                </div>
            </div>

        </>
    )
}
DoctorCard.propTypes = {
  doctor: PropTypes.object,
};


export default DoctorCard