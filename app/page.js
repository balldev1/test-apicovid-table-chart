import Image from 'next/image'
import TableCovid from './components/TableCovid'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <TableCovid />
      <Footer />
    </div>
  )
}
