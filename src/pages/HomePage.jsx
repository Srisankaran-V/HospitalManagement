// import React from 'react'

import Hero from "../component/Hero"
import HomeCard from "../component/HomeCard"
import PatientListings from "../component/PatientListings"
import ViewAll from "../component/ViewAll"

const HomePage = () => {
  return (
    <>
    <Hero/>
    <HomeCard/>
    <PatientListings isActive = {true}/>
    <ViewAll/>
    </>
  )
}

export default HomePage