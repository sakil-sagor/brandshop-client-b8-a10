import { useContext } from 'react';
import AllArea from '../../Components/AllArea/AllArea';
import AllBrands from '../../Components/AllBrands/AllBrands';
import AllProducts from '../../Components/AllProducts/AllProducts';
import DarkLightModeToggle from '../../Components/DarkLightModeToggle/DarkLightModeToggle';
import Emergency from '../../Components/Emergency';
import HeroArea from '../../Components/HeroArea/HeroArea';
import LocationFind from '../../Components/LocationFind/LocationFind';
import { AuthContext } from '../../Context/AuthProvider';


const Home = () => {
    const { darkMode } = useContext(AuthContext);

    return (
        <div className={`${darkMode && "bg-gray-500"}`} >
            <div>
                <HeroArea></HeroArea>
            </div>
            <div>
                <Emergency></Emergency>
            </div>
            <div className='container mx-auto px-2 my-24'>
                <AllBrands></AllBrands>
            </div>
            <hr />
            <div className={`container mx-auto px-2 py-24 ${darkMode ? "text-white" : "text-blue-600"}`} >

                <div className="mx-auto text-center my-12">
                    <h2 className="text-4xl font-bold ">Most Selling Products</h2>
                    <br />
                    <hr className=" w-1/6 text-center mx-auto" />
                </div>
                <AllProducts></AllProducts>
            </div>
            <hr />
            <div>
                <AllArea></AllArea>
            </div>
            <hr />
            <div className='container mx-auto px-2 py-24'>
                <LocationFind></LocationFind>
            </div>
            <div className="fixed z-[9999] right-0 top-[50%]">

                <DarkLightModeToggle ></DarkLightModeToggle>
            </div>


        </div>
    );
};

export default Home;



// 1 2 3  5  07 08  09 10 11 12 13 14 15 

