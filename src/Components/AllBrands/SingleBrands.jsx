import { Link } from "react-router-dom";


const SingleBrands = ({ brand }) => {
    const { brandName, image, _id } = brand;
    return (
        <Link to={`brand/:${_id}`}>
            <div className="flex iteam-center justify-center border shadow-xl">
                <div>
                    <img className="w-32" src={image} alt="" />
                </div>
                <div>
                    <h3>{brandName}</h3>
                </div>
            </div>
        </Link>
    );
};

export default SingleBrands;