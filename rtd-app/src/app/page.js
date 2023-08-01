"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  const [pokeData, setPokeData] = useState(null); // Declare pokeData state variable

  useEffect(() => {
    async function getInfo() {
      try {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon/gengar')
        const jsonData = await data.json()
        console.log(jsonData)
        setPokeData(jsonData); // Update pokeData with the fetched data
      } catch (error) {
        console.error(error)
      }
    }
    getInfo()
  }, [])

  useEffect(() => {
    console.log("Hey my info are", pokeData)
  }, [pokeData])

  return (
    <main className={styles.main}>
      <h1>PokeApi Real Time Data App</h1>
      <h2>Indigo Wizard - MLH GHW: Data Week</h2>
      {/* Check if pokeData is not null before accessing its properties */}
      {pokeData ? (
        <>
          <h2>{pokeData.name}</h2>
          <img
            src={pokeData.sprites.front_default}
            alt={pokeData.name}
            width="200" // Set the desired width (e.g., 200px)
            height="200" // Set the desired height (e.g., 200px)
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  )
}
