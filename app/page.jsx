'use client'
import { useState } from 'react'

export default function Home() {
  const [dni, setDni] = useState('')
  const [tipo, setTipo] = useState('alumno')
  const [mensaje, setMensaje] = useState('')

  function ingresar() {
    const hoy = new Date().toDateString()
    const registros = JSON.parse(localStorage.getItem('registros') || '{}')

    if (registros[dni] === hoy) {
      setMensaje('⚠️ Ya usaste tu vianda con descuento hoy')
      return
    }

    const horaLimite = 11
    const horaActual = new Date().getHours()
    if (horaActual >= horaLimite) {
      setMensaje('⏰ Pedidos cerrados, queda para mañana')
      return
    }

    registros[dni] = hoy
    localStorage.setItem('registros', JSON.stringify(registros))

    const precio = tipo === 'alumno' ? 3000 : 3500
    setMensaje(`✅ Pedido confirmado – Precio $${precio}`)
  }

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ff8a00, #8e2de2)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white'
    }}>
      <div style={{
        background: 'rgba(0,0,0,0.3)',
        padding: 30,
        borderRadius: 16,
        width: 320
      }}>
        <h1 style={{ textAlign: 'center' }}>Buffet MB</h1>

        <input
          placeholder="DNI"
          value={dni}
          onChange={e => setDni(e.target.value)}
          style={{ width: '100%', padding: 10, marginBottom: 10 }}
        />

        <select
          value={tipo}
          onChange={e => setTipo(e.target.value)}
          style={{ width: '100%', padding: 10, marginBottom: 20 }}
        >
          <option value="alumno">Alumno</option>
          <option value="profesor">Profesor</option>
        </select>

        <button
          onClick={ingresar}
          style={{
            width: '100%',
            padding: 12,
            borderRadius: 8,
            border: 'none',
            fontSize: 16
          }}
        >
          Pedir vianda
        </button>

        <p style={{ marginTop: 15, textAlign: 'center' }}>{mensaje}</p>
      </div>
    </main>
  )
}
