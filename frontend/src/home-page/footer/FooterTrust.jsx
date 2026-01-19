import { Utensils, TableOfContents, Badge, Radio } from 'lucide-react';

function Mid() {
  return (
    <div >
      <div className=' flex justify-center mt-10 h-18 '>
        <h1 className='font-bold text-2xl'>Why students Trust Us</h1>
      </div>
      <div className='flex justify-evenly mb-10 mt-5'>
        <div className='flex flex-col justify-around items-center'>
          <span className='mb-4'><Utensils color="#f47b25" strokeWidth={1.75} size={35} /></span>
          <b>Fast food</b>
          <small className='text-gray-500'>Cooked just hour before Deliviery</small>
        </div>
        <div className='flex flex-col justify-around items-center'>
          <span className='mb-4'><TableOfContents color="#f47b25" strokeWidth={1.75} size={35} /></span>
          <b>Affordable</b>
          <small className='text-gray-500'>pocet freindly plans</small>
        </div>
        <div className='flex flex-col justify-around items-center'>
          <span className='mb-4'>
            <Badge color="#f47b25" strokeWidth={1.75} size={35} />
          </span>
          <b>varified</b>
          <small className='text-gray-500'>Hygine&quality checked performed</small>
        </div>
        <div className='flex flex-col justify-around items-center'>
          <span className='mb-4'><Radio color="#f47b25" strokeWidth={1.75} size={35} /></span>
          <b>Live tracking</b>
          <small className='text-gray-500'>Track your tiffin real-time</small>
        </div>
      </div>


    </div>
  )
}

export default Mid
