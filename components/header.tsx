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
    <nav className="sticky top-0 z-50 h-32 text-celestial-blue bg-white">
      <div className="flex flex-row justify-between items-center p-3">
        {/* left nav buttons */}
        <div className="basis-1/4 flex justify-between flex-row">
          <Link className={navlinkClass(currentPage, 'about')} href={'/about'}>ABOUT</Link>
          <Link className={navlinkClass(currentPage, 'gallery')} href={'/'}>GALLERY</Link>
          <Link className={navlinkClass(currentPage, 'conventions')} href={'/conventions'}>CONVENTIONS</Link>
          <Link className={navlinkClass(currentPage, 'commissions')} href={'/commissions'}>COMMISSIONS</Link>
        </div>
        {/* Title */}
        <div className="basis-2/4 mx-10 text-8xl">
          <h1 className="text-center">{siteTitle}</h1>
        </div>
        {/* right nav buttons */}
        <div className="basis-1/4 flex flex-row">
          <p className="flex-1">IG</p>
          <p className="flex-1">TWT</p>
          <p className="flex-1">YT</p>
          <p className="flex-1">SHOP</p>
        </div>
      </div>
        

      
    </nav>
  );
}