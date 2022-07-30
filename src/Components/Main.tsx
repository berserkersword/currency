import backround from '../Assets/Imgs/illustration.png'

const Main = () => {
  return (
    <div className="main-wrapper grid lg:grid-cols-2 sm:grid-cols-1 ">
      <div className='sm:w-full flex flex-col justify-center items-center'>
        <h1 className='text-3xl primary-color mb-3 sm:text-7xl'>Welcom to our side</h1>
        <h2 className='text-2xl primary-color sm:text-5xl'>You can convert currency <br />in this <span>Site</span></h2>
      </div>
      <div className='sm:w-full image relative'>
        <img className='w-full' src={backround} alt="back" />
      </div>
    </div>
  )
}

export default Main
