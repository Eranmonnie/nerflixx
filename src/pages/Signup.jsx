import React from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {


  return (
    <>
    <div className="w-full h-screen">
      <img className="hidden sm:block absolute w-full h-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/9088b423-46dd-4b5d-90ab-d68523264d15/NG-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
      alt="////" />

    <div className="bg-black/70 fixed top-0 left-0 w-full h-screen"/>

      <div className="fixed w-full px-4 py-24 z-20">
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className="text-3xl font-nsans-bold">signup</h1>
            <form className="w-full flex flex-col py-4">

              <input className="p-3 my-2 bg-gray-700 rounded"
               type="email" name="email" id="email"
               placeholder="email" autoComplete="email" />

              <input className="p-3 my-2 bg-gray-700 rounded"
               type="password" name="password" id="password"
               placeholder="password" autoComplete="current-password"/>

              <button className="bg-red-600 py-3 my-6 rounded font-nsans-bold">SignUp</button>

              <div className="flex justify-between items-center text-gray-600 ">
                <p>
                  <input type="checkbox" className="mr-2"/> Remember Me
                </p>
                <p>Need help?</p>
              </div>
              <p className="my-4">
                <span className="text-gray-600 mr-2">Already subscribed to Netflix? </span><Link to="/login">Sign In </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Signup