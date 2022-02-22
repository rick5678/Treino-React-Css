import './index.css';

const Cartazes = ({title, img}) => {

    return (
        <div className='filme-cartaz'>
            <img src={img} className='poster' />
        </div>
    )
}

export default Cartazes;