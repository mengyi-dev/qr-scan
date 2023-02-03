import QrScanner from 'qr-scanner'; 
import { useEffect, useState } from 'react';
function Scan() {
    const [scanResult, setScanResult] = useState('')
    useEffect(() => {
        const qrScanner = new QrScanner(
            document.getElementById('video') as HTMLVideoElement,
            result => {
                // @ts-ignore
                setScanResult(result)
                console.log('decoded qr code:', result)
                qrScanner.stop()
                // @ts-ignore
                window.open(result,'newwindow','width=1000,height=800')
            },
            { highlightScanRegion: true },
        );
        qrScanner.start();
      }, [])
    
    return (
      <div className='mx-auto w-fit p-2'>
        <h1 className='text-3xl text-orange-600 font-extrabold'>Scan QR</h1>
        {scanResult!=='' && <h1 className='text-green-600'>{scanResult} ✅✅✅</h1>}
        <video id='video' className='w-[380px] h-[380px] border-2 border-dashed border-yellow-600 mt-10 object-contain'></video>
      </div>
    )
  }
  
  export default Scan;