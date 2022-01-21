import React from "react";
import './index.css';

const Home = () => {

    return (
        <main className="container-principal">
            <div className="parte-escura"></div>
            <h2 id="titulo">Two dors</h2>
            <h1 id="titulo-maior">Cinema Club</h1>
            <div className="cortinas-esq" id="cortinas-esq"></div>
            <div className="cortinas-dir" id="cortinas-dir"></div>            
            <div className="tela-cinema" id="cinema">
                <div className="inputs">
                    <div className="container-input">
                        <i className="bi bi-person-circle icon"></i>
                        <input type="text" id="usuario"></input>
                    </div>
                    <div className="container-input">
                        <i className="bi bi-unlock-fill icon"></i>
                        <input type="text" id="senha"></input>
                    </div>
                </div>
                <div className="botoes">
                    <div>
                        <button className="botao-cinema-play">
                            <i className="bi bi-play-circle-fill icon-btn"></i>
                            Conectar
                        </button>
                    </div>
                    <div>
                        <button className="botao-cinema-pause">
                            <i className="bi bi-pause-circle-fill icon-btn"></i>
                            Criar Conta
                        </button>
                    </div>
                </div>
            </div>
            <div className="luz-escura"></div>
            <div className="cadeiras" ></div>
        </main>
    )
}

export default Home;