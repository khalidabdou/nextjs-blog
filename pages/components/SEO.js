import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="og:description" content={description} />
      <meta name="description" content={description} />
      <meta name="keywords" content={description} />
      <meta property="og:title" content={title} />
    </Head>
  );
}
