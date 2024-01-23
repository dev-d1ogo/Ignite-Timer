import { useContext, useEffect } from "react"
import { CountContainer, Separator } from "../Home.styles"
import { differenceInSeconds } from 'date-fns'
import { CycleContext } from "../../../context/CyclesContext"

export const CountDonw = () => {
    const {activeCycle, markedCycleAsFinished, amountSecondsPassed, handleSeconds, activeCycleID} = useContext(CycleContext)

    const totalSeconds = activeCycle ? activeCycle.time * 60 : 0
    
    // Fazendo o timer diminuir
    useEffect(() => {
      let interval: number;
      if (activeCycle) {
        interval = setInterval(() => {
          const secondsDifference = differenceInSeconds(
            new Date(),
            new Date(activeCycle.startDate)
          );

          // Verificando se o ciclo acabou
          
          if (secondsDifference >= totalSeconds) {
            // Funcao que vem da home e seta o ciclo como finalizado
            markedCycleAsFinished()
            // Limpando o intervalo caso ele seja concluido
            handleSeconds(totalSeconds);
            clearInterval(interval);
          } else {
            handleSeconds(secondsDifference);
          }
        }, 1000);
      } 
      return () => {
        clearInterval(interval);
      };

    }, [activeCycle,
        totalSeconds,
        activeCycleID,
        handleSeconds,
        markedCycleAsFinished,]);

    // Checagem de minutos e segundos
    const currentSeconds =  activeCycle ? totalSeconds - amountSecondsPassed : 0
    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmount = currentSeconds % 60 

    // Note que minutos e segundos abaixo de 10 possuem apenas um caractere, por isso vamos usar o padStart para inserir caso tenha apenas um digito

    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padStart(2, '0')

    useEffect(() => {
      if (activeCycle) {
        document.title = `${minutes}:${seconds}`;
      }
    }, [minutes, seconds, activeCycle]);

    return (
        <CountContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <Separator>:</Separator>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </CountContainer>
    )
}
