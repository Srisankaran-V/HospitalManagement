// import React from 'react'
// import {doctorss} from 'src/doctorss.json'
// import DoctorCard from './DoctorCard';
// import {doctorss} from '../doctorss.json'
import DoctorCard from './DoctorCard';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import Spinner from './Spinner';
// import axios from 'axios';
import axiosInstance from '../utils/axiosInstance';
// import axiosInstance from '../utils/axiosInstance';



const DoctorsListing = ({isActive = false}) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true); 
 
  

  useEffect(() =>{
    const fetchJobs = async () =>{
      try{
        const response = await axiosInstance.get('/api/v1/doctor');
        const data = response.data;
        console.log('fetched doctor data :',data);
        setDoctors(data);
      
      }
      catch(err){
        console.error( `Fetch Error ${err}`);
      }
      finally{
        setLoading(false);
      }
    }
    fetchJobs();
  },[])

  const displayDoctors = isActive? doctors.slice(0,3):doctors;

  return (
    <>
    {/* <!-- Browse Jobs --> */}
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isActive? 'Recent doctors':'Browse doctors'}
        </h2>
        
          {loading?   ( <Spinner loading={loading}/>) : (<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {displayDoctors.map((doctor) => (
            
            <DoctorCard key={doctor.id} doctor={doctor}/>
            

          ))}
          </div>)
          }
          
        
        
    
          
      </div>
    </section>

    </>
  )
}
DoctorsListing.propTypes = {
  isActive: PropTypes.bool,
};

export default DoctorsListing;