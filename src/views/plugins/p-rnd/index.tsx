import React, { useState } from "react";
import { Rnd } from 'react-rnd';
import './index.css'
import closeIcon from './close.png'

export default function Model({
  isopen,
  isclose,
  children
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [ifrmaeW, setIframeW] = useState(800)
  const [iframeH, setIframeH] = useState(600)
    
  if(!isopen) return null;
  
  return (
    <div className='dialog-box'>
      <Rnd
        default={{
          x: (document.body.offsetWidth - 800) / 2,
          y: (document.body.offsetHeight - 400) / 6,
          width: '800',
          height: '600',
        }}
        minWidth={300}
        minHeight={300}
        size={{
          width: ifrmaeW,
          height: iframeH,
        }}
        bounds="window"
        onDragStart={() => setIsDragging(true)}
        onDragStop={() => setIsDragging(false)}
        onResizeStart={() => setIsDragging(true)}
        onResizeStop={() => setIsDragging(false)}
        onClick={(e) => e.stopPropagation()}
        onResize={(e, direction, ref, delta, positon) => {
          console.log((e.x + 20), document.body.offsetWidth )
          if ((e.x + 20) > document.body.offsetWidth || (e.y + 20) > document.body.offsetHeight) {
            console.log(123)
            setIsDragging(false)
            setIframeW(ifrmaeW)
            setIframeH(iframeH)
            return false
          }
          setIframeW(ref.offsetWidth)
          setIframeH(ref.offsetHeight)
        }}
        // style={{ opacity: isDragging ? 0.8 : 1 }}
      >
          <div className='main'>
            <div className='title'>XX模块</div>

            <img 
              src={closeIcon} 
              alt="" 
              className="close"
              onClick={()=>{
                isclose()
              }}
            />

            <div>
              <iframe 
                src="http://kkfile170.com/onlinePreview?url=L3Byb2ZpbGUvc3ViamVjLzEwOS8xLzIwMjUvMTAvMTUvVkNUaVVvZkxVQ1oydVRmQThWUk5fMjAyNTEwMTUxMDUyNDZBMDAxLnBwdHg%3D" 
                frameBorder="0"
                style={{
                  width: ifrmaeW - 60,
                  height: iframeH - 100,
                }}
              ></iframe>
            </div>
            {/* <div>{children}</div> */}
          </div>
      </Rnd>
    </div>
  )
}
