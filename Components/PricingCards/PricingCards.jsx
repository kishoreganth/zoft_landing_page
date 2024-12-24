import React, { useState } from "react";

const PricingCards = () => {
  const [active, setActive] = useState(false);
  const plans = [
    {
      name: "Free",
      price: "₹0 ($0)",
      duration: "Forever",
      features: [
        "Access to fast models",
        "20 message credits/month",
        "1 chatbot",
        "400,000 characters/chatbot",
        "1 team member",
        "Limit to 10 links to train on",
        "Embed on unlimited websites",
        "Capture leads",
        "View chat history",
        "Chatbots get deleted after 14 days of inactivity on the free plan.",
      ],
      buttonLabel: "Get started",
    },
    {
      name: "Hobby",
      price: "₹1617 ($19)",
      duration: "Per Month",
      features: [
        "Everything in Free, plus...",
        "Access to advanced models",
        "2,000 message credits/month",
        "2 chatbots",
        "1 AI Action/chatbot",
        "11,000,000 characters/chatbot",
        "Unlimited links to train on",
        "API access",
        "Integrations",
        "Basic Analytics",
      ],
      buttonLabel: "Subscribe",
    },
    {
      name: "Standard",
      price: "₹8428 ($99)",
      duration: "Per Month",
      features: [
        "Everything in Hobby, plus...",
        "10,000 message credits/month",
        "5 chatbots",
        "2 AI Actions/chatbot",
        "3 team members",
      ],
      buttonLabel: "Subscribe",
    },
    {
      name: "Unlimited",
      price: "₹33967 ($399)",
      duration: "Per Month",
      features: [
        "Everything in Standard, plus...",
        "40,000 message credits/month included (Messages over the limit will use your OpenAI API Key)",
        "10 chatbots",
        "3 AI Actions/chatbot",
        "5 team members",
        "Remove 'Powered by Chatbase'",
        "Use your own custom domains",
        "Advanced Analytics",
      ],
      buttonLabel: "Subscribe",
    },
  ];

  return (
    <div className="relative">
      <div className="bg-gray-50 py-10 px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Predictable Pricing
          </h1>
          <h2 className="text-2xl text-pink-500 mt-2">Scalable Plans</h2>
          <p className="text-gray-600 mt-2">
            Get 2 months for free by subscribing yearly.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {plan.name}
              </h3>
              <p className="text-3xl font-bold text-gray-800 mt-4">
                {plan.price}
              </p>
              <p className="text-gray-600 mt-1">{plan.duration}</p>
              <ul className="mt-6 space-y-2 text-gray-600 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setActive(true)}
                className={`mt-auto py-2 px-4 rounded text-white ${
                  plan.name === "Free"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-pink-500 hover:bg-pink-400"
                }`}
              >
                {plan.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-10 px-6 absolute top-5 right-[30%] ${
          active ? "" : "hidden"
        }`}
      >
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-8 border border-gray-200">
          <div className="flex justify-between">
            <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
              Checkout
            </h1>
            <button className="" onClick={() => setActive(false)}>
              Close
            </button>
          </div>
          <form className="space-y-8">
            {/* Customer Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-700">
                Customer Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="customer-name"
                    className="block text-gray-600 font-medium mb-2"
                  >
                    Customer Name:
                  </label>
                  <input
                    type="text"
                    id="customer-name"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="customer-email"
                    className="block text-gray-600 font-medium mb-2"
                  >
                    Customer Email:
                  </label>
                  <input
                    type="email"
                    id="customer-email"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
            </div>

            {/* Address Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-700">Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-gray-600 font-medium mb-2"
                  >
                    Country:
                  </label>
                  <select
                    id="country"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                  >
                    <option>Select your country</option>
                    <option>United States</option>
                    <option>India</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="zip"
                    className="block text-gray-600 font-medium mb-2"
                  >
                    ZIP/Postcode:
                  </label>
                  <input
                    type="text"
                    id="zip"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Enter ZIP/Postcode"
                  />
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-700">
                Payment Information
              </h2>
              <div>
                <label
                  htmlFor="card-number"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Card Number:
                </label>
                <input
                  type="text"
                  id="card-number"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                  placeholder="xxxx xxxx xxxx xxxx"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Supported Cards:{" "}
                  <span className="text-gray-800 font-medium">
                    Visa, MasterCard, Amex, JCB, Discover, Diners Club, UnionPay
                  </span>
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="cardholder-name"
                    className="block text-gray-600 font-medium mb-2"
                  >
                    Name on Card:
                  </label>
                  <input
                    type="text"
                    id="cardholder-name"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Cardholder name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="expiration-date"
                    className="block text-gray-600 font-medium mb-2"
                  >
                    Expiration Date:
                  </label>
                  <input
                    type="text"
                    id="expiration-date"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                    placeholder="MM / YY"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block text-gray-600 font-medium mb-2"
                >
                  Security Code (CVV):
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
                  placeholder="CVV"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-pink-500 text-white text-lg font-medium py-3 px-8 rounded-lg shadow-md hover:bg-pink-400 focus:ring-4 focus:ring-pink-300"
              >
                Complete Purchase
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
