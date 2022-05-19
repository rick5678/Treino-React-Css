import gambiarra from 'gambiarra';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Tmdb from 'Tmdb';
import './index.css';

const Horarios = () => {
    const { id } = useParams();

    const [movieList, setMovieList] = useState([]);
    const [render, setRender] = useState([]);

    useEffect(() => {
        const Filmes = async () => {

            let list = await Tmdb.getHomeList();
            setMovieList(list);
        }
        Filmes();
        const Gamb = async () => {

            let gam = await gambiarra.getGambiarra();
            setRender(gam);
        }
        Gamb();
    }, []);

    return (
        <main className="container-cinema">

            {render.map((item) => (
                <div className='container-horarios'>
                    <div className='poster-horarios'>
                        <img src={movieList[id - 1].img} className='poster' />
                        <h3>{movieList[id - 1].title}</h3>
                    </div>


                    <div className='horarios'>
                        <table className='table-horarios'>
                            <tr>
                                <th>Dublado</th>
                            </tr>
                            
                            <tr>
                                <td><button className='btnHorario'>11h40</button></td>
                            </tr>
                            
                        </table>
                        <table className='table-horarios-dir'>
                            <tr>
                                <th>Legendado</th>
                            </tr>
                            <tr>
                                <td><button className='btnHorario'>13h20</button></td>
                            </tr>
                            <tr>
                                <td><button className='btnHorario'>13h20</button></td>
                            </tr>
                        </table>
                    </div>

                </div>
            ))}

        </main>
    )
}

export default Horarios;