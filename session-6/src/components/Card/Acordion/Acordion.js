import './Acordion.css';
import Card from '..Card/Card';

function Acordion(){
    let facts = [
        {
            tittle:'Kosova',
            description:'A country '
        },
        {
            tittle:'Albania',
            description:'A country '
        },
        {
            tittle:'Greece',
            description:'A country '
        }
    ]
    return <div className='Acordion'>
        {facts.map(fact => <Card tittle={fact.tittle})}
    </div>
}

export default Acordion;