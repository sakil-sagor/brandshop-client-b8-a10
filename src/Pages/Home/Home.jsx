

import AllBrands from '../../Components/AllBrands/AllBrands';
import AllProducts from '../../Components/AllProducts/AllProducts';
import LocationFind from '../../Components/LocationFind/LocationFind';

const Home = () => {

    return (
        <div>
            <div className='container mx-auto px-2 my-16'>
                <AllBrands></AllBrands>
            </div>
            <div className='container mx-auto px-2 my-16'>
                <AllProducts></AllProducts>
            </div>

            <div className='container mx-auto px-2 my-16'>
                <LocationFind></LocationFind>
            </div>

        </div>
    );
};

export default Home;

// 1  3  5  07 08  09 10 11 12 13 14 15