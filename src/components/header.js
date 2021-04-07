import * as React from 'react'
import { css } from '@emotion/react'
import Navegacion from './nav'

const header = () => {
    return (
        <header
            css={css`
                background-color:#222;
                padding:.2rem;
            `}
        >
            <div
                css={css`
                    max-width:1000px;
                    margin:0 auto;
                    @media (min-width:768px){
                        display:flex;
                        align-items: center;
                        justify-content:space-between;
                    } 
                `}
            >
                <h1
                    css={css`
                        color:#fff;
                        text-align:center;
                    `}
                >C O I</h1>
                <Navegacion/>
            </div>
        </header>
    )
}

export default header
