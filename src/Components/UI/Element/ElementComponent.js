import React from 'react';
import { CONSTANTS } from '../../../constants';
import styles from './Element.module.css';

function Input(params) {
    let input = null;
    switch(params.etype) {
        case CONSTANTS.FORM_TYPE.INPUT :
            input = <div className={styles.Element}><input className={styles.Estyle} {...params.eattributes} value={params.value} onChange={params.elementChanged}/></div>
            break;
        case CONSTANTS.FORM_TYPE.TEXTAREA :
            input = <div className={styles.Element}><textarea className={styles.Edescription} {...params.eattributes} value={params.value} onChange={params.elementChanged}/></div>
            break;
        case CONSTANTS.FORM_TYPE.SELECT :
            let optns = null;
            if(params.eattributes.options && params.eattributes.options.length) {
                optns = params.eattributes.options.map(option => {
                    return <option value={option.value} key={option.value}>{option.value}</option>
                })
            }
            input = <div className={styles.Element}>
                        <select className={styles.Estyle} {...params.elementattributes} value={params.value} onChange={params.elementChanged}>
                            {optns}
                        </select>
                    </div>;
            break;
        default :
            input = <div className={styles.Element}><input className={styles.Estyle} {...params.elementattributes} value={params.value} onChange={params.elementChanged}/></div>;
    }
    return(
        input 
    )
}

export default Input;