import Link from "next/link";

const Hero4 = () => {
    return (
        <>
            <div className="banner banner-home4 bg-gray-850">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-xl-1" />
                        <div className="col-xl-10 col-lg-12">
                            <div className="pt-20">
                                <div className="d-flex flex-column items-center">
                                    <div className="w-full">
                                        <img src="assets/imgs/page/homepage4/1.png" alt="АСЕАН" />
                                    </div>
                                    <div className="banner-info">
                                        {/* <span className="text-sm-bold color-gray-600">
                                            Вітаємо!
                                        </span> */}
                                        <h3 className="color-linear d-inline-block mt-20 mb-15">
                                            АСОЦІАЦІЯ ДІЛОВОГО СПІВРОБІТНИЦТВА УКРАЇНИ ТА ДЕРЖАВ АСЕАН
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
};

export default Hero4;