import React from "react";
import './index.css';

const Sala = () => {
    return (
        <>
            <div className="raio">
                <div className="parte-um"></div>
                <div className="parte-dois"></div>
                <div className="parte-tres">
                    <div className="canto-direito"></div>
                    <div className="canto-esquerdo"></div>
                </div>
            </div>
            <div className="sala">
                <div>
                    <span className="sala-front"></span>
                    <span className="sala-right" id="direita"></span>
                    <span className="sala-back"></span>
                    <span className="sala-baixo"></span>
                </div>
            </div>
            <div className="cubo">
                <div>
                    <span className="cubo-a"></span>
                    <span className="cubo-b"></span>
                    <span className="cubo-c"></span>
                    <span className="cubo-d"></span>
                </div>
            </div>
            <div className="container-pilar">
                <section className="topo-pilar"></section>
                <section className="pilar">
                    <section className="pilar-sombreado"></section>
                </section>
                <section className="bottom-pilar"></section>
            </div>
            <div className="menu-textos">
                <div className="linha-texto">
                    <p> Oi galera não sei o que por aqui</p>
                </div>
                <div className="linha-texto-a">
                    <p> Oi galera não sei o que por aqui</p>
                </div>

            </div>
        </>
    )
}

export default Sala;

