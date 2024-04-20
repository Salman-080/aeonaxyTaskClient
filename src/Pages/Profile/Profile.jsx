import { CiCamera } from "react-icons/ci";
import {  useNavigate } from "react-router-dom";
import "./profile.css";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { Authcontext } from "../../Provider/Provider";
const image_hosting_key = import.meta.env.VITE_IMAGE_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const Profile = () => {
    const navigate=useNavigate()
    const axiosPublic=useAxiosPublic();
    const {user}=useContext(Authcontext);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const imageFile = {
            image: e.target.image.files[0],
            
        }

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        });

        if(res.data.success){
            const location = form.get('location');
            const image= res.data.data.display_url;

            const profileUpdate={
                location,
                image
            }
            

            // console.log(location,image);

            const result= await axiosPublic.patch(`/profileUpdate/${user?.email}`,profileUpdate);

            if(result?.data?.modifiedCount>0){
                navigate("/lookFor");
            }
        }

       
    }
    return (
        <div>
            <div className="text-pink-500 ml-9 text-2xl mt-4">dribble</div>
            <div className=" max-w-screen-xl mx-auto md:w-[1000px] mt-12">
                <div className="space-y-4">
                    <h2 className="text-4xl font-extrabold">Welcome! Let's Create your profile</h2>
                    <p className="text-gray-700">Let others get to know you better! You can do these later</p>
                </div>
                <form onSubmit={handleSubmit}>

                    <div className="mt-12">
                        <h2 className="font-bold text-lg">Add an avatar</h2>

                        <div className="flex items-center gap-9 mt-5">
                            <div className="border border-gray-500 border-dashed h-[110px] w-[110px] rounded-full px-8 py-8">
                                {/* <img className="h-full w-full" src="" alt="" /> */}
                                <CiCamera className="h-full w-full"></CiCamera>
                            </div>

                            <div className="space-y-1">
                                <div className="px-6 border border-gray-300 py-1 font-bold">
                                    <div className=" ">
                                        <label htmlFor="imageUpload" className="block">Choose Image</label>
                                        <input required type="file" id="imageUpload" name="image" style={{ display: 'none' }} />
                                    </div>


                                </div>
                                <h2 className="text-gray-400 text-sm"> {"> choose one of our defaults "}</h2>
                            </div>
                        </div>

                    </div>


                    <div className="mt-16">
                        <h2 className="font-bold text-lg">Add location</h2>

                        <div className="input-wrapper">
                            <input name="location" required className="w-[300px] md:w-[500px] lg:w-[800px] border-b border-black border-solid border-0 border-t-0 border-l-0 border-r-0" type="text" />
                        </div>
                    </div>
                    <br /><br />
                    <div className="w-fit mt-6">
                        <button className="bg-pink-500 px-20 py-2 rounded-md text-white">Next</button>
                        <h2 className="text-gray-400 text-center text-sm">or Press RETURN</h2>
                    </div>
                </form>




            </div>
        </div>
    );
};

export default Profile;