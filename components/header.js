import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {

  const [handleOpen, setHandleOpen] = useState(false)
  const [width, setWidth] = useState(0);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);


const isMobile = width <= 768;

  return (
    <div className="fixed flex justify-center font-mono w-full h-16 -mt-2 mx-auto z-10 bg-gray-50 opacity-100 shadow-xl">
      <div className="home text-3xl mr-2 xl:mr-60 my-auto font-bold">
        <Link href="#mainpage">
            <a className="hover:underline">Yiling's blog</a>
        </Link>
      </div>
      <div className={handleOpen && isMobile ? "absolute z-20 -right-4 top-4 w-16 h-auto block md:hidden text-white cursor-pointer": 
      "absolute z-20 -right-4 top-4 w-16 h-auto block md:hidden text-black cursor-pointer"} onClick={() => setHandleOpen(!handleOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      {/* sidebar */}
      <div className={handleOpen && isMobile ? "absolute z-10 text-2xl flex-row font-bold block bg-gray-800 text-white w-2/3 h-96 right-0 top-0": 
      "absolute z-10 text-2xl flex-row font-bold hidden bg-gray-500 text-white w-2/3 h-96 right-0 top-0"}>
            <div className="projects my-6 mx-4" onClick={() => setHandleOpen(false)}>           
                <Link href="#projectList">
                    <a className="hover:underline">projects</a>
                </Link>
            </div>
            <div className="about my-6 mx-4" onClick={() => setHandleOpen(false)}>           
                <Link href="#about">
                    <a className="hover:underline">about</a>
                </Link>
            </div>
            <div className="contact my-6 mx-4" onClick={() => setHandleOpen(false)}>           
                <Link href="#contact">
                    <a className="hover:underline">contact</a>
                </Link>
            </div> 
        </div>

      {/* desktop ver. */}
        <div className="rightlink text-2xl flex-row my-auto font-bold hidden md:flex">
            <div className="projects mr-6">           
                <Link href="#projectList">
                    <a className="hover:underline">projects</a>
                </Link>
            </div>
            <div className="about mr-6">           
                <Link href="#about">
                    <a className="hover:underline">about</a>
                </Link>
            </div>
            <div className="contact mr-6">           
                <Link href="#contact">
                    <a className="hover:underline">contact</a>
                </Link>
            </div> 
        </div>
    </div>
  )
}