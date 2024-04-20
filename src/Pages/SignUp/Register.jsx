import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Authcontext } from "../../Provider/Provider";


const Register = () => {
    const [tik, setTik] = useState(false);
    const { createUser } = useContext(Authcontext);
    const axiosPublic = useAxiosPublic();
    const navigate= useNavigate();
    const handleTik = () => {
        setTik(!tik);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const u_name = e.target.u_name.value;
        const email = e.target.email.value;
        const password=e.target.password.value;

        console.log(name, email, u_name,password);

        const userInfo = {
            name,
            u_name,
            email
        }

        createUser(email, password)
            .then(async(res) => {
                const result = await axiosPublic.post("/users", userInfo);
                console.log(res.user);

                if (result?.data?.insertedId) {
                    // alert("success");
                    navigate("/userProfile");
                }
            })
            .catch(err=>{
console.log(err);
            })


    }
    return (
        <div className="">
            <div className="flex lg:gap-60">
                <div className="bg-orange-300 px-9 py-4 h-screen">
                    <div className="">
                        <h2 className="text-orange-800 text-xl font-semibold">dribble</h2>
                        <p className="font-bold text-3xl mt-9 text-orange-800">Discover the world's top <br /> designers and creatives</p>
                        <div className="w-[350px] h-[350px] mt-12 mb-4">
                            <img className="h-full w-full" src="/signup.jpg" alt="" />
                        </div>
                        <p className="md:mt-28 text-orange-800">Art by Peter Terka</p>
                    </div>

                </div>
                <div className="lg:w-[700px]">
                    <div></div>
                    <div className="">
                        <div className="mt-3">
                            <h2 className="flex justify-end gap-1">Already a member? <Link className="text-blue-600">Sign In</Link></h2>
                        </div>
                        <br /><br />
                        <h2 className="text-3xl font-bold">Sign Up to dribble</h2>
                        <br /><br />

                        <form onSubmit={handleSubmit} className="space-y-7 lg:w-[375px]">
                            <div className="flex gap-3 w-full">
                                <div className="">
                                    <h2 className="font-bold">Name</h2>
                                    <input required type="text" className="bg-gray-200 py-[3px] rounded-md" name="name" />

                                </div>
                                <div>
                                    <h2 className="font-bold">UserName</h2>
                                    <input name="u_name" required type="text" className="bg-gray-200 py-[3px] rounded-md" />
                                </div>
                            </div>

                            <div className="">
                                <h2 className="font-bold">Email</h2>
                                <input name="email" required type="email" className="bg-gray-200 py-[3px] w-full rounded-md" />
                            </div>

                            <div>
                                <h2 className="font-bold">Password</h2>
                                <input name="password" required type="password" className="bg-gray-200 py-[3px] w-full rounded-md" />
                            </div>

                            <div className="flex space-x-2">
                                <input onClick={handleTik} type="checkbox" name="" id="" className="w-[25px] h-[25px]" />
                                <h2>Creating an account means you are okay with our <span className="text-blue-700">Terms of Services, Privacy Policy, </span> and our default <span className="text-blue-700">Notification Settings.</span></h2>
                            </div>

                            <div>
                                <button disabled={!tik}
                                    className={`bg-${tik && 'pink'}-500 px-[30px] py-[8px] rounded-md text-white ${!tik ? 'bg-gray-400' : ''}`}
                                >Create Account</button>
                            </div>

                            <h2>This site is protected by reCAPTCHA and the Google <span className="text-blue-700">Privacy Policy</span>  and <span className="text-blue-700">Terms of Service</span>  apply.</h2>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;