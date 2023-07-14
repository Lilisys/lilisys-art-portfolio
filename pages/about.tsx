import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/layout';

function About() {
  return (
    <Layout currentPage='about'>
      <div
        className='w-full max-h-fit flex about-bio-stripe  mt-24'
      >
        <div className='flex basis-1/2 flex-col items-center'>
          <Image
            src="/../public/profile.jpg"
            className="rounded-full bg-cover"
            height={500}
            width={500}
            alt=""
          />

        </div>
        <div className='flex flex-1 basis-1/2 flex-col justify-center ml-10'>
          <h1 className='my-6 text-4xl font-bold'>
            About
          </h1>
          <p className='text-l mb-20'> 
          Lilisys is a mostly self-taught Michigan based painter who enjoys experimenting with both digital and traditional media. She paints a variety of subjects including characters from TV shows, video games, and anime, as well as landscapes of places she's visited. Lilisys is constantly experimenting with styles and improving her craft, and lately she’s found enjoyment working with watercolor and gouache. When Lilisys isn't painting, you can find her coding, playing video games, or crafting costumes for conventions. 
          </p>

          {/* todo: convert to button component */}
          <div className="flex flex-col justify-center h-20 w-40 bg-hunyadi-yellow rounded-lg ">
            <a 
              className=" w-full text-center text-white font-bold text-xl" 
              href="mailto:lilisysart@gmail.com">
                CONTACT
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
 
export default About