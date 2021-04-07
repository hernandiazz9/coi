import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'

const ImagenHome = () => {

    const ImagenBackground = styled(BackgroundImage)`
        height: 600px;
        
    `;
    const ImageText = styled.div`
        background-image: linear-gradient(to top, rgba(34,49,63,.77),rgba(34,49,63,.77));
        color:#fff;
        height: 100%;
        display:flex;
        flex-direction:column;
        flex:1;
        align-items:center;
        justify-content:center;
        h1{
            font-size:3rem;
            margin:0;
            @media (min-width: 992px){
                font-size:4.8rem;
            }
        }
        p{
            font-size:1.8rem;
            @media (min-width: 992px){
                font-size:2.4rem;
            }
        }


        
    `;

    const {image} = useStaticQuery(graphql`
        query{
            image:file(relativePath:{eq:"instru-quirur.jpeg"}){
                sharp:childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    // console.log(image);

    return (
        <>
            <ImagenBackground tag='section' fadeIn='soft' fluid={image.sharp.fluid}  >
                <ImageText>
                    <h1>Bienvendio a Cirugia Osea Instrumental</h1>
                    <p>Tenemos Miles de Productos</p>
                </ImageText>
            
            </ImagenBackground>
        </>
    )
}

export default ImagenHome
