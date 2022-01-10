import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helper';

function Nav(props) {
    const {
        setCurrentPage,
        currentPage,
    } = props;

    // useEffect(() => {
    //     document.title = capitalizeFirstLetter
    //         (currentCategory.name);
    // }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Jacob Fay
                </a>
            </h2>

            <nav className="navbar navbar-default">
             
                    <ul className=" navbar navbar-default ">
                        <li className="mx-2">
                            <span onClick={() => {
                                setCurrentPage('about')
                            }}>About</span>
                        </li>
                        <li className="mx-2">
                            <span onClick={() => {
                                setCurrentPage('contact')
                            }}>Contact</span>
                        </li>
                        <li className="mx-2">
                            <span onClick={() => {
                                setCurrentPage('portfolio')
                            }}>Portfolio</span>
                        </li>
                        <li className="mx-2">
                            <span onClick={() => {
                                setCurrentPage('resume')
                            }}>Resume</span>
                        </li>
                    </ul>
            </nav>
        </header>
    );
}

export default Nav;