import React from 'react';
import {Link} from "react-router-dom";

export default function ProfileCards({ profile }) {
  return (
   <>
   <div className="bg-white border border-black  rounded-lg overflow-hidden p-4 text-center">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-24 h-24 mx-auto object-cover rounded-full border-2 border-blue-500"
      />
      <h3 className="text-xl font-bold text-gray-800 mt-4">{profile.name}</h3>
      <p className="text-gray-600">{profile.description}</p>
      <p className="text-sm text-gray-500"> {profile.location}</p>
      <Link
        to={`/profiles/${profile.id}`}
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-500 hover:bg-transparent hover:text-blue-600 border border-blue-600"
      >
        View Profile
      </Link>
    </div>
   </>
  )
}
