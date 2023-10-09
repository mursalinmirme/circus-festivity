import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { useContext } from 'react';
import { authContext } from '../authProvider/AuthProvider';
import toast from 'react-hot-toast';
const Signin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    console.log("login location", location);
    const {userSingInWithEmail, signInWithGoogle, signInWithGithub} = useContext(authContext);
    const handleSignInWithEmail = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        userSingInWithEmail(email, password)
        .then(() => {
            toast.success("You are loged in");
            if(location?.state){
                return navigate(location?.state);
            }
            return navigate('/')
        })
        .catch(error => {
            if(error.message === "Firebase: Error (auth/invalid-login-credentials)."){
                toast.error("Email and Password doesn't match");
                return;
            }
            toast.error(error.message);

        })
    }

    // sign In with google 
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
        .then(() => {
            toast.success("Login successfully");
            if(location?.state){
                return navigate(location?.state);
            }
            return navigate('/')
        })
        .catch(errorGoogl => {
            toast.error(errorGoogl.message);
        })
    }

    // sign In with github
    
    const handleSignInWithGithub = () => {
        signInWithGithub()
        .then(() => {
            toast.success("Login successfully");
            if(location?.state){
                return navigate(location?.state);
            }
            return navigate('/')
        })
        .catch(errorGoogl => {
            toast.error(errorGoogl.message);
        })
    }



    return (
        <div className='pt-28 w-11/12 mx-auto'>
            <div className='flex justify-center'>
                <div>
                <div className='border rounded-lg px-8 py-8 lg:w-[550px] mt-5'>
                <h3 className='text-2xl font-semibold text-slate-700 mt-3 text-center'>Welcome Back</h3>
                <form onSubmit={handleSignInWithEmail} className='mt-9'>
                    <div className='flex flex-col mb-5'>
                        <label className='font-medium text-gray-500' htmlFor="email">Email</label>
                        <input className='bg-gray-100 text-base font-medium px-2 py-3 mt-1 outline-none border-none' type="email" name="email" id="email" required />
                    </div>
                    <div className='flex flex-col mb-7'>
                        <label className='font-medium text-gray-500' htmlFor="password">Password</label>
                        <input className='bg-gray-100 text-base font-medium px-2 py-3 mt-1 outline-none border-none' type="password" name="password" id="password" autoComplete='' required />
                    </div>
                    <button className='btn w-full text-white mt-3 bg-[#ffa51d] font-bold hover:text-gray-800'>Sign In</button>
                </form>
                <p className='text-center mt-4 font-semibold text-gray-500'>{`Don't Have an account?`} <Link to={'/signup'} className='underline'>Register</Link></p>
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
                    <button onClick={handleSignInWithGoogle} className='flex py-3 px-5 flex-col rounded-lg items-center border bg-gray-100'>
                        <FcGoogle className='text-6xl'></FcGoogle>
                        <span className='font-semibold text-gray-600 mt-2 text-lg'>Sign up with Google</span>
                    </button>
                    <button onClick={handleSignInWithGithub} className='flex py-3 px-5 flex-col rounded-lg items-center border hover:bg-gray-100'>
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

export default Signin;