import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;

    form{
        flex-direction: column;
        display: flex;
        align-items: center;
        gap: 3.5rem;
        font-weight: bold;
    }
`
export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;

    color: ${({theme}) => theme.title === "default" ? theme["gray-100"] : theme["gray-800"]};
`
export const CountContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height:8rem;

    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({theme}) => theme.title === "default" ? theme["gray-100"] : theme["gray-800"]};

    span{
        background-color: ${({theme}) => theme.title === "default" ? theme["gray-700"] : theme["gray-100"]};
        padding: 2rem 1rem;
        border-radius: 8px;
    }
`

export const Separator = styled.div`
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 4rem;
    color: ${({theme}) => theme.green};

`
export const BaseInput = styled.input`
    background: transparent;
    border: 0;
    border-top: 3px solid transparent;
    border-bottom: 3px solid ${({theme}) => theme.title === "default" ? theme["gray-500"] : theme["gray-400"]};
    height: 2.5rem;
    font-weight: bold;
    display: flex;
    
    
    padding: 0 0.5rem;
    color: ${({theme}) => theme.title === "default" ? theme["gray-100"] : theme["gray-800"]};

    &::placeholder{
        color: ${({theme}) => theme["gray-500"]};
    }

    &:focus{
        box-shadow: none;
        border-color: ${({theme}) => theme["green"]};
        border-top: 3px solid transparent;
    }
    &:disabled:hover{
        cursor: not-allowed;
    }

`

export const TaskInput = styled(BaseInput)`
    flex: 1;
`

export const TimeInput = styled(BaseInput)`
    width: 4rem;
    --webkit-appearance: none;
    text-align:center;
`

export const CountButton = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display:flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    
    font-weight: bold;
    cursor: pointer;

    background-color: ${({theme}) => theme["green"]};
    color: ${({theme}) => theme["gray-100"]};
    transition: background-color 0.3s;

    &:not(:disabled):hover{
        background-color: ${({theme}) => theme["green-dark"]};
    }

    &:disabled{
        opacity: 70%;
        cursor: not-allowed;
    }
`

export const StopCountButton = styled(CountButton)`
    background-color: ${({theme}) => theme["red-500"]};
    color: ${({theme}) => theme["gray-100"]};
    transition: background-color 0.3s;

    &:not(:disabled):hover{
        background-color: ${({theme}) => theme["red-700"]};
    }
`
export const DataList = styled.datalist`
    background-color: red;
    option{
        color: red
    }
`