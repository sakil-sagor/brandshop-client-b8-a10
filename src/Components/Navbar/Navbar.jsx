import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import pro1 from "../../assets/pro1.png";
import LinkBar from "./LinkBar";
import ProfileShortcut from "./ProfileShortcut";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [profileState, setProfileState] = useState('Off');
    console.log(user)
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const [open, setOpen] = useState(true)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/product', name: 'Product' },
        { id: 3, path: '/myCart', name: 'My-Cart' },
        { id: 4, path: '/addProduct', name: 'Add-Product' },
        { id: 5, path: '/addBrand', name: 'Add-Brand' },





    ];

    // function for user img 
    let loginPhoto = () => {
        if (user.photoURL === null) {
            return pro1;
        } else {
            return user.photoURL;
        }
    }
    // toggle login logout function 
    const toggleText = () => {
        setProfileState((state) => (state === "On" ? "Off" : "On"));
    };
    return (
        <div className='   sticky top-0 border-b shadow-lg shadow-blue-200 bg-blue-50 z-[9999]'>
            <div className='py-4 container mx-auto px-2'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='block text-4xl text-blue-600 font-bold ami'>I-Dream</h1>



                    </div>
                    <div>

                        <ul className=' hidden md:flex'>
                            {
                                routes.map(route => (
                                    <LinkBar key={route.id} route={route}></LinkBar>
                                ))
                            }

                            <li className='ml-2 mt-10 md:mt-0 active border md:border-0  nav-bg profile-holder' >
                                {
                                    user?.email || user?.displayName ?
                                        <img style={{ cursor: 'pointer' }} onClick={toggleText} className="w-12 rounded-full" src={loginPhoto()} alt="" />
                                        :
                                        < NavLink className="py-2  bg-blue-600  hover:text-pink-800  rounded-md" to="/registration">   <span className="block py-2">LogIn</span> </NavLink >
                                }
                                <div className='nav-item my-4 lg:my-0 proflie-item'>

                                    {user?.email || user?.displayName ?
                                        <div className={profileState === 'Off' ? "active-profile-icon-area" : 'profile-icon-area'}>
                                            <ProfileShortcut loginPhoto={loginPhoto}></ProfileShortcut>
                                        </div>
                                        :
                                        ''
                                    }
                                </div>
                            </li>


                        </ul>
                        <div onClick={() => setOpen(!open)}>
                            {
                                open ?
                                    <FaBars className='md:hidden  text-3xl text-green-800 font-bold'></FaBars>
                                    :
                                    <span className="text-3xl font-bold bg-red-500 hover:bg-red-600 hover:text-4xl text-white px-2 rounded ">X</span>
                            }
                        </div>


                    </div>
                </div>
                <div className='md:hidden'>

                    <ul className={` fixed text-center space-y-5 text-black duration-1000 pr-2 top-20 mt-1 h-screen  w-3/4 opacity-95 bg-green-500  ${!open ? " left-0" : "left-[-800px] "}`}>
                        <li className='ml-2 mt-10 md:mt-0 active   nav-bg profile-holder' >
                            {
                                user?.email || user?.displayName ?
                                    <img style={{ cursor: 'pointer' }} onClick={toggleText} className="w-12 rounded-full" src={loginPhoto()} alt="" />
                                    :
                                    < NavLink className="py-2  bg-blue-600  hover:text-pink-800  rounded-md" to="/registration">   <span className="block py-2">LogIn</span> </NavLink >
                            }
                            <div className='nav-item my-4 lg:my-0 proflie-item'>

                                {user?.email || user?.displayName ?
                                    <div className={profileState === 'Off' ? "active-profile-icon-area" : 'profile-icon-area'}>
                                        <ProfileShortcut loginPhoto={loginPhoto}></ProfileShortcut>
                                    </div>
                                    :
                                    ''
                                }
                            </div>
                        </li>
                        {
                            routes.map(route => (
                                <LinkBar open={open} setOpen={setOpen} key={route.id} route={route}></LinkBar>
                            ))
                        }
                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Navbar;