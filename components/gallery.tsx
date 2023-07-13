import Image from 'next/image'

// TODO: move types out somewhere else
type GalleryItem = {
    date: string
    title: string
    id: string
    imgFilename: string,
    imgSrc: string,
};

type GalleryItemProps = {
    galleryItem: GalleryItem;
};

export function GalleryItem(props : GalleryItemProps) {
  const {galleryItem} = props;
  const {id, date, title, imgFilename, imgSrc} = galleryItem;
  return (
    <div 
      key={id} 
      className="object-contain rounded-lg overflow-hidden mb-8 relative cursor-pointer"
    >
      {/* <p>{id}</p>
      <p>{date}</p>
      <p>{title}</p>
      <p>{imgFilename}</p> */}
      <img 
        src={imgSrc} 
        alt={imgFilename} 
        className="rounded"
      ></img>
    </div>
  );
}



export default function Gallery({allGalleryItemsData}: {allGalleryItemsData: GalleryItem[]}) {
  
  return (
    <div className="w-full lg:columns-3 sm:columns-2 gap-2rem">
      {allGalleryItemsData.map((galleryItem: GalleryItem, index)=>(
        <GalleryItem key={index} galleryItem={galleryItem}/>
      ))}
    </div>
  )
}
  