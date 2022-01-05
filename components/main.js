
export default function Main(){
    return(
        <div className="main w-full h-96 mt-24" id="mainpage">
            <div className="location flex flex-row items-center justify-center">
                <span className="h-4 w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </span>
                <span className="text-xl">Taichung, Taiwan</span>

            </div>
            <h1 className="text-3xl font-black font-sans flex justify-center mt-20">Hi, My name is Yiling Wei</h1>
            <h3 className="text-2xl font-sans flex justify-center mt-10">A Front End Developer</h3>
            <div className="iconlist flex justify-center mt-10">
               <a target="_blank" href="https://github.com/yilinng?tab=repositories">
                <img className="w-24 h-auto mr-10" src="GitHub-Emblem.png"/>
               </a>
                <a href="#contact">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                </a>
            </div>
        </div>
    )
}