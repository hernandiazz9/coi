import React from "react"
import Image from "gatsby-image"
// import { css } from "@emotion/react"
// import styled from "@emotion/styled"
import { Link } from "gatsby"
// import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';



const ProductoPreview = ({ productos }) => {

  const { contenido, imagen, titulo, slug } = productos
  

  return (
    
    <>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <p>h</p>
          </Grid>
          <Grid item xs={4}>
            <p>h</p>
          </Grid>
          <Grid item xs={4}>
            <p>h</p>
          </Grid>
        </Grid>
      </Grid>

      <div className="col s12 m6 l3  ">
        <div className="card large">
          <div className="card-image waves-effect waves-block waves-light">
            <p class="activator"> {imagen && <Image fluid={imagen.fluid} />}</p>
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {titulo}
              <i className="material-icons right">O</i>
            </span>
            <Link to={`${slug}`} class="waves-effect waves-light btn">
              Ver Producto
            </Link>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              {titulo}
              <i class="material-icons right">X</i>
            </span>
            <p>{contenido}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductoPreview
