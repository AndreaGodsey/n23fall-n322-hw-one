import React from 'react';
import styles from '@/styles/About.pokemon.module.css'

export default function Aboutpokemon(props) {
  
    return (
        <>
        <div className={styles.Aboutpokemon}>{props.descriptionone}</div>
        
        </>
    )
}