import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'

export default function Home() {
  return (
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
      <Head>
        <title>Instagram</title>
        <meta name="Instagram is a social media platform encouraging people to connect with each other." content="Made with a vision" />
        <link rel="icon" href="https://clipart.info/images/ccovers/1516920567instagram-png-logo-transparent.png" />
      </Head>

      <Modal />
      <Header />
      <Feed />


    </div>
  )
}
