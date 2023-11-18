import React from 'react';
import styles from '@/styles/footer.module.css';

export default function Footer(props) {
  
    return (
        <>
        
        <div className={styles.footer}>
            <div className={styles.copyrighttitle}>The Digital PokeDex</div>
            <div className={styles.copyright}>@Copyright 2023</div>
        </div>
        
        </>
    )
}