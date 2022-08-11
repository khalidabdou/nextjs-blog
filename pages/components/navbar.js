import { greeting, socialMediaLinks, bloggersList } from '../../public/infos.js';
import Buy from './buy.js';
import buy from './buy.js';

export default function Navbar() {

    return (
        <header className="header text-center">
            <h1 className="blog-name pt-lg-4 mb-0">
                <a className="no-text-decoration" href="/">
                    Abdou's Blog
                </a>
            </h1>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navigation"
                    aria-controls="navigation"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div id="navigation" className="collapse navbar-collapse flex-column">
                    <div className="profile-section pt-3 pt-lg-0">
                        <img
                            className="profile-image mb-3 rounded-circle mx-auto"
                            src="/abdoukhalid.jpeg"
                            alt="image"
                        />
                        <div className=" mb-3">
                            {greeting.subTitle}
                            <br />

                        </div>
                        {/*//bio*/}
                        <ul className="social-list list-inline py-3 mx-auto">

                            <li className="list-inline-item">
                                <a href={socialMediaLinks.github} target="_blank">
                                    <i className="fab fa-github fa-fw" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href={socialMediaLinks.linkedin} target="_blank">
                                    <i className="fab fa-linkedin-in fa-fw" />
                                </a>
                            </li>
                            <li className="list-inline-item">

                                <a href={socialMediaLinks.facebook} target="_blank">
                                    <i className="fab fa-facebook fa-fw" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href={socialMediaLinks.instagram} target="_blank">
                                    <i className="fab fa-instagram fa-fw" />
                                </a>
                            </li>
                        </ul>
                        {/*//social-list*/}
                        <hr />
                    </div>
                    {/*//profile-section*/}
                    <ul className="navbar-nav flex-column text-start">
                        <li className="nav-item">

                            <a className="nav-link active" href="/">
                                <i className="fas fa-bookmark fa-fw me-2" />
                                Blog Home <span className="sr-only">(current)</span>
                            </a>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link" href="/about">
                                <i className="fas fa-user fa-fw me-2" />
                                About Me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://portfolio.khalidabdellah.com" >
                                <i className="fas fa-book fa-fw me-2" />
                                My Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about" >
                                <i className="fas fa-blog fa-fw me-2" />
                                Blog With Us
                            </a>
                        </li>
                    </ul>

                    <div className="my-2 my-md-3">
                        <Buy/>
                    </div>
                </div>
            </nav>
        </header>
    )
}
