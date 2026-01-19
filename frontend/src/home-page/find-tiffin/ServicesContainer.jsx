import ServicesCard from './ServicesCard'
function Ui() {
  return (
    <div>
      <div className='bg-[#f8ece3] h-130'>
        <div className='flex justify-between'>
          <div className='ml-37 pt-8'>
            <b className='text-3xl'>Find Your Perfect Tiffin</b><br></br>
            <span className='text-gray-500'>32 services found in your area</span>
          </div>
          <div className='ml-37 pt-8 flex justify-between w-[43%] mr-38'>
            <select id="fieldName" name="fieldName" className='bg-white text-black  px-4 h-10 rounded-md text-sm font-bold'>
              <option value="value1">Display Text 1</option>
              <option value="value2">Display Text 2</option>
            </select>
            <select id="fieldName" name="fieldName" className='bg-white text-black  px-4 h-10 rounded-md text-sm font-bold'>
              <option value="value1">Display Text 1</option>
              <option value="value2">Display Text 2</option>
            </select>
            <select id="fieldName" name="fieldName" className='bg-white text-black  px-4 h-10 rounded-md text-sm font-bold'>
              <option value="value1">Display Text 1</option>
              <option value="value2">Display Text 2</option>
            </select>
            <button className='bg-[#f47b25] text-white px-5 h-10 rounded-md cursor-auto font-bold'>Apply filters</button>
          </div>
        </div>
        <div className='flex ml-36 mr-38 justify-between mt-6'>
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>
      </div>
    </div>
  )
}

export default Ui
