import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Search from '../ui/Search';
import Navigation from './Navigation';
import Button from '../ui/Button';

const ContainHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-around;
    }
`;

const Logo = styled.p`
    color: var(--naranja);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
`

const Header = () => {

    const user = false;

    return ( 
        <header
            css={css`
                border-bottom: 2px solid var(--gris3);
                padding: 1rem 0;
            `}
        >
            <ContainHeader>
                <div
                    css={css`
                       display: flex;
                       align-items: center; 
                    `}
                >
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>

                    <Search />

                    <Navigation />
                </div>
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    { user ? (
                        <>
                            <p
                                css={css`
                                    margin-right: 2rem;
                                `}
                            >Hello: Freddy</p>

                            <Button bgColor="true">Sign Off</Button>
                        </>

                    ) : (
                        <>
                             <Link href="/">
                                <Button bgColor="true">Login</Button>
                            </Link>
                            <Link href="/">
                                <Button>Create Account</Button>
                            </Link>
                        </>

                    )}
                </div>
            </ContainHeader>
        </header>
     );
}
 
export default Header;