import styled from "styled-components";

export const HistoryContainer = styled.main`
    flex: 1;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    
    h1{
        font-size: 1.5rem;
    }
`

export const HistoryList = styled.div`
    flex: 1;
    overflow: auto;
    margin-top:2rem;

    table{
        width: 100%; 
        // Faz com que as bordas sejam compartilhadas
        border-collapse: separate;
        border-spacing: 0 5px;
        min-width: 600px;

        th{
            background-color: ${({theme}) => theme.title === "default" ? theme["gray-600"] : theme["gray-200"]};
            padding: 1rem;
            text-align: left;
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child{
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
            }

            &:last-child{
                border-top-right-radius: 8px;
                padding-right: 1.5rem;
            }
        }


        td{
            background-color: ${({theme}) => theme.title === "default" ? theme["gray-700"] : theme["gray-100"]};
            border-top: 4px solid ${({theme}) => theme.title === "default" ? theme["gray-800"] : theme["background"]};
            padding: 1.2rem;
            text-align: left;
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child{
                padding-left: 1.5rem;
                width: 50%;
            }

            &:last-child{
                padding-right: 1.5rem;
            }
        }
    }
`

// Objeto que define a cor de cada status

const STATUS_COLOR = {
    finished: 'green',
    stop: 'red-500',
    progress: 'yellow-500'

} as const 

// Estou dizendo para o TS que sera literalmente esses 3 tipos
// Ou seja quando for finished nao e somente uma string e sim somente o green, o stop apenas o red-500 e etc

interface StatusProps{
    status: keyof typeof STATUS_COLOR; // Aqui estou dizendo que o status pode receber as chaves do meu objeto STATUS COLOR
}

export const Status = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before{
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: ${props => props.theme[STATUS_COLOR[props.status]]} 
    }
`