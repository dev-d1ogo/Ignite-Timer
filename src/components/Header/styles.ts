import styled from "styled-components";


export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 2.5rem;
    }
    .imgMenu{
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center
    }
    nav{
        display: flex;
        gap: 0.5rem;
       
        a{
            width: 3rem;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;

            color: ${props => props.theme["text"]};
            /* Criando borda de 3 px para o hover, fazendo com que nosso icone fique ao centro sempre */

            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;

            &:hover{
                border-bottom: 3px solid ${props => props.theme["green"]};
            }

            &.active{
                color: ${props => props.theme["green"]};
            }
        }
    }

    svg, img{
        animation: fadeInAnimation ease 2s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        opacity: 0;
	    transition: opacity 5s;
        cursor: pointer;
    }

    @keyframes fadeInAnimation {
    0% {
        opacity: 0.3;
    }
    100% {
        opacity: 1;
     }
}
`