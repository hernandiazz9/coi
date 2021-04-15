const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {

  const resultado = await graphql(`
    query {
      allDatoCmsProducto {
        nodes {
          slug
        }
      }
    }
  `)

  if(resultado.errors){
      reporter.panic('No Hubo Resultados', resultado.errors)
  }
//   console.log(resultado.data.allDatoCmsProducto.nodes);
  const productos = resultado.data.allDatoCmsProducto.nodes;

  productos.forEach(producto => {
      actions.createPage({
          path: `/productos/${producto.slug}`,
          component: path.resolve('./src/components/producto.js'),
          context: {
              slug: producto.slug
          }
      })
      
  });

}
