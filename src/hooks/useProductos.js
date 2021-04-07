import { graphql, useStaticQuery } from "gatsby"


const useProductos = () => {

  const data = useStaticQuery(graphql`
    query {
      allDatoCmsProducto {
        nodes {
          titulo
          id
          slug
          queEs
          imagen {
            fluid(maxWidth: 1000) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
    return data.allDatoCmsProducto.nodes.map(habitacion=>({
        titulo: habitacion.titulo,
        id: habitacion.id,
        slug: habitacion.slug,
        imagen: habitacion.imagen,
        contenido: habitacion.queEs
    }))
  
}

export default useProductos
