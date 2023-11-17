import React from 'react';
import styles from '@/styles/Statistic.container.module.css';

export default function Statisticcontainer(props) {
  
    return (
        <>
        <div className={styles.Statisticcontainer}>
        <div className="ui statistics">
  <div className="statistic">
    <div className="value">
      1,021
    </div>
    <div className="label">
      Pokemon Descriptions
    </div>
  </div>
  <div className="statistic">
    <div className="value">
      800,200
    </div>
    <div className="label">
      Users Daily
    </div>
  </div>
  <div className="statistic">
    <div className="value">
      1,000
    </div>
    <div className="label">
      Creators
    </div>
  </div>
</div>
        </div>
        
        
        </>
    )
}