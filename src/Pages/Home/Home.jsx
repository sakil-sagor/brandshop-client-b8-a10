

import AllArea from '../../Components/AllArea/AllArea';
import AllBrands from '../../Components/AllBrands/AllBrands';
import AllProducts from '../../Components/AllProducts/AllProducts';
import Emergency from '../../Components/Emergency';
import HeroArea from '../../Components/HeroArea/HeroArea';
import LocationFind from '../../Components/LocationFind/LocationFind';

const Home = () => {

    return (
        <div>
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
            <div className='container mx-auto px-2 my-24'>
                <AllProducts></AllProducts>
            </div>
            <hr />
            <div>
                <AllArea></AllArea>
            </div>
            <hr />
            <div className='container mx-auto px-2 my-24'>
                <LocationFind></LocationFind>
            </div>

        </div>
    );
};

export default Home;

// 1 2 3  5  07 08  09 10 11 12 13 14 15