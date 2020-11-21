import { graphql, useStaticQuery } from "gatsby"

const useInicio = () => {
  const resultado = useStaticQuery(
    graphql`
      query {
        allStrapiPaginas(filter: { nombre: { eq: "Inicio" } }) {
          nodes {
            id
            nombre
            contenido
            imagen {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 1900
                  quality: 100
                  webpQuality: 100
                  duotone: {
                    highlight: "#222222"
                    shadow: "#192550"
                    opacity: 30
                  }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )

  return resultado.allStrapiPaginas.nodes.map(inicio => ({
    nombre: inicio.nombre,
    contenido: inicio.contenido,
    imagen: inicio.imagen,
  }))
}

export default useInicio
