
const CvrCard = () => {
  return (
    <div className="cursor-pointer">
      {/* Image */}
      <div className="w-51 h-50 rounded-3xl overflow-clip relative">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="" />

        <div className="px-3 py-3.5 absolute top-0 w-full flex justify-between items-center">
          <p className="text-[12px] text-gray-700 bg-gray-200 px-2 py-0.5 font-bold rounded-full">Guest Favourite</p>
          <div className="w-6 h-6 hover:scale-107 transition-all duration-200">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" fill="#353839" stroke="white" stroke-width="2">
              <path d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="pl-1.5 pt-1 text-[13px] leading-tight">
        <h6 className="font-medium">Flat in Malvia Nagar</h6>
        <p className="text-gray-500">
          $ Price for 2 Nights ★ 4.0
        </p>
      </div>
    </div>
  )
}

export default CvrCard
