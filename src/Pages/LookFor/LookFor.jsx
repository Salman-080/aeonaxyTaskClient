import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import "./lookfor.css";
import { Link } from "react-router-dom";

const LookFor = () => {
    const [selectBox, setSelectBox] = useState("");
    const handleFBox = () => {
        setSelectBox("FirstBox");
    }

    const handleSBox = () => {
        setSelectBox("SecondBox");
    }
    const handleTBox = () => {
        setSelectBox("ThirdBox");
    }
    return (

        <div>
            <div className="text-pink-500 ml-9 text-2xl mt-4">dribble</div>
            <div className=" max-w-screen-xl mx-auto mt-12">

                <div className="text-center space-y-3">
                    <h2 className="text-4xl font-bold">What brings you to Dribbble?</h2>
                    <p className="text-gray-500 font-normal">Select the options that best describe you. Don't worry, you can explore other options later.</p>
                </div>
                <br /><br /><br /><br /><br />

                <div className="ml-16 md:ml-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

                        <div onClick={handleFBox} className={`${selectBox === "FirstBox" ? "border-[3px] rounded-xl border-red-500 w-[300px] px-6 py-6 h-[300px]" : "border border-black w-[300px] px-6 py-6"}`}>
                            <div className={`${selectBox === "FirstBox" ? "selected" : ""}`}>
                                <img className="w-full h-full" src="/image1.PNG" alt="" />
                                <h2 className="text-lg font-semibold text-center">I'm a designer lokking to share my work.</h2>

                                {
                                    selectBox == "FirstBox" && <p className="mt-2 text-sm text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos saepe obcaecati, laborum quaerat porro omnis rerum quo neque velit, labore ullam, totam iste rem? Tenetur.</p>

                                }

                                {
                                    selectBox == "FirstBox" ? (
                                        <div className="bg-red-500 w-[25px] h-[25px] rounded-full mx-auto mt-4 px-1 py-1">
                                            <IoMdCheckmark className="text-white w-full h-full" />

                                        </div>
                                    ) :
                                        <div className="border border-gray-400 w-[25px] h-[25px] rounded-full mx-auto mt-4">

                                        </div>

                                }
                            </div>



                        </div>
                        <div onClick={handleSBox} className={`${selectBox === "SecondBox" ? "border-[3px] rounded-xl border-red-500 w-[300px] px-6 py-6 h-[300px]" : "border border-black w-[300px] px-6 py-6"}`}>
                            <div className={`${selectBox === "SecondBox" ? "selected" : ""}`}>
                                <img className="w-full h-full" src="/image1.PNG" alt="" />
                                <h2 className="text-lg font-semibold text-center">I'm a designer lokking to share my work.</h2>

                                {
                                    selectBox == "SecondBox" && <p className="mt-2 text-sm text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos saepe obcaecati, laborum quaerat porro omnis rerum quo neque velit, labore ullam, totam iste rem? Tenetur.</p>

                                }

                                {
                                    selectBox == "SecondBox" ? (
                                        <div className="bg-red-500 w-[25px] h-[25px] rounded-full mx-auto mt-4 px-1 py-1">
                                            <IoMdCheckmark className="text-white w-full h-full" />

                                        </div>
                                    ) :
                                        <div className="border border-gray-400 w-[25px] h-[25px] rounded-full mx-auto mt-4">

                                        </div>

                                }
                            </div>



                        </div>
                        <div onClick={handleTBox} className={`${selectBox === "ThirdBox" ? "border-[3px] rounded-xl border-red-500 w-[300px] px-6 py-6 h-[300px]" : "border border-black w-[300px] px-6 py-6"}`}>
                            <div className={`${selectBox === "ThirdBox" ? "selected" : ""}`}>
                                <img className="w-full h-full" src="/image1.PNG" alt="" />
                                <h2 className="text-lg font-semibold text-center">I'm a designer lokking to share my work.</h2>

                                {
                                    selectBox == "ThirdBox" && <p className="mt-2 text-sm text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos saepe obcaecati, laborum quaerat porro omnis rerum quo neque velit, labore ullam, totam iste rem? Tenetur.</p>

                                }

                                {
                                    selectBox == "ThirdBox" ? (
                                        <div className="bg-red-500 w-[25px] h-[25px] rounded-full mx-auto mt-4 px-1 py-1">
                                            <IoMdCheckmark className="text-white w-full h-full" />

                                        </div>
                                    ) :
                                        <div className="border border-gray-400 w-[25px] h-[25px] rounded-full mx-auto mt-4">

                                        </div>

                                }
                            </div>



                        </div>
                    </div>
                </div>



                <div className="text-center mb-4">
                    <h2 className="font-semibold text-center mt-8">Anything else? You can select multiple</h2>
                   <Link to="/homepage"><button className="px-20 py-2 bg-pink-500 text-white mt-4 rounded-md font-semibold">Finish</button></Link> 
                    <p className="text-gray-500 mt-1">or Press RETURN</p>
                </div>

            </div>
        </div>
    );
};

export default LookFor;