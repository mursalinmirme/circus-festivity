import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { useContext } from 'react';
import { authContext } from '../authProvider/AuthProvider';
import toast from 'react-hot-toast';
const Signup = () => {
    const { signUpWithEmail, updateProfileAndEmail, signUpWithGoogle, signUpWithGithub } = useContext(authContext);
    const handleSignupWithEmail = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('fullName');
        const img = form.get('img');
        const email = form.get('email');
        const password = form.get('password');

        if(password.length < 6){
            toast.error('Password must be at least 6 characters');
            return;
        }else if(!/[A-Z]/.test(password)){
            toast.error('Include at least one uppercase letter in your password');
            return;
        }else if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~\\-]).{6,}$/.test(password)){
            toast.error('Add at least one special character in your password');
            return;
        }

        // sign up with email
        signUpWithEmail(email, password)
        .then(() => {
            updateProfileAndEmail({displayName: name, photoURL: img})
            .then(() => {
                toast.success('Registration Successfully');
            })
            .catch(errUpdate => {
                toast.error(errUpdate.message);
            })
        })
        .catch(error => {
            if(error.message === "Firebase: Error (auth/email-already-in-use)."){
                toast.error('This email has already an account');
                return;
            }
            console.log(error.message);
            toast.error(error.message);
        })
    }

    // sign up with google 
    const handleSignUPWithGoogle = () => {
        signUpWithGoogle()
        .then(() => {
            toast.success("Sign up successfully");
        })
        .catch(errorGoogl => {
            toast.error(errorGoogl.message);
        })
    }

    // sign up with github
    

    const handleSignUPWithGithub = () => {
        signUpWithGithub()
        .then(() => {
            toast.success("Sign up successfully");
        })
        .catch(errorGoogl => {
            toast.error(errorGoogl.message);
        })
    }







    return (
        <div className='pt-28 w-11/12 mx-auto'>
            <div className='flex justify-center'>
                <div>
                <div className='border rounded-lg px-8 py-8 w-[550px] mt-5'>
                <p className='text-center text-gray-800'>Welcome</p>
                <h3 className='text-2xl font-semibold text-slate-700 mt-3 text-center'>Join Us by Creating an Account</h3>
                <form onSubmit={handleSignupWithEmail} className='mt-5'>
                    <div className='flex flex-col mb-4'>
                        <label className='font-medium text-gray-500' htmlFor="name">Full Name</label>
                        <input className='bg-gray-100 text-base font-medium px-2 py-3 mt-1 outline-none border-none' type="text" name="fullName" id="name" required />
                    </div>
                    <div className='flex flex-col mb-5'>
                        <label className='font-medium text-gray-500' htmlFor="img">Image URL</label>
                        <input className='bg-gray-100 text-base font-medium px-2 py-3 mt-1 outline-none border-none' type="text" name="img" id="img" required />
                    </div>
                    <div className='flex flex-col mb-5'>
                        <label className='font-medium text-gray-500' htmlFor="email">Email</label>
                        <input className='bg-gray-100 text-base font-medium px-2 py-3 mt-1 outline-none border-none' type="email" name="email" id="email" required />
                    </div>
                    <div className='flex flex-col mb-5'>
                        <label className='font-medium text-gray-500' htmlFor="pass">Password</label>
                        <input className='bg-gray-100 text-base font-medium px-2 py-3 mt-1 outline-none border-none' type="password" name="password" id="pass" autoComplete='' required />
                    </div>
                    <button className='btn w-full mt-3 bg-[#ffa51d] font-bold'>Register</button>
                </form>
                <p className='text-center mt-4 font-semibold text-gray-500'>Have an account? <Link to={'/signin'} className='underline'>Login</Link></p>
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
                    <button onClick={handleSignUPWithGoogle} className='flex py-3 px-5 flex-col rounded-lg items-center border hover:bg-gray-100'>
                        <FcGoogle className='text-6xl'></FcGoogle>
                        <span className='font-semibold text-gray-600 mt-2 text-lg'>Sign up with Google</span>
                    </button>
                    <button onClick={handleSignUPWithGithub} className='flex py-3 px-5 flex-col rounded-lg items-center border hover:bg-gray-100'>
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