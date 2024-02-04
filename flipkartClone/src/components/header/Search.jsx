import styled from '@emotion/styled'
import { Box, InputBase, List, ListItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getProducts} from '../../redux/actions/productActions';
import {Link} from 'react-router-dom';

const SerchContainer= styled(Box)`
background: #fff;
width: 38%;
border-radious: 2px;
margin-left: 10px;
`;
const InputSerchBase= styled(InputBase)`
margin-left: 10px;
width: 100%;
`;

const ListWrapper=styled(List)`
position: absolute;
background: #ececec;;
color: black;
margin-top: 2px;
`

const Search = () => {


  const{ products } = useSelector(state=>state.getProducts);
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  const [text, setText]= useState('')

  const getText=(text)=>{
    setText(text);
  }

  return (
    <SerchContainer>
      <InputSerchBase
      placeholder='Serch for products, brands and more'
      onChange={(e)=>getText(e.target.value)}
      value={text}
      />
      {
        text && 
        <ListWrapper>
          {
            products.filter(product=> product.title.shortTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
              <ListItem>
                <Link
                to={`/product/${product.id}`}
                onClick={()=>setText('')}
                style={{textDecoration:'none', color: 'inherit'}}
                >
                {product.title.longTitle}
                </Link>
              </ListItem>
            ))
          }
        </ListWrapper>
      }
    </SerchContainer>
  )
}

export default Search
