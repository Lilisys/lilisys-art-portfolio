import Link from 'next/link'
import Layout from '@/components/layout';

type ConventionItem = {
  name: string,
  date: string,
  location: string,
};

type ConventionItemProps = {
  conventionItem: ConventionItem;
};

function ConventionItem(props: ConventionItemProps) {
  const {conventionItem} = props;
  const {name, date, location} = conventionItem;
  return(
    <div
      key={name}
      className='mb-8 text-center'
    >
      <p 
        className='font-semibold'
      >
        {name}
      </p>
      <p>{date} | {location}</p>
    </div>
  )

}

function Conventions() {
  // TODO: move data away
  const conList: ConventionItem[] = [
    {
      name: 'Genesis 9',
      date: 'Jan 20-22',
      location: 'San Jose, CA'
    },
    {
      name: 'Otaku Detroit New Years Festival',
      date: 'Jan 28',
      location: 'Warren, MI'
    },
    {
      name: 'Fan Expo Cleveland',
      date: 'Mar 24-26 ',
      location: 'Cleveland, OH',
    },
    {
      name: 'Megacon',
      date:  'Mar 30 - Apr 2',
      location: 'Orlando, FL',
    },
    {
      name: 'Con Ja Nai',
      date: 'Apr 8',
      location: 'Ann Arbor, MI',
    },
    {
      name: 'Grand Rapids Comic Con',
      date: 'Apr 14-16',
      location: 'Grand Rapids, MI',
    },
    {
      name: 'LTU Expo',
      date: 'Apr 22',
      location: 'Southfield, MI',
    },
    {
      name: 'Motor City Comic Con',
      date: 'May 19-21',
      location: 'Novi, MI',
    },
    {
      name: 'Anime Expo',
      date: 'Jul 1-4  ',
      location: 'Los Angeles, CA',
    },
    {
      name: 'GalaxyCon Raleigh',
      date: 'Jul 27-30',
      location: 'Raleigh, NC',
    },
    {
      name: 'Fan Expo Boston',
      date: 'Aug 4-6',
      location: 'Boston, MA',
    },
    {
      name: 'Kokorokon',
      date: 'Aug 25-27',
      location: 'Collinsville, IL',
    },
  ]
  return (
    <Layout currentPage='conventions'>
      <div>
        <p 
          className='my-6 text-4xl font-bold'
        >
          UPCOMING CONVENTIONS
        </p>
        {conList.map((conItem: ConventionItem, index)=>(
          <ConventionItem conventionItem={conItem} key={index}/>
          
        ))}
      </div>
    </Layout>
  )
}
 
export default Conventions
