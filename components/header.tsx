import Link from 'next/link';

type HeaderProps = {
    siteTitle: string,
  };

export default function Header(props: HeaderProps) {
  const {siteTitle} = props;
  return (
    <nav className="sticky top-0 bg-pink-200 z-50 h-32">
      <div className="flex flex-row justify-between">
        {/* left nav buttons */}
        <div className="flex- flex flex-row bg-blue-200">
          <Link href={'/about'}>ABOUT</Link>
          <Link href={'/'}>GALLERY</Link>
          <Link href={'/conventions'}>CONVENTIONS</Link>
          <Link href={'/commissions'}>COMMISSIONS</Link>
        </div>
        <div className="flex-2 bg-blue-200 mx-10">
          <h1>{siteTitle}</h1>
        </div>
        <div className="flex-initial flex flex-row bg-blue-200">
          <p className="flex-1">IG</p>
          <p className="flex-1">TWT</p>
          <p className="flex-1">YT</p>
          <p className="flex-1">SHOP</p>
        </div>
      </div>
        

      
    </nav>
  );
}