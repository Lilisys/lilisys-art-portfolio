import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import localFont from '@next/font/local'

import Header from './header';
import Footer from './footer';
import {PAGES} from './sharedTypes';

export const siteTitle = 'LILISYS';
const clearSans = localFont({
  src: [
    {
      path: '../public/fonts/ClearSans-Thin.ttf',
      weight: '300'
    },
    {
      path: '../public/fonts/ClearSans-Regular.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/ClearSans-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-clear-sans'
})

// do we need this? maybe


type LayoutProps = {
  children: React.ReactNode,
  home?: boolean,
  currentPage: PAGES,
};

export default function Layout(props: LayoutProps) {
  const {children, home, currentPage} = props;
  return (
    <div className={`${clearSans.className}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Lilisys art portfolio website"
        />
        {/* TODO: Put some favicons together */}
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <Header siteTitle={siteTitle} currentPage={currentPage}/>
      <main
        className={'flex min-h-screen flex-col items-center justify-between p-24 text-bondi-blue'}
      >
        {children}
      </main>
      {!home && (
        <div 
        // className={    styles.backToHome}
        >
          {/* <Link href="/">← Back to home</Link> */}
        </div>
      )}
      
      <Footer/>
    </div>
  );
}