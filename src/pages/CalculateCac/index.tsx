import React, { useState, FormEvent } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';

import './styles.css'

function CalculateCac(){
  const [state, setState] = useState({
    gastos: 0,
    ticketMedio: 0,
    numeroContratos: 0,
    taxaPrimeiroAluguel: 0,
    taxaRecorrente: 0,
    ltv: 0
  })

  const [cac, setCac] = useState(NaN)

  function calculateCac(e: FormEvent) {
    e.preventDefault()
    let {
      gastos,
      ticketMedio,
      numeroContratos,
      taxaPrimeiroAluguel,
      taxaRecorrente,
      ltv
    } = state

    let ganho = ((ticketMedio * taxaPrimeiroAluguel) + 
      (ticketMedio * taxaRecorrente * (ltv - 1))) * numeroContratos
    
    let cacValue = (ganho - gastos) / (gastos * 100)

    if (!isNaN(cacValue))
      setCac(cacValue)
  }

  return (
    <div id='page-calculate-cac'>
      <Header />
      <main>
        <h1> Calcule seu CAC e ROI em alguns segundos </h1>
        
        <form >
          <Input
            required
            name="gastos"
            label="Gastos"
            onChange={(e) => {
              setState({
                ...state,
                gastos: Number(e.target.value)
              })
            }}
          />
          <Input
            required
            name="ticketMedio"
            label="Ticket médio"
            onChange={(e) => {
              setState({
                ...state,
                ticketMedio: Number(e.target.value)
              })
            }}
          />
          <Input
            required
            name="numeroContratos"
            label="Número de contratos"
            onChange={(e) => {
              setState({
                ...state,
                numeroContratos: Number(e.target.value)
              })
            }}
          />
          <Input
            required
            name="taxaPrimeiroAluguel"
            label="Taxa do primeiro aluguel"
            onChange={(e) => {
              setState({
                ...state,
                taxaPrimeiroAluguel: Number(e.target.value)
              })
            }}
          />
          <Input
            required
            name="taxaRecorrente"
            label="Taxa recorrente do aluguel"
            onChange={(e) => {
              setState({
                ...state,
                taxaRecorrente: Number(e.target.value)
              })
            }}
          />
          <Input
            required
            name="ltv"
            label="LTV"
            onChange={(e) => {
              setState({
                ...state,
                ltv: Number(e.target.value)
              })
            }}
          />
          <button type='button' className="button-calculate" onClick={calculateCac}>
            Calcular
          </button>
        </form>
        { !isNaN(cac) &&
          <div className='result'>
            <h2>
              ROI: {
                cac
              }
            </h2>
            <h2>
              CAC: {
                state.gastos / state.numeroContratos
              }
            </h2>
          </div>
        }
      </main>
    </div>
  )
}

export default CalculateCac;