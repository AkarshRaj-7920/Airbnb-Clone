import HomeSrchCard from "./HomeSrchCard"

const HomeSrchPage = () => {
  return (
    <>
      <div className="w-full pt-6 pr-7 flex justify-between items-center">
        <h1 className="text-xl font-bold">Over <span>1000</span> homes</h1>
        <h1 className="text-[15px] font-semibold">Price includes all fees</h1>
      </div>

      <section className="w-full pt-8 pr-7 grid grid-cols-2 gap-7">
        <HomeSrchCard /> 
        <HomeSrchCard /> 
        <HomeSrchCard /> 
        <HomeSrchCard /> 
        <HomeSrchCard /> 
        <HomeSrchCard /> 
        <HomeSrchCard /> 
      </section>
    </>
  )
}

export default HomeSrchPage

