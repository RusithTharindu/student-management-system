import {Link} from 'react-router-dom'

const Header = () => {
    
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand text-rose-700" href="/">Home</a>
                <a className="p-2 bg-blue-500 border text-white rounded-lg" href="/add">Add Student</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                            <a href="">hello</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Create Student</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;