import Link from "next/link"
import Head from 'next/head'
import Layout from "@/components/layout/Layout"

export default function PageContact() {
    return (
        <>
            <Head>
                <title>
                    АСОЦІАЦІЯ ДІЛОВОГО СПІВРОБІТНИЦТВА УКРАЇНИ ТА ДЕРЖАВ АСЕАН
                </title>
            </Head>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto">
                                <div className="text-center mt-70">
                                    <h1 className="color-linear d-inline-block mb-30">Контакти</h1>
                                    <p className="text-xl color-gray-500">Юридична особа Асоціація "АСОЦІАЦІЯ ДІЛОВОГО СПІВРОБІТНИЦТВА УКРАЇНИ ТА ДЕРЖАВ АСЕАН" (скорочено Асоціація «Україна-АСЕАН-Бізнес")</p>
                                </div>
                                <div className="text-center mt-30">
                                    <div className="d-inline-block support text-start">+38 (050) 462 29 92<br />WeChat ID : amb-lytvyn</div>
                                    <div className="d-inline-block location text-start">contact@genz.com<br />sales@genz.com</div>
                                    <div className="d-inline-block plane text-start">No.132, Goloseevsky Avenue, “RELE” business center,<br />16th floor, Kyiv, 03150, Ukraine</div>
                                </div>
                                <div className="box-map mt-70 mb-50">
                                    <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213.08108694232592!2d30.478120575870776!3d50.382051968645015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c9c5ffe29165%3A0xd045575f48233b24!2zTWVlc3Qg0J_QntCo0KLQkCDihJY3OTgg0LTQviAzMNC60LM!5e1!3m2!1sen!2sua!4v1728489133856!5m2!1sen!2sua" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div className="form-contact">
                                    <div className="text-center">
                                        <h3 className="color-linear d-inline-block mb-10">Drop Us a Line</h3>
                                        <p className="text-xs color-gray-500">Your email address will not be published. Required fields are marked *</p>
                                    </div>
                                    <div className="row mt-50">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="Your name *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="Email *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="Phone number *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="Subject *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea className="form-control bg-gray-850 border-gray-800 color-gray-500" rows={5} placeholder="Message *" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="text-center mb-50"><Link href="#" className="btn btn-linear btn-load-more btn-radius-8 hover-up">
                                                Send Message
                                                <i className="fi-rr-arrow-small-right" /></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}