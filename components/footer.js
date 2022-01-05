export default function Footer(){
 
    return (
        <footer className="flex items-center justify-center w-full h-24 border-t">
        <span className="mr-10">&copy;{ new Date().getFullYear()} |  Yiling Wei </span>
          <img className="w-12 h-auto" src="nextjsicon.png"/>
          <img className="w-24 h-auto" src="tailwindicon.png"/>
      </footer>
    )
}