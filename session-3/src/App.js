import './App.css';
import Card from './components/UserCard/Card';


function App() {

  let users  = [
    {
      
    },
  ]

  let viktori = {
    fullName: "Viktor Ahmeti",
    occupation:"React Instructor"
  }


  let buttonText = 'clicck';
  let buttonColor = 'steelblue';

  return <div>
    <h1>These are the users</h1>
    <Card user={viktori} ></Card>
    <Button text = {buttonText} color={buttonColor}></Button>
 </div> ;
}

export default App;
