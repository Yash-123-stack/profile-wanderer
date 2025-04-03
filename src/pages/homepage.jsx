import React from 'react'
import {Link} from "react-router-dom";
import finding from "../assets/wanderer-updated.jpg";
export default function Homepage() {
  return (
   <>
   <div className="flex flex-col items-center justify-center sm:h-screen text-center p-6 bg-blue-200">
    <img src={finding} alt="" className = "bg-transparent sm:h-60 sm:w-60 h-64 w-64 rounded" />
      <h1 className="sm:text-4xl text-2xl font-bold text-blue-950 mb-4 mt-6">Welcome to Wanderer</h1>
      <p className="text-lg text-black mb-6">
      A one-stop solution to explore developers with real-time map visualization.
      </p>
      <Link to="/profiles" className="bg-blue-500 hover:bg-transparent hover:text-blue-950 border border-blue-950 text-bold text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-500">
        Explore
      </Link>
    </div>
   </>
  )
}
