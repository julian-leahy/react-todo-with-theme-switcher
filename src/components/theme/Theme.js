import { useState, useEffect } from 'react';
import './Theme.css';

const lightTheme = 'light';
const darkTheme = 'dark';
const body = document.body;

function Theme() {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || lightTheme);

    useEffect(() => {
        (theme === lightTheme || theme === darkTheme) ? body.classList.add(theme) : body.classList.add(lightTheme)
    })

    const toggleTheme = () => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            localStorage.setItem('theme', 'light');
            setTheme(lightTheme);
        } else {
            body.classList.replace(lightTheme, darkTheme);
            localStorage.setItem('theme', 'dark');
            setTheme(darkTheme);
        }
    }

    return (
        <button
            aria-label="toggle theme"
            className={`${theme === lightTheme ? 'light-theme' : 'dark-theme'} toggle-theme`}
            onClick={toggleTheme}>
            <span className="visually-hidden">Toggle Theme between light and dark mode</span>
        </button>
    )
}

export default Theme;