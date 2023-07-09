import React, { useState } from "react";
import gift from "./../assets/gift.svg";
const DonationRequestPage = () => {
  const [requestType, setRequestType] = useState("individual");

  const handleRequestTypeChange = (event) => {
    setRequestType(event.target.value);
  };

  const handleIndividualSubmit = (event) => {
    event.preventDefault();
    // Handle individual donation request submission logic
  };

  const handleOrganizationSubmit = (event) => {
    event.preventDefault();
    // Handle organization donation request submission logic
  };

  return (
    <div className="flex p-10">
     <div className="w-3/2">
        <img src={gift} alt="Gift" className="max-w-[90%] h-full" />
      </div>
      <div className="w-1/2 pl-4">

      <h2 className="text-3xl font-bold mb-6">Donation Request</h2>
      <div className="flex mb-6">
        <label className="block text-gray-700 text-sm font-bold mr-4">
          Request Type:
        </label>
        <div className="flex items-center">
          <input
            type="radio"
            id="individual"
            value="individual"
            checked={requestType === "individual"}
            onChange={handleRequestTypeChange}
          />
          <label htmlFor="individual" className="ml-2">
            Individual
          </label>
        </div>
        <div className="flex items-center ml-4">
          <input
            type="radio"
            id="organization"
            value="organization"
            checked={requestType === "organization"}
            onChange={handleRequestTypeChange}
          />
          <label htmlFor="organization" className="ml-2">
            Organization
          </label>
        </div>
      </div>
      {requestType === "individual" ? (
        <form onSubmit={handleIndividualSubmit}>
        {/* Individual donation request form */}
        <div className="flex gap-4 mb-6">
        <div className="w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your first name"
            // Add necessary onChange and value props to handle input
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your last name"
            // Add necessary onChange and value props to handle input
          />
        </div>
        </div>
      
        <div className="flex gap-3 mb-6">
            <div className="w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your email address"
            // Add necessary onChange and value props to handle input
          />
          </div>
           <div className="w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your phone number"
            // Add necessary onChange and value props to handle input
          />
        </div>
        </div>
      
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            className="w-full bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter the description of the donation request"
            // Add necessary onChange and value props to handle input
          ></textarea>
        </div>
      
        <div className="mb-6 flex gap-3 ">
            <div className="w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="targetAmount">
            Target Amount:
          </label>
          <input
            type="number"
            id="targetAmount"
            className="w-full bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter the target amount for the donation request"
            // Add necessary onChange and value props to handle input
          />
          </div>
            <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deadline">
            Deadline:
          </label>
          <input
            type="date"
            id="deadline"
            className="w-full bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            // Add necessary onChange and value props to handle input
          />
          </div>
        </div>
      
        <div className="mb-6 flex gap-4">
        <div className="w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deadline">
            Deadline:
          </label>
          <input
            type="date"
            id="deadline"
            className="w-full bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            // Add necessary onChange and value props to handle input
          />
          </div>
          <div className="w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
            Images:
          </label>
          <input
            type="file"
            id="images"
            className="w-full bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            // Add necessary onChange and value props to handle file input
          />
          <p className="text-gray-500 text-sm mt-2">
            Upload images to showcase your cause or yourself.
          </p>
          </div>

        </div>
      
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4"
        >
          Submit Individual Request
        </button>
      </form>
      
      ) : (
        <form onSubmit={handleOrganizationSubmit}>
        {/* Organization donation request form */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="w-full bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter the title of the donation request"
            // Add necessary onChange and value props to handle input
          />
        </div>
      
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            className="w-full bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter the description of the donation request"
            // Add necessary onChange and value props to handle input
          ></textarea>
        </div>
      
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="targetAmount">
            Target Amount:
          </label>
          <input
            type="number"
            id="targetAmount"
            className="w-full bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter the target amount for the donation request"
            // Add necessary onChange and value props to handle input
          />
        </div>
      
        <div className="mb-6 flex gap-4">
        <div className="w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deadline">
            Deadline:
          </label>
          <input
            type="date"
            id="deadline"
            className="w-full bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            // Add necessary onChange and value props to handle input
          />
          </div>
          <div className="w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
            Images:
          </label>
          <input
            type="file"
            id="images"
            className="w-full bg-gray-100 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            // Add necessary onChange and value props to handle file input
          />
          <p className="text-gray-500 text-sm mt-2">
            Upload images to showcase your cause or yourself.
          </p>
          </div>

        </div>
      
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4"
        >
          Submit Organization Request
        </button>
      </form>
      
      )}
    </div>
    </div>
  );
};

export default DonationRequestPage;
