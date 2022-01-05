import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Main from '../components/main'
import Projectlist from '../components/projectList'
import About from '../components/about'
import Contacts from '../components/contact'

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Yiling's blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className="container mx-auto px-4">
        <Main/>
        <Projectlist/>
        <About/>
        <Contacts/>
      </div>
      <Footer/>
    </div>
  )
}
