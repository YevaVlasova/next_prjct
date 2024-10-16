import Link from "next/link"
import { useState } from "react"

const MobileMenu = ({ openClass }) => {
    // State to track the active status and key
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });
    
    function CurrentYear() {
        const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    
        return <span>{currentYear}</span>;
      }

    // Function to handle toggling the active status based on the given key
    const handleToggle = (key) => {
        // Check if the current key matches the active key in the state
        if (isActive.key === key) {
            // If the current key matches, set the active status to false
            setIsActive({
                status: false,
            });
        } else {
            // If the current key does not match, set the active status to true and update the key
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar bg-gray-900 ${openClass}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        {/* <div className="mobile-logo border-gray-800">
                            <Link className="d-flex" href="/">
                                <img className="logo-night" alt="GenZ" src="/assets/imgs/template/logo.svg" />
                                <img className="d-none logo-day" alt="GenZ" src="/assets/imgs/template/logo-day.svg" />
                            </Link>
                        </div> */}
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav className="mt-15">
                                    <ul className="mobile-menu font-heading">
                                        <li className={isActive.key == 1 ? "has-children active" : "has-children"} onClick={() => handleToggle(1)}>
                                            <Link href="/">Головна</Link>
                                        </li>
                                        <li className={isActive.key == 2 ? "has-children active" : "has-children"} onClick={() => handleToggle(2)}>
                                            <span className="menu-expand"><i className="fi-rr-caret-down"></i></span>
                                            <Link href="/page-about">Про Асоціацію</Link>
                                            <ul className={isActive.key == 2 ? "sub-menu d-block" : "sub-menu d-none"}>
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
                                        <li className={isActive.key == 3 ? "has-children active" : "has-children"} onClick={() => handleToggle(3)}>
                                            <Link className="color-gray-500" href="/blog-archive-4">Аналітика</Link>
                                        </li>
                                        <li className={isActive.key == 5 ? "has-children active" : "has-children"} onClick={() => handleToggle(5)}>
                                            <Link className="color-gray-500" href="/page-contact">Контакти</Link>
                                        </li>
                                        {/* <li className={isActive.key == 4 ? "has-children active" : "has-children"} onClick={() => handleToggle(4)}>
                                            <span className="menu-expand"><i className="fi-rr-caret-down"></i></span>
                                            <Link href="/#">Pages</Link>
                                            <ul className={isActive.key == 4 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li><Link href="/page-about">About</Link></li>
                                                <li><Link href="/page-author">Author posts</Link></li>
                                                <li><Link href="/page-contact">Contact</Link></li>
                                                <li><Link href="/page-search">Search results</Link></li>
                                                <li><Link href="/page-login">Login</Link></li>
                                                <li><Link href="/page-signup">Signup</Link></li>
                                                <li><Link href="/page-404">Page 404</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/page-contact">Contact</Link></li> */}
                                    </ul>
                                </nav>
                            </div>
                            {/* <div className="mobile-account border-gray-800">
                                <div className="mobile-header-top bg-gray-900">
                                    <div className="user-account"><Link href="/page-login"><img src="/assets/imgs/template/ava.jpg" alt="GenZ" /></Link>
                                        <div className="content">
                                            <h6 className="user-name color-white">Hello<span className="color-white"> Steven !</span>
                                            </h6>
                                            <p className="font-xs text-muted">You have 3 new messages</p>
                                        </div>
                                    </div>
                                </div>
                                <ul className="mobile-menu">
                                    <li><Link href="/page-login">Profile</Link></li>
                                    <li><Link href="/page-login">Articles Saved</Link></li>
                                    <li><Link href="/page-login">Add new post</Link></li>
                                    <li><Link href="/page-login">My Likes</Link></li>
                                    <li><Link href="/page-login">Account Setting</Link></li>
                                    <li><Link href="/page-login">Sign out</Link></li>
                                </ul>
                            </div> */}
                            <div className="site-copyright color-gray-400 mt-30">
                                © 1997-<CurrentYear /> Created by
                                <Link className="copyright" href="https://abc-digital.com" target="_blank"> ABC Digital</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default MobileMenu;