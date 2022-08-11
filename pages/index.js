import SEO from './components/SEO'
import queries from '../services/queries';
import Blog from './components/Blog'
import Link from 'next/link'

import { useEffect } from 'react';
import { analytics } from '../utils/firebase';
function Home({ articles }) {

  let articlesList = articles
 

  return (
    <>
      <SEO title="Abdou's Blog"
        description="This is the description of the home page"
      />

      <div className="main-wrapper">
        <section className="blog-list px-3 py-5 p-md-5">
          <div className="container single-col-max-width">
            {articlesList.map(article => (
              <Blog key={article.id} blog={article} />
            ))}
            <Link href="" >
              <nav className="blog-nav nav nav-justified my-5">
                <a className="nav-link-next nav-item nav-link rounded"  >
                  Next
                  <i className="arrow-next fas fa-long-arrow-alt-right" />
                </a>
              </nav>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

export const getStaticProps = async () => {

  let data = null;
  const response = (await queries.getArticles(0)).data

  data = await response.data.articles.data;
  return {
    props: { articles: data },
  };
}

export default Home;