function NewReqMenu() {
    return (
        <div className='mt-4'>
            <div className='bg-white  shadow-sm rounded-xl h-75 w-70'>
                <div className='flex justify-between'>
                    <h1 className='text-lg font-bold mt-4 ml-4'>New Requests</h1>
                    <small className='text-[#f47b30] rounded bg-amber-100 h-6 w-11  py-0.5 px-1 mt-5 mr-3'>3New</small>
                </div>
                <div className='bg-[#fafafa] h-25 w-60 mt-3 rounded-xl ml-5 '>
                    <div className='pt-4 pl-9 '>
                        <div className='flex gap-3'>
                            <img src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg" className='h-9 w-9 rounded-4xl' />
                            <div className="flex flex-col">
                                <h1 >Vinay Kumar</h1>
                                <small className="text-[#a6a6a7]">Monthly Plan</small>
                            </div>
                        </div>
                        {/* <div className=''>
                            <span className='text-sm text-gray-400 pl-11'>Monthly Plan</span>
                        </div> */}
                        <div className='flex gap-5 pt-3 '>
                            <button className='bg-[#10b981] rounded px-5  py-1 text-sm text-white'>Accept</button>
                            <button className='bg-[#f4f4f5] rounded px-5 py-1 text-sm '>Reject</button>
                        </div>
                    </div>
                </div>
                <div className='bg-[#fafafa] h-25 w-60 mt-3 rounded-xl ml-5 '>
                    <div className='pt-4 pl-9 '>
                        <div className='flex gap-3'>
                            <img src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg" className='h-9 w-9 rounded-4xl' />
                            <div className="flex flex-col">
                                <h1 >Vinay Kumar</h1>
                                <small className="text-[#a6a6a7]">Monthly Plan</small>
                            </div>
                        </div>
                        {/* <div className=' pb-1'>
                            <span className='text-sm text-gray-400 pl-11 '>Monthly Plan</span>
                        </div> */}
                        <div className='flex gap-4 pt-3'>
                            <button className='bg-[#10b981] rounded px-5  py-1 text-sm text-white'>Accept</button>
                            <button className='bg-[#f4f4f5] rounded px-5 py-1 text-sm '>Reject</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewReqMenu
