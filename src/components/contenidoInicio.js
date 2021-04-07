import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import {css} from '@emotion/react'

const TextoInicio = styled.div`
    padding-top:4rem;
    max-width:1000px;
    width: 95%;
    margin:0 auto;
    @media (min-width: 768px){
        display:grid;
        grid-template-columns: 1.5fr 1fr;
        column-gap:2rem;
    } 
    p{
        line-height:3rem;
    }
`;

const ContenidoInicio = () => {

    const info = useStaticQuery(graphql`
        query{
            allDatoCmsPagina( filter: { slug: { eq: "inicio" }}){
                nodes{
                    titulo
                    contenido
                    imagen{
                        fluid{
                            ...GatsbyDatoCmsFluid 
                        }
                    }
                }
            }
        }
    `)
    console.log(info.allDatoCmsPagina.nodes[0]);
        
    const { titulo, contenido, imagen } = info.allDatoCmsPagina.nodes[0]

    return (
        <>
            <h2
                css={css`
                    text-align:center;
                    font-size:4rem;
                    margin-top:4rem;
                    /* margin-bottom:4rem; */
                `}
            >{titulo}</h2>
            <TextoInicio>
                <p>{contenido}</p>
                <Image  fluid={imagen.fluid}/>

            </TextoInicio>
            
        </>
    )
}

export default ContenidoInicio
