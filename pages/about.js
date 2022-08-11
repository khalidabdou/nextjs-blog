import Head from "next/head"
import { greeting, socialMediaLinks, bloggersList } from '../public/infos.js'

function bloggers() {
    return (

        bloggersList.map(blogger => (
            <div className='col'>
                <img src={blogger.avatar} className="rounded-circle mb-3 author"
                    alt="Avatar" />
                <h6 className="mb-2">{blogger.username}</h6>
                <p className="text-muted">{blogger.title} <span className="badge bg-primary">PRO</span></p>

            </div>
        ))

    )
}
export default function About() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='text-center  main-wrapper'>
                <div className='text-center m-4 p-4'>
                    <img src={greeting.avatar} className="rounded-circle mb-3 author"
                        alt="Avatar" />
                    <h5 className="mb-2"><strong>{greeting.username}</strong></h5>
                    <p className="text-muted">Android Devloper <span className="badge bg-primary">PRO</span></p>


                    <p className='mt-4'>{greeting.subTitle}</p>
                    <p className='mt-4'>{greeting.about}</p>

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
                    <p>{greeting.blogwithus}</p>

                    <h4>bloggers</h4>

                    <div className='row m-4'>
                        {bloggers()}
                    </div>


                </div>
            </div>
        </div>

    )
}