import Link from 'next/link'
import { React, useState, useEffect } from "react"
import SwitchButton from '@/components/elements/SwitchButton'

const Header = ({ handleOpen, handleRemove, openClass }) => {
    // State to keep track of the scroll position
    const [scroll, setScroll] = useState(0);

    // State to represent whether something is toggled or not
    const [isToggled, setToggled] = useState(false);

    // Function to toggle the value of 'isToggled'
    const toggleTrueFalse = () => setToggled(!isToggled);

    // Effect hook to add a scroll event listener
    useEffect(() => {
        // Callback function to handle the scroll event
        const handleScroll = () => {
            // Check if the current scroll position is greater than 100 pixels
            const scrollCheck = window.scrollY > 100;

            // Update the 'scroll' state only if the scroll position has changed
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };

        // Add the 'handleScroll' function as a scroll event listener
        document.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <>
            <header className={scroll ? "header sticky-bar bg-gray-900 stick" : "header sticky-bar bg-gray-900"}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-nav">
                            <nav className="nav-main-menu d-none d-xl-block">
                                <ul className="main-menu">
                                    <li>
                                        <Link className="active" href="/">Головна</Link>
                                    </li>
                                    <li className="has-children"><Link className="color-gray-500" href="/page-about">Про Асоціацію</Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link className="color-gray-500" href="/page-partnership">
                                                    Партнерство
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="color-gray-500" href="/page-purpose">
                                                    Мета і завдання
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="color-gray-500" href="/page-structure">
                                                    Статус та структура
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="color-gray-500" href="/page-members">
                                                    Члени асоціації
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link className="color-gray-500" href="/blog-archive-4">Аналітика</Link>
                                        {/* <ul className="sub-menu two-col">
                                            <li><Link className="color-gray-500" href="/blog-archive">Blog Category 1</Link></li>
                                            <li><Link className="color-gray-500" href="/blog-archive-2">Blog Category 2</Link></li>
                                            <li><Link className="color-gray-500" href="/blog-archive-3">Blog Category 3</Link></li>
                                            <li><Link className="color-gray-500" href="/blog-archive-4">Blog Category 4</Link></li>
                                            <li><Link className="color-gray-500" href="/blog-archive-5">Blog Category 5</Link></li>
                                        </ul> */}
                                    </li>
                                    <li className="has-children"><Link className="color-gray-500" href="#">Події</Link>
                                        <ul className="sub-menu two-col">
                                            <li><Link className="color-gray-500" href="/single-sidebar">Blog Single 1</Link></li>
                                            <li><Link className="color-gray-500" href="/single-no-sidebar">Blog Single 2</Link></li>
                                            <li><Link className="color-gray-500" href="/single-center">Blog Single 3</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-children"><Link className="color-gray-500" href="#">Медіа</Link>
                                        <ul className="sub-menu two-col">
                                            <li><Link className="color-gray-500" href="/page-about">About</Link></li>
                                            <li><Link className="color-gray-500" href="/page-author">Author posts</Link></li>
                                            <li><Link className="color-gray-500" href="/page-contact">Contact</Link></li>
                                            <li><Link className="color-gray-500" href="/page-search">Search results</Link></li>
                                            <li><Link className="color-gray-500" href="/page-login">Login</Link></li>
                                            <li><Link className="color-gray-500" href="/page-signup">Signup</Link></li>
                                            <li><Link className="color-gray-500" href="/page-404">Page 404</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link className="color-gray-500" href="/page-contact">Контакти</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className={`burger-icon burger-icon-white ${openClass && "burger-close"}`}
                                onClick={() => { handleOpen(); handleRemove() }}>
                                <span className="burger-icon-top" />
                                <span className="burger-icon-mid" />
                                <span className="burger-icon-bottom" />
                            </div>
                        </div>
                        <div className="header-right text-end">
                            <SwitchButton />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;