import ProfileImg1 from '../../assets/imgs/profileimg1.png'
import ProfileImg2 from '../../assets/imgs/profileimg2.png'

const UsrsSidebar = () => {
  return (
    <section className="w-2/5 border-r border-gray-300">
      <div className="flex flex-col gap-4 justify-center items-center py-9">
        {/* Header */}
        <div className="w-3/5 pr-8 flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Profile</h1>
          <span className="w-14 h-14 p-4.5 flex justify-center items-center rounded-xl hover:bg-gray-200/60 transition-all duration-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-padding-right preview-icon"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M17 16V8" /></svg>
          </span>
        </div>

        {/* Options */}
        <ul className="w-3/5 flex flex-col gap-2 pr-8">
          <li className='px-4 py-2 flex items-center gap-4.5 bg-gray-200/70 rounded-2xl cursor-pointer'> 
            {/* Img */}
            <div className='w-10 h-10 flex justify-center items-center'>
              <img src={ProfileImg1} alt="" />
            </div>
            <span className='text-[17px] font-semibold'>About Me</span>
          </li>

          <li className='px-4 py-2 flex items-center gap-4.5 hover:bg-gray-200/70 rounded-2xl cursor-pointer transition-all duration-100'>
            <div className='w-10 h-10 flex justify-center items-center'>
              <img src={ProfileImg2} alt="" />
            </div>

            <span className='text-[17px] font-semibold'>Connections</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default UsrsSidebar
