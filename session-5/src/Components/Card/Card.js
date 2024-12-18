import '/.Card.css';

function Card(plan){
return(
    <div class="card">
    <img src="https://via.placeholder.com/150"/>
    <h3>{plan.title} - <u>{plan.currency}</u></h3>
    <p>{plan.description}</p>
    <ul class="card-list">
      {
        plan.features.map(f=> <li>{f}</li>)
      }
  </ul>
  </div>
)
}

export default Card;