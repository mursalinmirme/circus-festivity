import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
const Signup = () => {
    return (
        <div className='pt-28 w-11/12 mx-auto'>
            <div className='flex justify-center'>
                <div>
                <div className='border rounded-lg px-8 py-8 w-[550px]'>
                <p className='text-center text-gray-800'>Welcome</p>
                <h3 className='text-2xl font-semibold text-slate-700 mt-3 text-center'>Join Us by Creating an Account</h3>
                <form className='mt-5'>
                    <div className='flex flex-col mb-4'>
                        <label className='font-medium text-gray-500' htmlFor="name">Full Name</label>
                        <input className='bg-gray-100 text-base font-medium px-2 py-3 mt-1 outline-none border-none' type="text" name="fullName" id="name" />
                    </div>
                    <div className='flex flex-col mb-5'>
                        <label className='font-medium text-gray-500' htmlFor="name">Image URL</label>
                        <input className='bg-gray-100 text-base font-medium px-2 py-3 mt-1 outline-none border-none' type="text" name="fullName" id="name" />
                    </div>
                    <div className='flex flex-col mb-5'>
                        <label className='font-medium text-gray-500' htmlFor="name">Email</label>
                        <input className='bg-gray-100 text-base font-medium px-2 py-3 mt-1 outline-none border-none' type="text" name="fullName" id="name" />
                    </div>
                    <div className='flex flex-col mb-5'>
                        <label className='font-medium text-gray-500' htmlFor="name">Password</label>
                        <input className='bg-gray-100 text-base font-medium px-2 py-3 mt-1 outline-none border-none' type="text" name="fullName" id="name" />
                    </div>
                    <button className='btn w-full mt-3 bg-[#ffa51d] font-bold'>Register</button>
                </form>
                <p className='text-center mt-4 font-semibold text-gray-500'>Have an account? <Link to={'/signin'}>Login</Link></p>
                </div>

                <div>
                <div className='flex justify-center py-4'>
                    <div className='flex items-center'>
                    <hr className='w-40' />
                    <span className='font-bold'>Or</span>
                    <hr className='w-40' />
                    </div>
                </div>
                    <div className='flex justify-between'>
                    <button className='flex py-3 px-5 flex-col rounded-lg items-center border'>
                        <FcGoogle className='text-6xl'></FcGoogle>
                        <span className='font-semibold text-gray-600 mt-2 text-lg'>Sign up with Google</span>
                    </button>
                    <button className='flex py-3 px-5 flex-col rounded-lg items-center border'>
                        <AiFillGithub className='text-6xl'></AiFillGithub>
                        <span className='font-semibold text-gray-600 mt-2 text-lg'>Sign up with Github</span>
                    </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;