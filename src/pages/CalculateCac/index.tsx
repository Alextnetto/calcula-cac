import React, { useState } from 'react';

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

  const [cac, setCac] = useState(-1)

  function calculateCac() {
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
    
    setCac((ganho - gastos) / (gastos * 100))
    console.log(cac)
  }

  return (
    <div>
      <h1> Hello, Ayla here </h1>
      
      <form >
        <Input
          required
          name="gastos"
          label="gastos"
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
          label="ticketMedio"
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
          label="numeroContratos"
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
          label="taxaPrimeiroAluguel"
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
          label="taxaRecorrente"
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
          label="ltv"
          onChange={(e) => {
            setState({
              ...state,
              ltv: Number(e.target.value)
            })
          }}
        />
        <button type='button' onClick={calculateCac}>
          Calcular
        </button>
      </form>
      
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
  )
}

export default CalculateCac;