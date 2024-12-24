import React from 'react';

const Form = () => {
  return (
    <div className="w-full bg-gray-50 flex">
      {/* Left Side */}
      <div className="w-1/3 h-full bg-red-100 tablet:flex web:flex justify-center items-center fixed hidden">
        <h1 className="text-5xl font-bold capitalize text-gray-800">Zoft</h1>
      </div>

      {/* Right Side (Scrollable Form Container) */}
      <div className="w-2/3  flex justify-center bg-white overflow-y-auto ml-[33%]">
        {/* Scrollable Content */}
        <div className="w-full max-w-[600px] bg-white rounded-lg p-6 my-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Get Started</h1>
            <h6 className="text-gray-600">The future of AI calling is here.</h6>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* First Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">What&apos;s your first name?</label>
              <input
                type="text"
                placeholder="Steve"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">What&apos;s your last name?</label>
              <input
                type="text"
                placeholder="Jobs"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">What&apos;s your email?</label>
              <input
                type="email"
                placeholder="Steve@apple.com"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Website */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">What&apos;s your website?</label>
              <input
                type="text"
                placeholder="apple.com"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">What&apos;s your phone number?</label>
              <div className="flex items-center space-x-2">
                <select className="px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>+1</option>
                  <option>+91</option>
                  <option>+44</option>
                </select>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">How did you hear about us?</label>
              <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select option</option>
                <option>Google</option>
                <option>Friend</option>
                <option>Advertisement</option>
              </select>
            </div>

            {/* Checkboxes */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                What software do you want to integrate Thoughtly with?
              </label>
              <div className="space-y-2">
                {["Salesforce", "Hubspot", "GoHighLevel", "Calendly", "AirTable"].map((item) => (
                  <label key={item} className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* People Handling Calls */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">How many people are currently handling calls?</label>
              <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select option</option>
                <option>1-10</option>
                <option>11-20</option>
                <option>21-50</option>
                <option>50+</option>
              </select>
            </div>
          </form>

          {/* Submit Button */}
          <button className="capitalize px-[1vw] py-[.3vw] rounded-lg text-lg font-medium bg-[#393E46] text-white hover:bg-black transition-all duration-300 ease-in-out mt-6">
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
