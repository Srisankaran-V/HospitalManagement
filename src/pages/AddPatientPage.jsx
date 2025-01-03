// import React from 'react' 
import { useState } from "react" ;
import axios from 'axios';  
// import {axiosInstance} from "../utils/axiosInstance";

const AddPatientPage = () => {
    const [type, setType] = useState('O +ve');
    const [name, setName] = useState('');
    const [initialAssessment, setInitialAssessment] = useState('');
    // const [salary, setSalary] = useState('Under $50K');
    const [age, setAge] = useState("");
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('Male');
    // const [companyDescription, setCompanyDescription] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPatient = {
            type,
            name,
            age:parseInt(age,10),
            initialAssessment,
            address,
            gender,
            email,
            phone
        }
        console.log('before try ',JSON.stringify(newPatient))

        try{
          // const res = await fetch( `http://localhost:8080/api/v1/patient/add`, {
          //   method : "POST",
          //   headers:{ "Content-Type" : "application/json"},
          //   body:JSON.stringify(newPatient)
          // });
          
          console.log('entered try :',newPatient);
          console.log('token :',localStorage.getItem('token'));
          const res = await axios({
            method: 'post',
            baseURL: 'http://localhost:8080',
            url: '/api/v1/patient/add',
            timeout: 1000,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },            
            data: JSON.stringify(newPatient),
          })

          // const res = await axiosInstance.post("/api/v1/patient/all",JSON.stringify(newPatient));
          // const res = await axios.post('/api/v1/patient/add', {
          //   "type":type,
          //   "name":name,
          //   "age":parseInt(age,10),
          //   "initialAssessment":initialAssessment,
          //   "address":address,
          //   "email":email,
          //   "phone":phone,
          //   "gender":gender
          // },{
          //   headers:{
          //     'Content-Type':'application/x-www-form-urlencoded',
          //     'Authorization':`Bearer ${localStorage.getItem('token')}`
          //   }
          // });
          console.log('response status :',res.status);
          if(res.status === 201 || res.status === 200){
            alert("Patient added successfully");
            setType("O +ve");
            setName("");
            setInitialAssessment("");
            setAddress("");
            setGender("Male");
            setEmail("");
            setPhone("");

          }
          
          else{
            console.error("failed to save the patient ", res.status);
            alert("failed to save the patient try again");
          }
        }
        catch(error){
          console.log("Error ", error);
          alert("An error occured, please try again");
        }
    }

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Patient</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Blood Type
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                onChange = {(e) => setType(e.target.value)}
                value={type}
              >
                <option value="A +ve">A +ve</option>
                <option value="A -ve">A -ve</option>
                <option value="B +ve">B +ve</option>
                <option value="B -ve">B -ve</option>
                
                <option value="O +ve">O +ve</option>
                <option value="O -ve">O -ve</option>
                <option value="AB +ve">AB +ve</option>
                <option value="AB -ve">AB -ve</option>


              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
                >Patient Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Srisankaran V"
                value = {name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2"
                htmlFor="age">Patient Age
              </label>
              <input 
                type="number"
                id="age"
                name="age"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. 23"
                
                onChange={(e)=> setAge(e.target.value)}
                value={age}
                required/>
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-gray-700 font-bold mb-2"
                >Patient Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="border rounded w-full py-2 px-3"
                onChange = {(e) => setGender(e.target.value)}
                value={gender}
                required
                
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="LGBTQ+">LGBTQ+</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="initialAssessment"
                className="block text-gray-700 font-bold mb-2"
                >Initial Assessment
              </label>
              <textarea
                id="initialAssessment"
                name="initialAssessment"
                className="border rounded w-full py-2 px-3"
                rows="4"
                value = {initialAssessment}
                onChange={(e) => setInitialAssessment(e.target.value)}
                placeholder="Add patient's reason to visit"
              ></textarea>
            </div>


            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Address
              </label>
              <input
                type='text'
                id='address'
                name='address'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Patient address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required           
              />
            </div>

           

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
                >Contact Email
                </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
                >Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit" onClick={handleSubmit}
              >
                Add Patient
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

  )
}

export default AddPatientPage