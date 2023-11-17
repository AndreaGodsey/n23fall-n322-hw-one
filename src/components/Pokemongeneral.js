import React from 'react';
import styles from '@/styles/Pokemon.general.module.css';

export default function Pokemongeneral(props) {
  
    return (
        <>
        
        <div className={styles.Pokemongeneral}>

        <div className={styles.Generaldescrip}>{props.descriptiontwo}</div>

        <div className={styles.Generalimage} style={{
            backgroundImage: `url(${props.imageURL})`}}>
        </div>

        </div>
        
        </>
    )
}