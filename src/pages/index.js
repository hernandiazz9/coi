import * as React from "react"
import styled from '@emotion/styled'
import {css} from '@emotion/react'
import ContenidoInicio from "../components/contenidoInicio"
import ImagenHome from "../components/imagenHome"
import Layout from "../components/layout"



  
 


const IndexPage = () => {

  // console.log(productos);

  return(

    <Layout>
      <ImagenHome/>
      <ContenidoInicio/>
      
  
    </Layout>  
  ) 
}

export default IndexPage
