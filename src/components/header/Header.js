import './Header.css';

function Header() {
    return (
        <div className="header">
            <h1 className="title">TODO</h1>
            <div className="theme-switcher">
                <button>ST</button>
            </div>
        </div>
    )
}

export default Header;