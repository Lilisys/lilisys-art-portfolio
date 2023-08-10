import Link from 'next/link';

import {PAGES} from './sharedTypes';

type HeaderProps = {
    siteTitle: string,
    currentPage: PAGES,
  };

type NavLink = {
  id: PAGES,
  title: string,
  url: string,
}

export default function Header(props: HeaderProps) {
  const {siteTitle, currentPage} = props;

  const navLinks: NavLink[] = [
    {
      id: 'about',
      title: 'ABOUT',
      url: '/about',
    },
    {
      id: 'gallery',
      title: 'GALLERY',
      url: '/',
    },
    {
      id: 'conventions',
      title: 'CONVENTIONS',
      url: '/conventions',
    },
    {
      id: 'commissions',
      title: 'COMMISSIONS',
      url: '/commissions',
    },
  ]
  const navlinkClass = (currentPage: PAGES, compare: PAGES) => {
    const sharedStyle = 'ml-3 '
    if (currentPage === compare) {
      return sharedStyle + 'underline underline-offset-4 ml-3';
    }
    return sharedStyle;
  }
  return (
    <nav className="sticky top-0 z-50 h-32 text-celestial-blue bg-white">
      <div className="flex flex-row justify-between items-center p-3">
        {/* left nav buttons */}
        <div className="basis-1/4 flex justify-between flex-row grow">
          {navLinks.map((navLinkItem: NavLink, index)=> (
            <Link 
              key={index} 
              className={navlinkClass(currentPage, navLinkItem.id)} 
              href={navLinkItem.url}>{navLinkItem.title}
            </Link>  
          ))}
        </div>
        {/* Title */}
        <div className="basis-2/4 mx-10 text-8xl">
          {/* todo: make the logo into an image */}
          <h2 className="text-center">{siteTitle}</h2>
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