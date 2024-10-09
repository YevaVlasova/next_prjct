import React from "react"
import Head from "next/head"
import PortfolioFilter from "@/components/elements/PortfolioFilter"
import Layout from "@/components/layout/Layout"
import Testimonial from "@/components/slider/Testimonial"
import Pagination from "@/components/elements/Pagination"
import MyServices from "@/components/sections/MyServices"
import PartnersLogs from "@/components/sections/PartnersLogs"

const Partnership = () => {
    return (
        <>
            <Head>
                <title>Членство і партнерські зв'язки «Асоціації «УАБ».</title>
            </Head>
            <Layout>
                <div className="cover-home1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <div className="text-center mt-70 mb-50">
                                    <h2 className="color-linear d-inline-block mb-20 wow animate__animated animate__fadeInUp">
                                        Членство і партнерські зв'язки «Асоціації «УАБ».
                                    </h2>
                                    <p className="text-lg text-start color-gray-500 wow animate__animated animate__fadeInUp">
                                        Асоціація об'єднує учасників незалежно від профілю їх діяльності та форми власності, 
                                        є відкритою для вступу нових членів, зацікавлених у розширенні кола партнерів у державах-членах АСЕАН.
                                    </p>
                                    <p className="mt-10 text-start text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                        Діяльність «Асоціації «УАБ», як небюджетної організації, фінансується виключно за рахунок 
                                        вступних та членських внесків, благодійної допомоги на інших легальних джерел.
                                    </p>
                                    <p className="mt-10 text-start text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                        «Асоціація «УАБ» - це ефективний інструмент для просування ділових проектів України та держав, 
                                        які входять до АСЕАН, надійний партнер, представник інтересів та комунікатор.
                                    </p>
                                    <h2 className="color-linear mt-80 d-inline-block mb-20 wow animate__animated animate__fadeInUp">
                                        Приєднатися до ради
                                    </h2>
                                    <p className="mt-10 text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                        <b>ДОКУМЕНТИ ДЛЯ ВСТУПУ</b>
                                    </p>
                                    <p className="mt-10 text-start text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                        Для того, аби приєднатись до Асоціації ділового співробітництва України з державами АСЕАН, будь ласка, заповніть наступні документи.
                                    </p>
                                    <p className="mt-40 text-end text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                        Заява: <span className="text-decoration-underline">____________________</span> Голові Правління Асоціації 
                                        <br />
                                        ділового співробітництва України з державами АСЕАН
                                    </p>
                                    <p className="mt-80 text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                        <b>ЗАЯВА</b>
                                    </p>
                                    <p className="mt-40 text-start text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                        Просимо Вас розглянути питання про вступ до членів Асоціації ділового співробітництва України з державами АСЕАН, 
                                        <br />
                                        <span className="text-decoration-underline">_________________________________________________________</span> 
                                        <br />
                                        (назва організації)
                                    </p>
                                    <p className="mt-10 text-start text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                        Зі Статутом Асоціації ділового співробітництва України з державами АСЕАН згоден.
                                    </p>
                                    <p className="mt-40 text-start text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                        <b>Додатки:</b>
                                        <ul className="mt-20">
                                            <li>1. Копія свідоцтва про реєстрацію юридичної особи.</li>
                                            <li>2. Копія Статуту із змінами та доповненнями.</li>
                                            <li>3. Копія довідки ЄДРПОУ.</li>
                                        </ul>
                                    </p>
                                    <div className="w-full d-flex justify-between mt-80">
                                        <div>
                                            <p><span className="text-decoration-underline">______________________________</span> </p>
                                            <p>(підпис керівника)</p>
                                        </div>
                                        <div>
                                            <p><span className="text-decoration-underline">______________________________</span> </p>
                                            <p>М.П.</p>
                                        </div>
                                    </div>
                                    <p className="mt-80 text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                        <b>Анкета:</b>
                                    </p>
                                    <p className="mt-40 text-start text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                        РЕЄСТРАЦІЙНА ФОРМА КОМПАНІЇ-учасника Асоціації ділового співробітництва України з державами АСЕАН
                                    </p>
                                    <ul className="mt-40 text-start text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                        <li>1. Назва організації, компанії
                                            <ul className="ml-20">
                                                <li>Повна: ___________________________</li>
                                                <li>Коротка: _________________________</li>
                                            </ul>
                                        </li>
                                        <li className="mt-20">2. Адреса організації, компанії
                                            <ul className="ml-20">
                                                <li>Вулиця, № будинку, Місто, Поштовий індекс ____________________</li>
                                                <li>Телефон, Моб. тел., Факс _________________________</li>
                                                <li>E-mail _________________________</li>
                                                <li>http:// _________________________</li>
                                            </ul>
                                        </li>
                                        <li className="mt-20">3. ПІБ та посада
                                            <ul className="ml-20">
                                                <li>Прізвище, ім’я та по батькові представника компанії-члена «Асоціації «УАБ» ___________________________</li>
                                                <li>Посада _________________________</li>
                                            </ul>
                                        </li>
                                        <li className="mt-20">4. Вид діяльності
                                            <ul className="ml-20">
                                                <li>Продукція/послуги що експортуються чи можуть експортуватись ___________________________</li>
                                                <li>Продукція/послуги що імпортуються чи можуть імпортуватись _________________________</li>
                                                <li>Інші форми співробітництва (СП, кредитування, спільне виробництво,ін.) _________________________</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <p className="mt-80 text-start text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                        <b>Готові документи просимо надіслати на e-mail: </b>
                                        <a className="text-lg color-gray-500" href="mailto:amblytvyn@gmail.com">amblytvyn@gmail.com</a>
                                    </p>
                                </div>
                                {/* <PortfolioFilter col={6} show={6} /> */}
                                {/* <Pagination /> */}
                                {/* <MyServices /> */}
                                {/* <Testimonial /> */}
                                {/* <PartnersLogs /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};
export default Partnership;
