import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import {styled, Box } from '@mui/material'
import { getProducts } from '../../redux/actions/productActions'
import {useDispatch, useSelector} from 'react-redux';
import Slide from './Slide';
import MidSection from './MidSection'

const Component =  styled(Box)`
padding: 10px;
background: #f2f2f2;
`

const Home = () => {
  
  const {products} = useSelector(state=>state.getProducts);
  console.log(products);

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])


  return (
    <>
      <NavBar/>
      <Component>
      <Banner/>
      <Slide products={products} title='Deal of day' time={true}/>
      <MidSection/>
      <Slide products={products} title='Discount for you'time={false}/>
      <Slide products={products} title='Suggestion Item' time={false}/>
      <Slide products={products} title='Top Selection'time={false} />
      <Slide products={products} title='Tranding Offers' time={false}/>
      <Slide products={products} title='Top deal for Accessories' time={false}/>
      </Component>
    </>
  )
}

export default Home
