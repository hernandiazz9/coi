import * as React from "react"
import styled from '@emotion/styled'
import {css} from '@emotion/react'
import ContenidoInicio from "../components/contenidoInicio"
import ImagenHome from "../components/imagenHome"
import useProductos from '../hooks/useProductos'

import Layout from "../components/layout"
import ProductoPreview from "../components/ProductoPreview"


const ListadoProducto = styled.ul`
  max-width: 800px;
  width:95%;
  margin: 4rem auto 0 auto;
  
  @media (min-width:768px){
    display:grid;
    grid-template-columns: 1fr 1fr  ;
    column-gap:3rem;
  }
`


const IndexPage = () => {

  const productos = useProductos();
  // console.log(productos);

  return(

    <Layout>
      <ImagenHome/>
      <ContenidoInicio/>
      <h2
        css={css`
          text-align:center;
          margin-top:5rem;
          font-size:3rem;
        `}
      >Nuestros Productos</h2>
      <ListadoProducto>
        {productos.map(productos=>(
          <ProductoPreview
            key={productos.id}
            productos={productos}
          />
        ))}
      </ListadoProducto>
  
    </Layout>  
  ) 
}

export default IndexPage
