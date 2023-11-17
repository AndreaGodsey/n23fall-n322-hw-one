import React from 'react';
import styles from '@/styles/Pokemon.hero.module.css';

export default function Pokemonhero(props) {
  
    return (
        <>
        
        <div className={styles.calloutImage} style={{
            backgroundImage: `url(${props.imageURL})`}}>
            <h4 className={styles.titleCallout}>{props.header}</h4>
        </div>
        
        </>
    )
}