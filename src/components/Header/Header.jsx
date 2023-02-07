import React, {useContext} from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import styles from './Header.module.css';

export default function Header({filter, setFilter, filters}) {
    const {darkMode, makeDarkMode} = useContext(DarkModeContext);

    return (
        <header className={styles.header}>
            <ul className={styles.filters}>
                <button 
                className={styles.toggle}
                onClick={makeDarkMode}>{darkMode ? '🌞' : '🌙'}</button>
                {filters.map((value, index) => 
                <li key={index}>
                    <button 
                    className={`${styles.filter} ${filter === value && styles.selected}`} 
                    onClick={() => setFilter(value)}>{value}</button>
                </li>)}
            </ul>
        </header>
    );
}

