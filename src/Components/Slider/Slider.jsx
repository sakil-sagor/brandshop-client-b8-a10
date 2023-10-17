import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './sliderCss.css';
// Import Swiper React components
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';




const Slider = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('services.json');
                const json = await response.json();
                setServices(json);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();

    }, [])

    return (
        <div className='mt-12'>
            <div className=' '>
                <div className='slider'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper  w-full"
                    >
                        {
                            services.map((service) =>
                                <SwiperSlide key={service.id}>
                                    <div className={`w-full  bg-no-repeat  bg-cover bg-center`} style={{ backgroundImage: `url(${service.image}) ` }}>

                                        <div className='text-left pl-8  py-28 md:py-48 bg-black opacity-70 text-white'>
                                            <h3 className='text-4xl font-bold   mb-6'>{service?.name}</h3>
                                            <p className='py-3 '>{service?.description.split(" ").slice(0, 15).join(" ") + "..."}  </p>
                                            <p className='mt-4'>
                                                <Link className=' bg-blue-700 text-center  text-white px-2 py-2 rounded hover:bg-blue-800 duration-200' to={`services/${service?.id}`}>Check Details </Link>
                                            </p>
                                        </div>

                                    </div>
                                </SwiperSlide>)
                        }

                    </Swiper>
                </div>

            </div>
        </div >
    );
};

export default Slider;