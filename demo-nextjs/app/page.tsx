"use client"

import { useState } from "react"

export default function Home() {

  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Herro world</h1>

      <button>{counter}</button>
    </div>
  )
}
