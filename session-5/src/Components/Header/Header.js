import './Header.css';


function Header({title, description}){
    return (
        <div class="hero">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
    )
}

export default Header;
