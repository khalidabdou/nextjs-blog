
import queries from '../../services/queries';
import SyntaxHighlighter from 'react-syntax-highlighter';
import ReactHtmlParser, { domToReact } from 'html-react-parser';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { analytics, firebase } from '../../utils/firebase';
import SEO from '../components/SEO';
import { useEffect } from 'react';
export default function Blog({ params }) {

    const title = params.title;
    const content = params.content;
    const introduction = params.introduction;
    const image = params.image;
    const authore_username = params.users_permissions_user.data.attributes.username;
    const authore_profile = params.users_permissions_user.data.attributes.profile;
    const [dateRelated, timeRelated] = params.publishedAt.split('T');

    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            console.log('development');
            analytics('screen_view');
            analytics;
        }

    }, [])
    const options = {
        replace: ({ attribs, children }) => {
            if (!attribs) {
                return;
            }
            //if attribs.class start with ''
            if (attribs.class && attribs.class.startsWith('language')) {
                return <SyntaxHighlighter
                    language=""
                    style={dark}
                    showLineNumbers={true}
                    className={'mt-4 mb-4'}
                    lineProps={''}
                >{domToReact(children, options)}</SyntaxHighlighter>
            }
            //check if tag is image


        }
    };

    const authorelabel = () => {
        return <div className='text-center m-4 p-4'>
            <img src={authore_profile} className="rounded-circle mb-3 author"
                alt="Avatar" />
            <h5 className="mb-2"><strong>{authore_username}</strong></h5>
            <p className="text-muted">Android Devloper <span className="badge bg-primary">PRO</span></p>
            <span className='meta'>published at {dateRelated}</span>
        </div>
    };

    return (
        <>
            <SEO title={title}
                description={introduction}
            />

            <div className="main-wrapper text-start p-4">
                <article className="blog-post px-3 py-5 p-md-5">
                    <div className="container single-col-max-width">
                        <header className="blog-post-header">
                            <h2 className="title mb-2">{title}</h2>
                        </header>
                        {ReactHtmlParser(content, options)}
                    </div>
                    <hr />

                    {authorelabel()}
                </article>

            </div>
        </>

    );
}
export async function getServerSideProps(context) {
    const { slug } = context.query;
    let data = null;
    const response = (await queries.getArticle(slug)).data
    if (response.data.articles.data.length === 0) {
        context.res.statusCode = 404;
        return {
            redirect: {
                destination: `/404`,
                permanent: true
            }
        };
    }
    data = await response.data.articles.data[0].attributes;

    return {
        props: {
            params: data || slug,
        }, // will be passed to the page component as props
    }
}

