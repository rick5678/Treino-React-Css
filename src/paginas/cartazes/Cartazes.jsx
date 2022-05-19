import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css';

const Cartazes = ({ id, img, secoes, titulo }) => {
    const history = useHistory();

    function onClique(e) {
        {console.log(id, img, secoes, titulo)}
        return  history.push(`${id}`) ;
    }

    return (
        <div className='filme-cartaz' onClick={onClique}>
            <img src={img} className='poster' alt={id} />
        </div>
    )
}

export default Cartazes;