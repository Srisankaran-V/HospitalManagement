// import React from 'react'

import { Link } from "react-router-dom"
import Card from "./Card"

const HomeCard = () => {
  return (
    <>
    
    {/* <!-- Developers and Employers --> */}
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card bg="bg-gray-100">
          
            <h2 className="text-2xl font-bold">For Doctors</h2>
            <p className="mt-2 mb-4">
              Know more about your details
            </p>
            <Link
              to="/doctor/appointment"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Appointment
            </Link>
          
          </Card>
          <Card bg="bg-indigo-100">
          
            <h2 className="text-2xl font-bold">For Patients</h2>
            <p className="mt-2 mb-4">
              Know more about your details
            </p>
            <Link
              to="/patient/add"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add Patients
            </Link>
          </Card>
        </div>
      </div>
    </section>

    </>
  )
}

export default HomeCard