
import Layout from './components/layout'
import { analytics } from '../utils/firebase';
import '../public/assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../public/assets/fontawesome/css/all.min.css'
import '../public/assets/fontawesome/js/all.min.js'
import { useEffect } from 'react';



export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    analytics();
    analytics('screen_view');
    console.log('screen_view');
  }, [])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}