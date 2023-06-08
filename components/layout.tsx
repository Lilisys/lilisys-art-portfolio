import { Inter } from 'next/font/google'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Header from './header';

export const siteTitle = 'Lilisys Art Portfolio';
const inter = Inter({ subsets: ['latin'] })

type LayoutProps = {
  children: React.ReactNode,
  home?: boolean,
};

export default function Layout(props: LayoutProps) {
  const {children, home} = props;
  return (
    <div>
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
      <Header siteTitle={siteTitle}/>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} bg-green-200`}
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
      <footer>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left bg-cyan-200">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={'mb-3 text-2xl font-semibold'}>
            Docs{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
              </span>
            </h2>
            <p className={'m-0 max-w-[30ch] text-sm opacity-50'}>
            Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={'mb-3 text-2xl font-semibold'}>
            Learn{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
              </span>
            </h2>
            <p className={'m-0 max-w-[30ch] text-sm opacity-50'}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={'mb-3 text-2xl font-semibold'}>
            Templates{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
              </span>
            </h2>
            <p className={'m-0 max-w-[30ch] text-sm opacity-50'}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={'mb-3 text-2xl font-semibold'}>
            Deploy{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
              </span>
            </h2>
            <p className={'m-0 max-w-[30ch] text-sm opacity-50'}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </footer>
    </div>
  );
}