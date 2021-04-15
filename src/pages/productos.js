import React from "react"
import useProductos from "../hooks/useProductos"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import { css } from "@emotion/react"
import ProductoPreview from "../components/ProductoPreview"

const ListadoProducto = styled.ul`
  max-width: 800px;
  width: 95%;
  margin: 4rem auto 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }
`

const Productos = () => {
  const productos = useProductos()

  return (
    <Layout>
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      > Nuestros Productos </h2>
      <div className="row container">
            {productos.map(productos => (
              <ProductoPreview key={productos.id} productos={productos} />
            ))}
          </div>
    </Layout>
  )
}

export default Productos
