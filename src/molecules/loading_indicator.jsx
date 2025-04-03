import React from 'react'
import { useLoading } from "../context/loadingContext";

export default function Loading() {
    const { loading } = useLoading();

  if (!loading) return null; 
  return (
    <>
    <div className = "flex ">
     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      <p className=" text-white text-lg font-semibold ml-4">Loading, please wait...</p>
    </div>
    </div>
    </>
  )
}
