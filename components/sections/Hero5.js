import Typewriter from 'typewriter-effect'

const Hero5 = () => {
    return (
        <>
            <div className="banner">
                <div className="row align-items-end">
                    <div className="pt-80 pb-80">
                        <span className="text-sm-bold color-gray-600 wow animate__animated animate__fadeInUp">Вітаємо!</span>
                        <h1 className="color-gray-50 mt-20 mb-20 wow animate__animated animate__fadeInUp">
                            АСОЦІАЦІЯ ДІЛОВОГО СПІВРОБІТНИЦТВА УКРАЇНИ ТА ДЕРЖАВ АСЕАН
                            <Typewriter
                                options={{
                                    wrapperClassName: "typewrite color-linear",
                                    strings: ["М'янма", "Лаос", "Таїланд", "В'єтнам", "Камбоджа", "Бруней", "Філіппіни", "Малайзія", "Сінгапур", "Індонезія"],
                                    autoStart: true,
                                    loop: true
                                }}
                            />
                        </h1>
                        <div className="row">
                            <div className="col-lg-9">
                                <p className="text-base color-gray-600 wow animate__animated animate__fadeInUp">Асоціація об'єднує учасників незалежно від профілю їх діяльності та форми власності, є відкритою для вступу нових членів, зацікавлених у розширенні кола партнерів у державах-членах АСЕАН.</p>
                            </div>
                        </div>
                        {/* <div className="box-subscriber mt-40 mb-50 wow animate__animated animate__fadeInUp">
                            <div className="inner-subscriber bg-gray-800">
                                <form className="d-flex" action="#">
                                    <input className="input-sybscriber" type="text" placeholder="Ведіть ваш Емейл" />
                                    <button className="btn btn-linear btn-arrow-right">
                                        Вступити
                                        <i className="fi-rr-arrow-small-right" />
                                    </button>
                                </form>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="col-lg-6 text-center">
                        <div className="banner-img position-relative wow animate__animated animate__fadeIn">
                            <img src="assets/imgs/page/homepage1/banner.png" alt="Genz" />
                            <div className="pattern-1">
                                <img src="assets/imgs/template/pattern-1.svg" alt="Genz" />
                            </div>
                            <div className="pattern-2">
                                <img src="assets/imgs/template/pattern-2.svg" alt="Genz" />
                            </div>
                            <div className="pattern-3">
                                <img src="assets/imgs/template/pattern-3.svg" alt="Genz" />
                            </div>
                            <div className="pattern-4">
                                <img src="assets/imgs/template/pattern-4.svg" alt="Genz" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default Hero5;
