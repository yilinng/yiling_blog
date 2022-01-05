export default function About(){
    return(
        <div className="about" id="about">
            <div className="w-auto md:w-4/5 h-4/5 mx-auto my-10 shadow-lg">
                <h1 className="m-auto font-bold text-2xl flex justify-center">about</h1>
                <p className="text-xl font-serif flex justify-center mt-6">Hi! I'm Yiling.</p>
                <p className="text-center indent-4 font-serif text-lg w-auto md:w-96 mx-auto my-10">
                    I'm a self-taught Front End Developer. In the beginning, I started watching youtube about how to create a blog,  
                    and follow steps to write one. Recently, I'm learning Ruby. To improve my skills, I'm do practice on 
                    <a className="text-blue-500 font-bold underline" href="https://exercism.org/"> exercism </a>
                     and try to make some projects. I will push myself to write article to share what I learn. 
                </p>
            </div>
        </div>
    )
}