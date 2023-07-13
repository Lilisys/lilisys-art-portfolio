type FooterProps = {};

export default function Footer(props: FooterProps) {
  return (
    <footer>
      <div className="mb-32 flex text-center lg:mb-0 lg:grid-cols-4 lg:text-left bg-wisteria">
        <div
          className="flex-1  px-5 py-4"
        >
          <div
            className="flex flex-col items-start"
          >
            <h2 className={'mb-3 text-2xl font-semibold'}>
            Contact:{' '}
            </h2>
            <a 
              className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none" 
              href="mailto:lilisysart@gmail.com">
                lilisysart@gmail.com
            </a>
          </div>
          
        </div>

        <div
          className="flex-1 px-5 py-4 "
        >
          <h2 className={'mb-3 text-2xl font-semibold'}>
            Follow Me On
          </h2>
          <div className={'m-0 max-w-[30ch] text-m opacity-50'}>
            <a 
              className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none"
              href="https://www.instagram.com/_lilisys/"
            >
                Instagram
            </a>
            <br/>
            <a 
              className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none"
              href="https://www.twitter.com/_lilisys/"
            >
                Twitter
            </a>
            <br/>
            <a 
              className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none"
              href="https://www.patreon.com/lilisys"
            >
                Patreon
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}