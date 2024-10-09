import React from "react"
import Head from "next/head"
import Layout from "@/components/layout/Layout"

const Members = () => {
    return (
        <>
            <Head>
                <title>Члени асоціації</title>
            </Head>
            <Layout>
                <div className="cover-home1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="text-center mt-70 mb-50">
                                    <h2 className="color-linear d-inline-block mb-20 wow animate__animated animate__fadeInUp">
                                        Члени асоціації
                                    </h2>
                                    <p className="mt-20 text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                        <ul className="mt-20 text-start d-flex flex-column gap-2">
                                            <li>Асоціація українсько-китайського стратегічного партнерства (АУКСП, м.Київ)</li>
                                            <li>Національний технічний університет України «Київський політехнічний інститут» ім. Сікорського (м. Київ)</li>
                                            <li>Київський Національний університет ім. Т.Г. Шевченка (м. Київ)</li>
                                            <li>Юридичне об’єднання «Василь Кисіль та партнери» (м. Київ)</li>
                                            <li>ТОВ «Інжинірингова компанія «КТС Груп» (м. Київ)</li>
                                            <li>Група компаній «ГЕРЦ» (м. Київ)</li>
                                            <li>Юридична компанія «АСТЕРС» (м.Київ)</li>
                                            <li>ТОВ «Південний центр розвитку туризму «Регіонтур» (с. Коблєве, Одеська обл.)</li>
                                            <li>ТОВ «Туристична агенція «Пан Укрейн» (м. Київ)</li>
                                            <li>ТОВ «Фінансова компанія «Фінанс Експерт» (м. Київ)</li>
                                            <li>ТОВ «Жива вода» (м. Київ)</li>
                                            <li>ТОВ «Екоінвест» (м. Южний)</li>
                                            <li>ТОВ «Будівельна компанія «Граніт» (м. Київ)</li>
                                            <li>Об’єднання фармацевтичних компаній «Лекхім» (м. Київ)</li>
                                            <li>ТОВ Компанія «VVT Груп» (м. Київ)</li>
                                            <li>ТОВ «Чікен Київ» (м. Київ)</li>
                                            <li>ТОВ «Ukrainian Fashion Week» (м. Київ)</li>
                                            <li>Група компаній «ВЕРЕС» (м. Київ)</li>
                                            <li>ТОВ "ЕУРОПІЄН КЕПІТАЛ МЕНЕДЖМЕНТ" (м. Київ)</li>
                                            <li>ТОВ «Київспецбуд» (м. Київ)</li>
                                            <li>ТОВ «Черкаська сонячна електростанція» (м. Черкаси)</li>
                                            <li>ТОВ «Сінвей Україна» (м. Київ)</li>
                                            <li>ТОВ «Криголам» (м. Київ)</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};
export default Members;