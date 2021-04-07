import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    allDatoCmsProducto(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
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

    const { titulo, queEs, imagen } = nodes[0];

    return (
        <>
            <h1>{titulo}</h1>
            <p>{queEs}</p>
        </>
    )
}

export default Porducto
