import React from 'react'

function ImageProduct({img}) {
  return <img src={`/Assets/${img}`} alt="Imagem do produto" width={240} height={240}/>
 }

export default ImageProduct