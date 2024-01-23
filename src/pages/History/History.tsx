import { useContext } from "react"
import { HistoryContainer, HistoryList, Status } from "./History.styles"
import { CycleContext } from "../../context/CyclesContext"
import {formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const History = () => {
  const {cycles} = useContext(CycleContext)
  return (
    <HistoryContainer>
      <h1>Meu historico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefas</th>
              <th>Duracao</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map(ciclo =>{
              return(
                <tr key={ciclo.id}>
                  <td>{ciclo.task}</td>
                  <td>{ciclo.time} minutos</td>
                  <td>{formatDistanceToNow(ciclo.startDate, {includeSeconds: true, addSuffix: true, locale: ptBR})}</td>
                  <td>
                    {ciclo.finishedDate && <Status status="finished">Finalizado</Status>}
                    {ciclo.interruptedDate && <Status status="stop">Interrompido</Status>}
                    {(!ciclo.finishedDate && !ciclo.interruptedDate) && <Status status="progress">Em Andamento</Status>}
                  </td>
                </tr>
              )
            })}
            
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
