import loadable from '@loadable/component'
import { useState } from 'react'
const Projects = loadable(() => import('./projects'))

export default function projectlist(){

    const [clickbtn, setclickbtn] = useState(false)

    return(
        <div className="projectList" id="projectList">
            <div className="w-full h-full container mx-auto">
                <h1 className="text-2xl font-bold flex justify-center">Projects</h1>
                <div className="projectlist flex flex-col">
                    <div className="project flex flex-col md:flex-row border-0 md:border-2 border-gray-200 h-auto md:h-80 w-5/6 md:w-3/4 my-4 mx-auto">
                        <a target="_blank" href="https://tv-react.vercel.app/" className="basis-1/2">
                            <img className="w-auto md:w-96 h-full cursor-pointer" src="./tvmaze.png"/>
                        </a>
                        <div className="basis-1/2 flex flex-col m-auto w-auto">
                            <h3 className="text-2xl md:text-3xl font-mono m-auto">Tvmaze</h3>
                            <span className="text-lg text-center w-64 md:w-auto mx-auto md:mx-5 mt-5">Tvmaze use api from 
                            <a className="font-bold text-blue-500" href="https://www.tvmaze.com/api"> tvMaze </a>
                            , user can browse tv show imformation.</span>             
                            <div className="w-full flex flex-row mt-5 mx-auto md:mx-5">
                                <span className="font-bold text-lg mr-5">Tech stacks: </span> 
                                <span className="text-lg">react</span>
                            </div>
                            <button className="bg-sky-400 text-white font-bold w-36 h-12 border-2 mx-auto mt-5 mb-5">
                                <a target="_blank" href="https://github.com/yilinng/tv_react">
                                show code
                                </a>
                            </button>             
                        </div>
                    </div>

                <div className="project flex flex-col md:flex-row border-0 md:border-2 border-gray-200 h-auto md:h-80 w-5/6 md:w-3/4 my-4 mx-auto">
                        <a target="_blank" href="https://rails-react-invoicing-app.herokuapp.com/" className="basis-1/2">
                        <img className="w-auto md:w-96 h-full cursor-pointer" src="./invoice.png"/>
                        </a>
                        <div className="basis-1/2 flex flex-col m-auto w-auto">
                            <h3 className="text-2xl md:text-3xl font-mono m-auto">Invoice app</h3>
                            <span className="text-lg text-center w-64 md:w-auto mx-auto md:mx-2 mt-5">Invoice app help you manage your finances.</span>
                            <div className="w-full flex flex-wrap mt-5 mx-auto md:mx-2">
                                <span className="font-bold text-lg mr-3">Tech stacks: </span>
                                <span className="text-lg mr-3">react</span> 
                                <span className="text-lg mr-3">ruby on rails</span>
                                <span className="text-lg"> PostgreSQL</span>
                            </div>
                            <button className="bg-sky-400 text-white font-bold w-36 h-12 border-2 mx-auto mt-5 mb-5">
                                <a target="_blank" href="https://github.com/yilinng/rails_react_invoicing_app">
                                show code
                                </a>
                            </button>              
                        </div>
                    </div>
                    <button onClick={() => setclickbtn(true)} 
                        className={clickbtn ? "hidden": "block bg-blue-500 p-2 border-2 border-blue-300 text-white font-mono font-medium w-48 h-14 mx-auto"}>See more projects</button>
                    {clickbtn && <Projects/>}
                </div>
            </div>
        </div>
    )
}