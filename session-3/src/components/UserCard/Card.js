import './Card.css';


function Card({user}){

    return (
        <div>
        <img src='./logo512.png' className='Card-Image' />
        <div className='Card-Details'>
            <h3 className='Card-Header'>{user.fullName}</h3>
            <h4 className='Card-SubHeader'>{user.occupatio}</h4>
        </div>
        </div>
    );
   
};




export default Card;

