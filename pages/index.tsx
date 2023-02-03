import { Inter } from '@next/font/google'
import Generate from './components/generate'
import Scan from './components/scan'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faQrcode } from '@fortawesome/free-solid-svg-icons'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isOpanCamera, setisOpanCamera] = useState(true)
  return (
    <div className='max-w-2xl bg-slate-200 mx-auto min-h-screen'>
      {isOpanCamera ?
       <Scan /> :
        <Generate />
      }
      <div className='flex gap-5 bg-slate-500 w-full p-1 justify-center absolute bottom-0 left-0'>
        <div className={`cursor-pointer text-white hover:bg-orange-300 p-1 rounded-lg ${isOpanCamera && 'bg-orange-600'}`} onClick={()=>setisOpanCamera(!isOpanCamera)}>
          <FontAwesomeIcon icon={faCamera} className='w-10 h-10 '/>
        </div> 
        <div className={`cursor-pointer text-white hover:bg-orange-300 p-1 rounded-lg ${!isOpanCamera && 'bg-orange-600'}`} onClick={()=>setisOpanCamera(!isOpanCamera)}>
          <FontAwesomeIcon icon={faQrcode} className='w-10 h-10' />
        </div>
      </div>
    </div>
  )
}
