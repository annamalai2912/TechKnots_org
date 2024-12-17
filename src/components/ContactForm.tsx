import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePic(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const newProfile = {
      name: form.name.value,
      email: form.email.value,
      college: form.college.value,
      year: form.year.value,
      department: form.department.value,
      district: form.district.value,
      interest: form.interest.value,
      contact: form.contact.value,
      gender: form.gender.value,
    };

    setProfileData(newProfile);
    setIsOpen(false);
  };

  const downloadPDF = () => {
    const input = document.getElementById("profile-card");

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save("techknots_profile.pdf");
    });
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition"
      >
        Join Student Club
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-green-700">
              Join Our Student Club
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input placeholder="Name" name="name" required className="input" />
              <input placeholder="Email" name="email" required className="input" />
              <input placeholder="College" name="college" required className="input" />
              <select name="year" required className="input">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
              <input placeholder="Department" name="department" required className="input" />
              <select name="district" required className="input">
                {districts.map((district) => (
                  <option key={district}>{district}</option>
                ))}
              </select>
              <select name="interest" required className="input">
                <option>AI</option>
                <option>IoT</option>
                <option>Robotics</option>
                <option>Others</option>
              </select>
              <input placeholder="Contact" name="contact" required className="input" />
              <select name="gender" required className="input">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="block w-full text-gray-700 border border-gray-300 rounded-lg p-2"
              />
              <div className="flex justify-end gap-3">
                <button type="button" onClick={() => setIsOpen(false)} className="button">
                  Cancel
                </button>
                <button type="submit" className="button-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {profileData && (
        <div
          id="profile-card"
          className="max-w-sm mx-auto mt-8 p-6 bg-white shadow-xl rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
        >
          <div className="relative">
            <img
              src={profilePic || "https://via.placeholder.com/150"}
              alt="profile-pic"
              className="w-32 h-32 mx-auto rounded-full border-4 border-green-500 shadow-lg"
            />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold text-green-700">{profileData.name}</h2>
            <p className="text-gray-500">{profileData.college}, Year {profileData.year}</p>
            <p className="text-gray-500">Department: {profileData.department}</p>
            <p className="text-gray-500">District: {profileData.district}</p>
            <p className="text-green-600 font-medium">Interest: {profileData.interest}</p>
            <p className="text-gray-500">Contact: {profileData.contact}</p>
            <p className="text-gray-500">Email: {profileData.email}</p>
            <p className="text-gray-500">Gender: {profileData.gender}</p>
            <p className="mt-3 font-bold text-green-700">
              TechKnots ID: {Math.floor(1000000 + Math.random() * 9000000)}
            </p>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={downloadPDF}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Download Profile Card
            </button>
          </div>
        </div>
      )}

      <style>{inputStyle}</style>
    </div>
  );
};

export default ContactForm;

const districts = [
  "Ariyalur",
  "Chengalpattu",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kallakurichi",
  "Kanchipuram",
  "Kanyakumari",
  "Karur",
  "Krishnagiri",
  "Madurai",
  "Nagapattinam",
  "Namakkal",
  "Nilgiris",
  "Perambalur",
  "Pudukottai",
  "Ramanathapuram",
  "Ranipet",
  "Salem",
  "Sivaganga",
  "Tenkasi",
  "Thanjavur",
  "Theni",
  "Thoothukudi",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tiruvallur",
  "Tiruvannamalai",
  "Tiruvarur",
  "Vellore",
  "Viluppuram",
  "Virudhunagar",
];

const inputStyle = `
  .input {
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.375rem;
    margin-bottom: 1rem;
    transition: border-color 0.3s ease-in-out;
  }
  .input:focus {
    outline: none;
    border-color: #10b981;
    box-shadow: 0 0 5px rgba(16, 185, 129, 0.5);
  }
  .button {
    padding: 0.5rem 1rem;
    background-color: #e2e8f0;
    border-radius: 0.375rem;
    transition: background 0.3s;
  }
  .button:hover {
    background-color: #cbd5e1;
  }
  .button-primary {
    background-color: #10b981;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    transition: background 0.3s;
  }
  .button-primary:hover {
    background-color: #059669;
  }
`;
