

const About = () => {
    return (
        <div className="container mx-auto">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-[250px]">
                    <img
                        src="https://i.ibb.co/QpgnggK/51u-Ttmnk-QPL-AC-SL1080.jpg"
                        className="w-full"
                        alt="Product 1"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-[400px]">
                    <img
                        src="https://i.ibb.co/yYkhStL/Brothers-Quiet-Comfort-45-1-800x800.jpg"
                        className="w-full"
                        alt="Product 2"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-[400px]">
                    <img
                        src="https://i.ibb.co/Xz6CjVx/istockphoto-1430390678-612x612.jpg"
                        className="w-full"
                        alt="Product 3"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-[400px]">
                    <img
                        src="https://i.ibb.co/k4KCCWH/Galaxy-S23-Ultra-Sky-Blue-2618.jpg"
                        className="w-full"
                        alt="Product 4"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className="stats shadow ml-80 mt-5">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                            </path>
                        </svg>
                    </div>
                    <div className="stat-title">Our Client</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z">
                            </path>
                        </svg>
                    </div>
                    <div className="stat-title">Our Profit</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc">10% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online"></div>
                    </div>
                    <div className="stat-value">86%</div>
                    <div className="stat-title">Service</div>
                    <div className="stat-desc text-secondary">14% tasks remaining</div>
                </div>
            </div>

            <div className="w-full h-20 bg-purple-600 mt-5"></div>
        </div>
    );
};

export default About;
