import React from "react"
import Layout from './layout'
import { graphql } from "gatsby"
import Image from 'gatsby-image'


export const query = graphql`
  query($slug: String!) {
    allDatoCmsProducto(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        categoria{
            categoria
        }
        queEs
        imagen {
          fluid(maxWidth: 1000) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const Porducto = ({ data: { allDatoCmsProducto: { nodes } }}) => {

    console.log(nodes);
    const { titulo, queEs, imagen, categoria } = nodes[0];

    return (
        <Layout>

            <h1>{titulo}</h1>
            {
              queEs&&<p>{queEs}</p>
            }
            {
              imagen&&<Image  fluid={imagen.fluid}/>
            }
            {
                categoria&&<p>{categoria.categoria}</p>
            }
            <p>categoria.categoria</p>
        </Layout>
    )
}

export default Porducto
