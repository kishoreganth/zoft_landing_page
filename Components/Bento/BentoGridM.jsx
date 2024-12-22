import React from 'react';
import { BiSupport } from "react-icons/bi";
import { FaRegCalendarCheck, FaPhoneAlt, FaBookOpen } from "react-icons/fa";
import { CiRoute } from "react-icons/ci";
import { IoChatbubbles } from "react-icons/io5";
import { Beam } from '../featured/Beam';

const BentoGridM = () => {
    return (
        <div className="grid grid-cols-1 grid-rows-auto gap-4 px-[2vw] py-[2vw] w-[95%] h-auto bg-[#F6F6F4] mx-3">
            {/* Box 1 */}
            <div className="bg-white h-[50vh] rounded-3xl p-6 shadow-lg flex flex-col justify-between">
                <div className="w-full h-1/2">
                    <Beam />
                </div>
                <div className="w-full h-1/2 flex flex-col justify-end items-start">
                    <IoChatbubbles className="text-4xl mb-4" />
                    <h2 className="text-2xl font-bold mb-2 text-start capitalize">
                        Engineered for seamless integration
                    </h2>
                    <p className="text-lg font-medium text-left">
                        Equip your agents with advanced automation to authenticate callers
                        and resolve issues seamlessly.
                    </p>
                </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white h-[50vh] rounded-3xl p-6 shadow-lg flex flex-col justify-between">
                <img
                    className="w-full h-[50%] object-contain object-center"
                    src="../../images/5.png"
                    alt=""
                />
                <div className="w-full flex flex-col justify-end items-start">
                    <FaRegCalendarCheck className="text-4xl mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Appointment Scheduling</h2>
                    <p className="text-lg font-medium">
                        Sync with your calendar to schedule appointments seamlessly.
                    </p>
                </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white h-[50vh] rounded-3xl p-6 shadow-lg flex flex-col justify-between">
                <div className="w-full flex flex-col justify-end items-start">
                    <FaPhoneAlt className="text-4xl mb-4" />
                    <h2 className="text-2xl font-bold mb-2 text-center">Call Routing</h2>
                    <p className="text-lg font-medium text-start">
                        Route calls based on natural requests without hold times.
                    </p>
                    <button className="px-[2vw] py-[1vh] rounded-xl border-black border-[1px] capitalize font-semibold text-md mt-[1vw]">
                        See it in action
                    </button>
                </div>
            </div>

            {/* Box 4 */}
            <div className="bg-white h-[50vh] rounded-3xl p-6 shadow-lg flex flex-col justify-between">
                <img
                    className="w-full h-[60%] object-contain"
                    src="../../images/6.png"
                    alt=""
                />
                <div className="w-full flex flex-col items-end">
                    <CiRoute className="text-4xl mb-4" />
                    <h2 className="text-2xl font-bold mb-2 text-right">
                        Analytics & Reporting
                    </h2>
                    <p className="text-lg font-medium text-right">
                        Leverage analytics to optimize communication strategies.
                    </p>
                </div>
            </div>

            {/* Box 5 */}
            <div className="bg-white h-[50vh] rounded-3xl p-6 shadow-lg flex flex-col justify-between">
                <img
                    className="w-full h-1/2 object-cover object-left"
                    src="../../images/4.png"
                    alt=""
                />
                <div className="w-full flex flex-col items-center">
                    <FaBookOpen className="text-4xl mb-4" />
                    <h2 className="text-2xl font-bold mb-2 text-center">
                        Custom Knowledge Base
                    </h2>
                    <p className="text-lg font-medium text-center">
                        Train your agent with custom data to improve over time.
                    </p>
                </div>
            </div>

            {/* Box 6 */}
            <div className="bg-white h-[50vh] rounded-3xl p-6 shadow-lg flex flex-col justify-between">
                <div className="w-full flex flex-col items-start">
                    <BiSupport className="text-4xl mb-4" />
                    <h2 className="text-2xl font-bold mb-2 text-start">24/7 Availability</h2>
                    <p className="text-lg font-medium text-start">
                        Instant responses with trustworthy and accurate answers.
                    </p>
                    <button className="px-[2vw] py-[1vh] rounded-xl border-black border-[1px] capitalize font-semibold text-md mt-[1vw]">
                        Learn more
                    </button>
                </div>
                <img
                    className="w-1/2 h-[50%] bg-cover"
                    src="../../images/Service 24_7-bro.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default BentoGridM;
