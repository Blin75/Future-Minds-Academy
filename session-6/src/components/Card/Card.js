import { useState } from 'react';
import './Card.css';

function Card ({tittle, description, isOpen}){
    const [open, setOpen] = useState(false);
    return <div className={`Acordion-Card ${open? 'Open' : ''}`}>
        <h3 className='Acordion-Card-Title'>{tittle}</h3>
        <p className='Acordion-Card-Description'>{description}</p>
        <button className='Acordion-Card-ShowMore' onClick={openCard}>Show More</button>
    </div>
}

export default Card;