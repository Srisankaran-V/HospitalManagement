// import React from 'react'
// import {patients} from 'src/patients.json'
// import PatientCard from './PatientCard';
// import {patients} from '../patients.json'
import PatientCard from './PatientCard';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import Spinner from './Spinner';
// import axios from 'axios';
import axiosInstance from '../utils/axiosInstance';
// import axiosInstance from '../utils/axiosInstance';



const PatientListings = ({isActive = false}) => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true); 
 
  

  useEffect(() =>{
    const fetchJobs = async () =>{
      try{
        const response = await axiosInstance.get('/api/v1/patient/all');
        const data = response.data;
        console.log('fetched patient data :',data);
        setPatients(data);
      
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

  const displayPatients = isActive? patients.slice(0,3):patients;

  return (
    <>
    {/* <!-- Browse Jobs --> */}
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isActive? 'Recent Patient':'Browse Patients'}
        </h2>
        
          {loading?   ( <Spinner loading={loading}/>) : (<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {displayPatients.map((patient) => (
            
            <PatientCard key={patient.id} patient={patient}/>
            

          ))}
          </div>)
          }
          
        
        
    
          
      </div>
    </section>

    </>
  )
}
PatientListings.propTypes = {
  isActive: PropTypes.bool,
};

export default PatientListings;