import Link from "next/link"
import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import Pagination from "@/components/elements/Pagination"
import PageHeader1 from "@/components/elements/PageHeader1"
import SidebarBottom from "@/components/sections/SidebarBottom"
import data from "@/utils/blogData"

export default function Archive4() {
    return (
        <>
            <Head>
                <title>Аналітика</title>
            </Head>
            <Layout>
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                {/* <PageHeader1
                                    title={'Travel Tips'}
                                    des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis nisi sed turpis vulputate viverra. Morbi ligula elit, hendrerit non nisl tincidunt, sodales consequat magna.'}
                                /> */}
                                <div className="mt-50 mb-50">
                                    <div className="row mt-50 mb-10">
                                        {data.slice(0, 6).map((item, i) => (
                                            <div className="col-lg-6"  key={i}>
                                                <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="card-image mb-20">
                                                        <a 
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href={item.link}
                                                        >
                                                            <img src={`assets/imgs/page/technology/${item.img}`} alt="Genz" />
                                                        </a>
                                                    </div>
                                                    <div className="card-info">
                                                        <div className="row">
                                                            <div className="col-7"></div>
                                                            <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">{item.time}</span></div>
                                                        </div>
                                                        <a 
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href={item.link}
                                                        >
                                                            <h4 className="color-white mt-20">{item.title}</h4>
                                                        </a>
                                                        <p className="color-gray-500 mt-15">{item.excerpt}</p>
                                                        <div className="row align-items-center mt-25">
                                                            <div className="col-7">
                                                                <div className="box-author">
                                                                    <div className="author-info">
                                                                        <h6 className="color-gray-700">{item.authorTitle}</h6><span className="color-gray-700 text-sm">{item.date}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-5 text-end">
                                                                {item.link && (
                                                                    <a 
                                                                        className="readmore color-gray-500 text-sm" 
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        href={item.link}
                                                                    >
                                                                        <span>Читати далі</span>
                                                                    </a>
                                                                )}
                                                                {item.documentation && (
                                                                    <a
                                                                        className="readmore color-gray-500 text-sm" 
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        href={`assets/imgs/page/technology/${item.documentation}`}
                                                                    >
                                                                        <span>Читати далі</span>
                                                                    </a>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <Pagination /> */}
                                </div>
                                <div className="mb-70" />
                                {/* <SidebarBottom /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}