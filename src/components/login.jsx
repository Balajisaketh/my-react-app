    import useWindowSize from "../hooks/useWindowsize"
    import { useState} from "react";
    import { useEffect } from "react";
    import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
    import { useAuth } from "../contexts/Authcontext";
    import { useNavigate} from "react-router-dom";
    function Login(){
        const windowSize=useWindowSize();
        const[email,setEmail]=useState(""); 
        const { login ,isLoggedIn} = useAuth();
        const[passw,setPassw]=useState("");
        const nav=useNavigate()
        
        
        useEffect(() => {
            if (isLoggedIn) {
                console.log("check login",isLoggedIn)
                // nav("/banner");

            }
        }, [isLoggedIn, nav]);
        const handleLogin = () => {
            console.log("hllo i am in login");
            // Validate credentials if needed
            const userData = { email, passw };
            console.log("chk",passw,email);
            login(userData);

            nav('/banner') 


            
        };
        if(windowSize.width>=375 && windowSize.width<768)
    {
        return(
            <>
            
            <div className="w-auto h-auto text-center">
        <form className="w-[50%] mx-auto">
        <div >
                <label htmlFor="email" className="block text-sm  text-left font-medium leading-6 text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e)=>
                {console.log("mail",e.target.value);
                    setEmail(e.target.value)}}/>
                </div>
                </div>
                <div className="mt-5">
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                    </label>
                
                </div>
                <div className="mt-2">
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e)=>{
                    console.log("pass",e.target.value);
                    setPassw(e.target.value)}

                }/>
                </div>
                </div>
                <div className='flex space-x-10 mt-10'>
                
                <button
                type="submit"
                onClick={
                    handleLogin}
                    className="flex w-40 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Login
                </button>
            </div>
        </form>

    </div>
    {/* <div className="mt-40 sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="text-xl text-bold font-bold mb-10">Login page</h1>
            <form className="space-y-6" action="#" method="POST"  encType="multipart/form-data">
                <div>
                <label htmlFor="email" className="block text-sm  text-left font-medium leading-6 text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e)=>
                {console.log("mail",e.target.value);
                    setEmail(e.target.value)}}/>
                </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                    </label>
                
                </div>
                <div className="mt-2">
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e)=>{
                    console.log("pass",e.target.value);
                    setPassw(e.target.value)}

                }/>
                </div>
                </div>
                

                <div className='flex space-x-10 '>
                
                <button
                    type="submit"
                    className="flex w-40 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Login
                </button>
                </div>
            </form>

            </div> */}
            </>
        )
    }
    else if(windowSize.width>=768 && windowSize.width<1023)
    {
        return(
            <>
            

    <div className="w-auto h-auto text-center">
        <form className="w-[50%] mx-auto">
        <div >
                <label htmlFor="email" className="block text-sm  text-left font-medium leading-6 text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e)=>
                {console.log("mail",e.target.value);
                    setEmail(e.target.value)}}/>
                </div>
                </div>
                <div className="mt-5">
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                    </label>
                
                </div>
                <div className="mt-2">
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e)=>{
                    console.log("pass",e.target.value);
                    setPassw(e.target.value)}

                }/>
                </div>
                </div>
                <div className='flex space-x-10 mt-10'>
                
                <button
                type="submit"
                className="flex w-40 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={()=>handleLogin()} >
                Login
                </button>
            </div>
        </form>

    </div>
            </>
        )
    }
        else{
            return(
                <>
        <div className="mt-40 sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="text-xl text-bold font-bold mb-10">Login page</h1>
            <form className="space-y-6" action="#" method="POST"  encType="multipart/form-data">
                <div>
                <label htmlFor="email" className="block text-sm  text-left font-medium leading-6 text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e)=>
                {console.log("mail",e.target.value);
                    setEmail(e.target.value)}}/>
                </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                    </label>
                
                </div>
                <div className="mt-2">
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e)=>{
                    console.log("pass",e.target.value);
                    setPassw(e.target.value)}

                }/>
                </div>
                </div>
                

                <div className='flex space-x-10 '>
                
                <button
                    type="submit"
                    className="flex w-40 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               onClick={()=>handleLogin()} >
                    Login
                </button>
                </div>
            </form>

            </div>
                </>
            )
        }
        
    }
    export default Login