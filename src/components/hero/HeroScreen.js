import { useMemo} from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

    const { heroId } = useParams()
    const hero = useMemo(() => getHeroById( heroId  ), [ heroId ])
    const navigate = useNavigate()

    if( !hero ) {
        return <Navigate to='/'/>
    }

    const imgPath = `/assets/${hero.id}.jpg`

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero

    const style = {
        width: '50%',
    }

    const handleReturn = () => {
        navigate(-1)
    }

    return (
        <div className='row mt-5 flex-nowrap' >
            <div className='col-4' style={style}>
                <img 
                    src={ imgPath }
                    alt={ hero.superhero }
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                />
            </div>
            <div className='col-8'>
                <h3>{ superhero }</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter ego: </b>{ alter_ego } </li>
                    <li className='list-group-item'><b>Publisher: </b>{ publisher } </li>
                    <li className='list-group-item'><b>First appearence: </b>{ first_appearance } </li>
                </ul>

                <h5 className='mt-5'>Characters</h5>
                <p>{ characters }</p>

                <button 
                    className='btn btn-outline-info mt-3'
                    onClick={ handleReturn }
                    >
                    Return...
                </button>
            </div>
        </div>
    )
}
