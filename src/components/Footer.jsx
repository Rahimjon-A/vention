import React from 'react';
import { RiUploadLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='border-l' >
        
            <div className='grid grid-cols-[8fr_3fr]' >
                    <div className='border-r' >
                        <p className='border-b pl-[40px] text-[45px] pt-[150px] font-bold pb-[40px] ' >Contact</p>

                        <div className='grid grid-cols-2' >
                            <input className='border outline-none py-4 px-[40px] text-[#b4b4b5] ' placeholder='Full Name' type="text" />
                            <input className='border outline-none py-4 px-[40px] text-[#b4b4b5] ' placeholder='Work Email' type="text" />
                            <input className='border outline-none py-4 px-[40px] text-[#b4b4b5] ' placeholder='Phone (Optional)' type="text" />
                            <span className='px-[40px] py-4 border flex items-center justify-between' >
                            <input className='outline-none text-[#b4b4b5] w-[80%] ' placeholder='Upload File (max file size is 30MB) ' type="text" />
                            <RiUploadLine className=' text-[#b4b4b5] text-[28xpx] '></RiUploadLine>

                            </span>
                        </div>
                    </div>
                    <div>

                    </div>
            </div>

            <div className='grid grid-cols-[8fr_3fr] border-b' >
                <textarea className=' outline-none resize-none px-[40px] py-[30px] text-[#b4b4b5]  ' placeholder='How can we help you? ' ></textarea>
                <button className=' hover:bg-[#101c57] transition-all bg-[#3155ff] text-white text-[22px] font-medium ' >Send</button>
            </div>

            <div className='grid grid-cols-[8fr_3fr]  '  >
                <div className='border-r flex justify-between gap-6 items-center h-[60px] pl-[40px] ' >
                    <span className=' flex gap-1 items-center '>
                        <input type="checkbox" />
                        <p className='text-[14px] text-[#b4b4b5] ' > I agree to the <span className=' underline text-[14px] text-[#b4b4b5]'> Privacy Policy </span> and give my permission to process my personal data for the purposes specified in the Privacy Policy.</p>
                    </span>

                    <div className='bg-[#3155ff] w-[60px] h-full grow ' >

                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer