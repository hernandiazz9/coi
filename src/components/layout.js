import * as React from 'react'
import Helmet from 'react-helmet'
import { css, Global } from '@emotion/react'
import Header from './header'

const layout = ({children}) => {
    return ( 
        <>
            <Global
                styles={css`
                    html{
                        font-size:62.5%;
                        box-sizing:border-box;
                    }
                    *, *:before, *:after {
                        box-sizing:inherit;
                    }
                    body{
                        font-size:16px;
                        font-size:1.6rem;
                        line-height:1.5;
                        font-family: 'Heebo', sans-ser
                    }
                    h1, h2, h3{
                        margin:0;
                        line-height:1.5;
                    }
                    h1{
                        font-family: 'Heebo', sans-serif;
                        
                    }
                    ul{
                        list-style:none;
                        margin:0;
                        padding:0;
                        
                    }
                `}
            />
            <Helmet>
                <title>COI</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;400&family=Roboto:wght@100;400&display=swap" />
            </Helmet>
            <Header/>
            {children}
            
        </>
    )
}

export default layout
