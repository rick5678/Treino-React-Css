import './index.css';

const Horarios = () => {

    return (
        <main className="container-cinema">
            <div className='container-horarios'>
                <div className='poster-horarios'>
                    <img src="https://upload.wikimedia.org/wikipedia/pt/3/37/Spider-Man_3.jpg" className='poster' />
                    <h3>Spider-Man</h3>
                </div>
                <div className='horarios'>
                    <table className='table-horarios'>
                        <thead>
                            <tr>
                                <th>Dublado</th>
                                <th>Legendado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><button className='btnHorario'>11h40</button></td>
                                <td><button className='btnHorario'>12h40</button></td>
                            </tr>
                            <tr>
                            <td><button className='btnHorario'>13h20</button></td>
                            <td><button className='btnHorario'>15h20</button></td>
                            </tr>                            
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}

export default Horarios;