import Gallery from '@/components/gallery'
import Layout from '@/components/layout';

import { GetStaticProps } from 'next'
import { getSortedGalleryItemsData } from '../lib/galleryItems';

export const getStaticProps: GetStaticProps = async() => {
  const allGalleryItemsData = getSortedGalleryItemsData();
  return {
    props: {
      allGalleryItemsData,
    },
  };
}
  

export default function Home({
  allGalleryItemsData
}: {
    allGalleryItemsData: {
      date: string
      title: string
      id: string
      imgFilename: string,
      imgSrc: string,
    }[]
  }) {

  return (
    <Layout currentPage='gallery'>
      <Gallery allGalleryItemsData={allGalleryItemsData}></Gallery>
    </Layout>
  )
}
