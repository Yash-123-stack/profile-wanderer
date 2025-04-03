import React, { useState } from "react";

export default function AdminData() {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Yash Kulshrestha", email: "yash@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Vinay Kumar", email: "vinay@example.com" },
    { id: 4, name: "Ashwini Kumara", email: "ashwini@example.com" },
    { id: 5, name: "Vikas Chauhan", email: "vikas@example.com" },
    { id: 6, name: "Vinayak Patidar", email: "vinayak@example.com" },
  ]);

  const [newProfile, setNewProfile] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/; 
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(email);
  };

  const handleAddProfile = () => {
    let isValid = true;
    let newErrors = { name: "", email: "" };

    if (!validateName(newProfile.name)) {
      newErrors.name = "You cannot enter any numeric digit here";
      isValid = false;
    }

    if (!validateEmail(newProfile.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setProfiles([...profiles, { id: profiles.length + 1, ...newProfile }]);
      setNewProfile({ name: "", email: "" });
    }
  };

  const handleDeleteProfile = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <>
      <div className="container mx-auto p-6">
        <h2 className="sm:text-3xl text-2xl font-bold text-gray-800 mb-6 text-center">
          Admin Panel
        </h2>

        <div className="mb-6 flex flex-col md:flex-row gap-4 mt-3">
          <div className="sm:w-[40%]">
            <input
              type="text"
              placeholder="Name"
              className="p-2 border rounded w-full"
              value={newProfile.name}
              onChange={(e) => {
                if (validateName(e.target.value) || e.target.value === "") {
                  setNewProfile({ ...newProfile, name: e.target.value });
                }
              }}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="sm:w-[40%]">
            <input
              type="text"
              placeholder="Email"
              className="p-2 border rounded w-full"
              value={newProfile.email}
              onChange={(e) =>
                setNewProfile({ ...newProfile, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <button
            onClick={handleAddProfile}
            className="bg-blue-500 text-white px-4 py-2 rounded sm:w-[20%] sm:mx-0 mx-16 border border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-500"
          >
            Add Profile
          </button>
        </div>

        <ul className="space-y-4">
          {profiles.map((profile) => (
            <li
              key={profile.id}
              className="bg-white p-4 rounded shadow flex justify-between"
            >
              <span>
                {profile.name} - {profile.email}
              </span>
              <button
                onClick={() => handleDeleteProfile(profile.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-transparent hover:text-red-600 transition-all duration-500 border border-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
