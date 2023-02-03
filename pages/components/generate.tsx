import { useState } from "react";
import QRCode from "react-qr-code";
function Generate() {
    const [qrCodeValue, setQrCodeValue] = useState("");
    
    return (
      <div className="w-fit mx-auto relatived h-screen relative p-2">
        <h1 className='text-3xl text-orange-600 font-extrabold'>Generate QR</h1>
        <div className="w-[380px] h-[380px] mx-auto mt-5 border-2 border-dashed border-yellow-600 mt-10">
            {qrCodeValue != "" && (
            <QRCode value={qrCodeValue} className="w-full h-full" />
            )}
        </div>
      <input className="m-2 p-2 absolute bottom-0 mb-[20%] w-[96%]"
        placeholder="Please, input text here"
        onChange={(e) => {
          setQrCodeValue(e.target.value);
        }}
      />
      </div>
    )
  }
  
  export default Generate