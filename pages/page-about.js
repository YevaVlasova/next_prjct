import Link from "next/link"
import Head from 'next/head'
import Accordion from "@/components/elements/Accordion"
import PortfolioFilter from "@/components/elements/PortfolioFilter"
import Layout from "@/components/layout/Layout"
import Testimonial from "@/components/slider/Testimonial"
import PricingTable from "@/components/sections/PricingTable"
import Hero5 from "@/components/sections/Hero5"
import MyServices from "@/components/sections/MyServices"
import PartnersLogs from "@/components/sections/PartnersLogs"

export default function PageAbout() {
    return (
        <>
            <Head>
                <title>
                    First Ukraine’s ambassador to ASEAN founding states(1997-1999)
                </title>
            </Head>
            <Layout>
                <div className="cover-home1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <Hero5 />
                                {/* <MyServices /> */}
                                <div className="text-center mt-70 mb-50">
                                    <h2 className="color-linear d-inline-block mb-20 wow animate__animated animate__fadeInUp">
                                        Про Асоціацію
                                    </h2>
                                    <p className="text-lg text-start color-gray-500 wow animate__animated animate__fadeInUp">
                                        Юридична особа Асоціація "АСОЦІАЦІЯ ДІЛОВОГО СПІВРОБІТНИЦТВА УКРАЇНИ ТА ДЕРЖАВ АСЕАН"(скорочено Асоціація «Україна-АСЕАН-Бізнес») код ЄДРПОУ 37534846,  зареєстрована 23.02.2011 р. за адресою 01030, Україна, місто Київ, вулиця Богдана Хмельницького, будинок, 26, офіс, 5-8

                                        Вид діяльності: 94.99 Діяльність інших громадських організацій, н.в.і.у.
                                        <br className="d-none d-lg-block" />
                                        <b>Засновники:</b>
                                        <br className="d-none d-lg-block" />
                                        АСОЦІАЦІЯ «УКРАЇНСЬКО-КИТАЙСЬКОГО СПІВ­РО­БІ­ТНИ­ЦТВА»

                                        (м. Київ)

                                        ТОВ «АГРО­ПРО­МІН­ВЕСТ»

                                        (м. Київ)

                                        Фактична адреса головного офісу: м. Київ, 03127, проспект Голосіївський, 132, бізнес-центр "РЕЛЕ",16-й поверх.

                                        Тел.: <a className="text-lg color-gray-500" href="tel:+380504622992">+38(050)4622992</a>
                                    </p>
                                    <p className="text-lg mt-20 color-gray-500 wow animate__animated animate__fadeInUp">
                                        <b>Цілі і завдання Асоціації:</b>
                                        <ul className="d-flex flex-column gap-2 text-start mt-20">
                                            <li>- впровадження, удосконалення та розширення напрямків, форм і засобів взаємовигідної співпраці установ, організацій та різноманітних структур України та держав-членів АСЕАН незалежно від форм власності в різних галузях;</li>
                                            <li>- зміцнення традицій дружби, взаємоповаги і партнерства між народами України та держав Південно-Східної Азії, підтримка та поширення досвіду результативної взаємодії ділових, громадських та науково-культурних кіл України та держав АСЕАН.</li>
                                        </ul>
                                    </p>
                                    <p className="text-lg mt-20 color-gray-500 wow animate__animated animate__fadeInUp">
                                        <b>Предмет та основні напрямки діяльності:</b>
                                        <ul className="d-flex flex-column gap-2 text-start mt-20">
                                            <li>- сприяння у пошуку та налагодженні ділових контактів і партнерства між суб'єктами України та країн-членів АСЕАН;</li>
                                            <li>- надання всебічної допомоги та активної підтримки членам «Асоціаціі «УАБ» в реалізації бізнес, науково-технічних, інформаційних, культурно-освітніх та інших проектів на території України та країн-членів АСЕАН;</li>
                                            <li>- лобіювання та захист інтересів членів «Асоціації «УАБ» в державних, корпоративних, дипломатичних і міжнародних структурах;</li>
                                            <li>- координація дій та вирішення широкого кола практичних питань (організаційних, правових, візових, логістичних, інформаційних, представницьких і т.д.) які виникають в процесі співпраці між діловими партнерами-юридичними особами України та країн-членів АСЕАН.</li>
                                        </ul>
                                    </p>
                                </div>
                                {/* <PortfolioFilter col={4} /> */}
                                {/* <PricingTable /> */}
                                {/* <div className="text-center mt-30">
                                    <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">FAQs</h2>
                                </div>
                                <div className="box-faqs mb-70">
                                    <Accordion />
                                </div> */}
                                {/* <Testimonial /> */}
                                {/* <PartnersLogs /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}