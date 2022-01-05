
export default function Projects(){
    return(
      <div className="projectlist flex flex-col">
        <div className="project flex flex-col md:flex-row border-0 md:border-2 border-gray-200 h-auto md:h-80 w-5/6 md:w-3/4 my-4  mx-auto">
            <a target="_blank" href="https://vue-ruby-murex.vercel.app/" className="basis-1/2">
                <img className="w-auto md:w-96 h-full cursor-pointer" src="./vueruby.png"/>
            </a>
            <div className="basis-1/2 flex flex-col m-auto w-auto md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-mono m-auto">vue rails blog</h3>
                <span className="text-lg text-center w-64 md:w-auto mx-auto md:mx-5 mt-5">App use vue3 and ruby on rails, you can keep track of wonderful things anywhere anytime.</span>
                <div className="w-full flex flex-wrap mt-5">
                  <span className="font-bold text-lg mr-3">Tech stacks: </span> 
                  <span className="text-lg mr-3">vue</span>
                  <span className="text-lg mr-3">ruby on rails</span>
                  <span className="text-lg"> PostgreSQL</span>
                </div>
                <div className="flex justify-evenly mb-5">
                <button className="bg-sky-400 text-white font-bold w-36 h-12 border-2 mx-auto mt-5">
                  <a target="_blank" href="https://github.com/yilinng/vue-ruby">
                    show frontend code
                  </a>
                </button>
                <button className="bg-sky-700 text-white font-bold w-36 h-12 border-2 mx-auto mt-5">
                  <a target="_blank" href="https://github.com/yilinng/ruby-on-rails-api">
                    show backend code
                  </a>
                </button>
                </div>
            </div>
        </div>
        <div className="project flex flex-col md:flex-row border-0 md:border-2 border-gray-200 h-auto md:h-80 w-5/6 md:w-3/4 my-4  mx-auto">
            <a target="_blank" href="https://node-client-eight.vercel.app/login" className="basis-1/2">
            <img className="w-auto md:w-96 h-full cursor-pointer" src="./reactnode.png"/>
            </a>
            <div className="basis-1/2 flex flex-col m-auto w-auto md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-mono text-center w-auto">react note app</h3>
                <span className="text-lg text-center w-64 md:w-auto mx-auto md:mx-5 mt-5">this app is a simple note app, you can keep track of wonderful things anywhere anytime.</span>
                <div className="w-full flex flex-wrap mt-5">
                  <span className="font-bold text-lg mr-3">Tech stacks: </span> 
                  <span className="text-lg mr-3">react</span>
                  <span className="text-lg mr-3">express</span>
                  <span className="text-lg">mongodb atlas</span>
                </div>
                <div className="flex justify-evenly mb-5">
                <button className="bg-sky-400 text-white font-bold w-36 h-12 border-2 mx-auto mt-5">
                  <a target="_blank" href="https://github.com/yilinng/node--client">
                    show frontend code
                  </a>
                </button>
                <button className="bg-sky-700 text-white font-bold w-36 h-12 border-2 mx-auto mt-5">
                  <a target="_blank" href="https://github.com/yilinng/node-express-api">
                    show backend code
                  </a>
                </button>
                </div>
            </div>
        </div>
        <div className="project flex flex-col md:flex-row border-0 md:border-2 border-gray-200 h-auto md:h-80 w-5/6 md:w-3/4 my-4  mx-auto">
            <a target="_blank" href="https://pizza-react-yilinng.vercel.app/" className="basis-1/2">
              <img className="w-auto md:w-96 h-full cursor-pointer" src="./reactpizza.png"/>
            </a>
            <div className="basis-1/2 flex flex-col m-auto w-auto md:w-1/2 my-5">
              <h3 className="text-2xl md:text-3xl font-mono text-center w-auto">react order app</h3>
              <span className="text-lg text-center w-64 md:w-auto mx-auto md:mx-5 mt-5">this is a simple order app.</span>             
              <div className="w-full flex flex-wrap mt-5 mx-auto md:mx-5">
                <span className="font-bold text-lg mr-5">Tech stacks: </span> 
                <span className="text-lg">react</span>
              </div>
              <button className="bg-sky-400 text-white font-bold w-36 h-12 border-2 mx-auto mt-5 mb-5">
                <a target="_blank" href="https://github.com/yilinng/pizza_React">
                  show code
                </a>
              </button>    
              
            </div>
        </div>
        <div className="project flex flex-col md:flex-row border-0 md:border-2 border-gray-200 h-auto md:h-80 w-5/6 md:w-3/4 my-4 mx-auto">
            <a target="_blank" href="https://order-pizza.vercel.app/" className="basis-1/2">
              <img className="w-auto md:w-96 h-full cursor-pointer" src="./jspizza.png"/>
            </a>
            <div className="basis-1/2 flex flex-col m-auto w-auto md:w-1/2 my-5">
              <h3 className="text-2xl md:text-3xl font-mono text-center w-auto">javascript order app</h3>
              <span className="text-lg text-center w-64 md:w-auto mx-auto md:mx-5 mt-5">this is a simple order app.</span>             
              <div className="w-full flex flex-wrap mt-5 mx-auto md:mx-5">
                <span className="font-bold text-lg mr-3">Tech stacks: </span> 
                <span className="text-lg">Javascript</span>
              </div>
              <button className="bg-sky-400 text-white font-bold w-36 h-12 border-2 mx-auto mt-5 mb-5">
                <a target="_blank" href="https://github.com/yilinng/order-Pizza">
                  show code
                </a>
              </button>   
            </div>
        </div>
        <div className="project flex flex-col md:flex-row border-0 md:border-2 border-gray-200 h-auto md:h-80 w-5/6 md:w-3/4 my-4  mx-auto">
            <a target="_blank" href="https://paper-scissors-rock-game-nine.vercel.app/" className="basis-1/2">
              <img className="w-auto md:w-96 h-full cursor-pointer" src="./jspapper.png"/>
            </a>
            <div className="basis-1/2 flex flex-col m-auto w-auto md:w-1/2 my-5">
              <h3 className="text-2xl md:text-3xl font-mono text-center w-auto">javascript paper scissors rock game</h3>
              <span className="text-lg text-center w-64 md:w-auto mx-auto md:mx-5 mt-5">this is javascript paper scissors rock game.</span>             
              <div className="w-full flex flex-wrap mt-5 mx-auto md:mx-5">
                <span className="font-bold text-lg mr-3">Tech stacks: </span> 
                <span className="text-lg">Javascript</span>
              </div>
              <button className="bg-sky-400 text-white font-bold w-36 h-12 border-2 mx-auto mt-5 mb-5">
                <a target="_blank" href="https://github.com/yilinng/paper-scissors-rock-game">
                  show code
                </a>
              </button>       
            </div>
        </div>
    </div>
    )
}