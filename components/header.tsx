import Link from 'next/link';

import {PAGES} from './sharedTypes';

type HeaderProps = {
    siteTitle: string,
    currentPage: PAGES,
  };

export default function Header(props: HeaderProps) {
  const {siteTitle, currentPage} = props;

  const navlinkClass = (currentPage: PAGES, compare: PAGES) => {
    if (currentPage === compare) {
      return 'underline';
    }
    return '';
  }
  return (
    <nav className="sticky top-0 bg-pink-200 z-50 h-32">
      <div className="flex flex-row justify-between items-center border-solid border-2 border-pink-600 p-3">
        {/* left nav buttons */}
        <div className="basis-1/4 flex justify-between flex-row bg-blue-200 border-solid border-2 border-indigo-600">
          <Link className={navlinkClass(currentPage, 'about')} href={'/about'}>ABOUT</Link>
          <Link className={navlinkClass(currentPage, 'gallery')} href={'/'}>GALLERY</Link>
          <Link className={navlinkClass(currentPage, 'conventions')} href={'/conventions'}>CONVENTIONS</Link>
          <Link className={navlinkClass(currentPage, 'commissions')} href={'/commissions'}>COMMISSIONS</Link>
        </div>
        {/* Title */}
        <div className="basis-2/4 bg-blue-200 mx-10 border-solid border-2 border-indigo-600 text-8xl" >
          <h1 className="text-center">{siteTitle}</h1>
        </div>
        {/* right nav buttons */}
        <div className="basis-1/4 flex flex-row bg-blue-200 border-solid border-2 border-indigo-600">
          <p className="flex-1">IG</p>
          <p className="flex-1">TWT</p>
          <p className="flex-1">YT</p>
          <p className="flex-1">SHOP</p>
        </div>
      </div>
        

      
    </nav>
  );
}