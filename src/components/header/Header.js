import Theme from '../theme/Theme';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <h1 className="title">TODO</h1>
            <Theme />
        </div>
    )
}

export default Header;