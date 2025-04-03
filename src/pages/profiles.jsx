import React, { useState, useEffect } from "react";
import ProfileCards from "../molecules/profile_cards";
import profilesData from "../statics/profile_data";

export default function Profiles() {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  useEffect(() => {
    setProfiles(profilesData);
  }, []);

  useEffect(() => {
    let filtered = profiles.filter(
      (profile) =>
        profile.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (locationFilter ? profile.location === locationFilter : true)
    );
    setFilteredProfiles(filtered);
  }, [searchTerm, locationFilter, profiles]);

  const locations = [...new Set(profiles.map((profile) => profile.location))];

  return (
    <div className="mx-auto sm:p-6 p-5 bg-blue-200">
      <h2 className="text-3xl font-bold text-blue-950 mb-6 text-center">
        Developer Profiles
      </h2>

     
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
      
        <input
          type="text"
          placeholder="Search by name..."
          className="p-2 border border-gray-300 rounded-md w-full sm:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

       
        <div className="relative w-full sm:w-1/3">
          <select
            className="p-2 border border-gray-300 rounded-md w-full appearance-none cursor-pointer"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            onFocus={() => setIsDropdownOpen(true)} 
            onBlur={() => setIsDropdownOpen(false)} 
          >
            <option value="">All Locations</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>

         
          <svg
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform duration-300 cursor-pointer ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="20"
            height="20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:mx-0 mx-6">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <ProfileCards key={profile.id} profile={profile} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">No profiles found.</p>
        )}
      </div>
    </div>
  );
}
