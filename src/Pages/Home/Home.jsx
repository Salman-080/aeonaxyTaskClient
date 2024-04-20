import { Link, NavLink } from "react-router-dom";

const Home = () => {

    const navlinks = <>

        <li><NavLink >Inspiration</NavLink></li>
        <li><NavLink >Find Work</NavLink></li>
        <li><NavLink >Learn Design</NavLink></li>
        <li><NavLink >Go Pro</NavLink></li>
        <li><NavLink >Hire Designers</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1 list-none space-x-9">
                    <a className="btn btn-ghost text-xl">dribbble</a>
                    {navlinks}
                </div>

                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <Link>
                        <img src="/store.PNG" alt="" />
                    </Link>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>


                    </div>
                    <div>
                        <button className="bg-pink-600 px-4 py-2 text-white rounded-md">Upload</button>
                    </div>
                </div>
            </div>


            <div className=" max-w-screen-xl mx-auto md:w-[1000px] mt-20">

                <div className="text-center ">
                    <h2 className="text-3xl font-bold">Please verify your email...</h2>
                    <div className="w-[80px] h-[65px] mx-auto mt-3">
                        <img className="w-full h-full" src="/msgbox.PNG" alt="" />
                    </div>
                    <div className="space-y-3 mt-3">
                        <p>Please verify your email address. We have sent a confirmation email to:</p>
                        <h2 className="font-bold">account@refero.design</h2>
                        <p>Click the confirmation link in that email to begin using Dribbble.</p>

                        <div>
                            <h2>Didn't receive the email?Check your Spam folder, It may have been caught by a filter. If <br /> you still don;t see it, you can <span className="text-pink-600">resend the confirmation email.</span> </h2>
                        </div>

                        <h2>Wrong email address? <span className="text-pink-500">Change it.</span> </h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;