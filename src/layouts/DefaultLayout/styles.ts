import styled from "styled-components";

export const LayoutContainer =  styled.div`
    max-width: 74rem;
    /* Vai ocupar 100% da tela menos 160 que tem de margin em cima e em baixo */
    height: calc(100vh - 10rem);
    margin: 5rem auto;
    padding: 2.5rem;

    background-color:${({theme}) => theme.default ? theme["gray-800"] : theme.background} ;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    overflow: hidden;
`;