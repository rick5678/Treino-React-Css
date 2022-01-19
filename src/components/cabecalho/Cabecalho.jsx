import { React } from "react";

const Cabecalho = () => {
    return (
        <header className="">
            <ul className="nav nav-tabs justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Disabled</a>
                </li>
            </ul>
        </header>
    )
}

export default Cabecalho