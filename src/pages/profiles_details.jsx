import React from "react";
import { useParams } from "react-router-dom";
import profilesData from "../statics/profile_data"; 

export default function ProfilesDetails() {
  const { id } = useParams(); 
  const profile = profilesData.find((p) => p.id === parseInt(id)); 


  if (!profile) {
    return <div className="text-center text-red-500 text-xl mt-6">Profile not found.</div>;
  }

  return (
    <div className="mx-auto p-6 flex flex-col items-center min-h-screen text-center bg-blue-200">

      <img
        src={profile.photo}
        alt={profile.name}
        className="w-32 h-32 sm:h-48 sm:w-48 rounded-full border-4 border-blue-500 object-fill"
      />
      
      <h2 className="text-3xl font-bold text-gray-800 mt-4">{profile.name}</h2>
      <p className="text-black text-lg">{profile.description}</p>
      <p className="text-black">{profile.location}</p>

      
      <div className="mt-4">
        <p className="text-black">{profile.email || "Email not provided"}</p>
        <p className="text-black">{profile.phone || "Phone not available"}</p>
      </div>

      
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Interests:</h3>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {profile.interests && profile.interests.length > 0 ? (
            profile.interests.map((interest, index) => (
              <span key={index} className="bg-blue-200 text-blue-800 border border-blue-500 hover:text-blue-950 hover:bg-white px-3 py-1 rounded-lg text-sm hover:scale-105 cursor-pointer">
                {interest}
              </span>
            ))
          ) : (
            <p className="text-gray-500">No interests listed</p>
          )}
        </div>
      </div>
    </div>
  );
}
