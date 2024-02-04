import { Box } from '@mui/material'
import React from 'react'
import { imageURL } from '../../constants/data'


const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (
    <>
    <Box style={{display:'flex', width:'33%', marginTop: 10}}>
      {
        imageURL.map(imageBanner=>(
            <img src={imageBanner} alt="imageBanner" style={{width: '100%'}} />
        ))
      }
    </Box>
    <img src={url} alt="add" style={{width: '100%', marginTop: 20}} />
    </>
  )
}



export default MidSection
