import React from 'react';
import { Icon,} from 'semantic-ui-react';
import styles from '@/styles/Icon.container.module.css';

export default function Iconcontainer(props) {
  
    return (
        <>
        <div className={styles.Iconcontainer}>
        <Icon><i className="facebook icon"></i></Icon>
        <Icon><i className="twitter square icon"></i></Icon>
        <Icon><i className="discord icon"></i></Icon>
        <Icon><i className="youtube square icon"></i></Icon>
        <Icon><i className="whatsapp square icon"></i></Icon>
        <Icon><i className="snapchat square icon"></i></Icon>
        </div>
        
        
        </>
    )
}