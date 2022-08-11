

export default function Blog({ blog }) {

    function image() {
        if (blog.attributes.image.data !== null)
            return (<img
                className="img-fluid post-thumb "
                src={process.env.REACT_APP_API_STRAPI + blog.attributes.image.data.attributes.url}
                alt="image"
            />)
        else return (<img
            className="img-fluid post-thumb "
            src={'blog.jpeg'}
            alt="image"
        />)
    }

    return (

        <>
            {/*//item*/}
            <div className="item mb-5 ">
                <div className="row g-3 g-xl-0 ">
                    <div className="col-2 col-xl-3">
                        {image()}
                    </div>
                    <div className="col text-start">
                        <h3 className="title mb-1">
                            <a className="text-link" href={"/blog/" + blog.attributes.slug}>
                                {blog.attributes.title}
                            </a>
                        </h3>

                        <div className="meta mb-1">
                            <span className="date">Published {}</span>

                            <span className="comment">

                            </span>
                        </div>
                        <div className="intro">
                            {blog.attributes.introduction}
                        </div>
                        <a className="text-link" href={"/blog/" + blog.attributes.slug}>
                            Read more →
                        </a>
                    </div>
                    {/*//col*/}
                </div>
                {/*//row*/}
            </div>
            {/*//item*/}
        </>
    );
}


