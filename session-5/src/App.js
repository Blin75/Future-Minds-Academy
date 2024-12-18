import './App.css';
import Card from './Components/Card/Card';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

function App(){

  const plans = [{
    title: 'Basic',
    description: 'The simplest plan',
    price: 10,
    currency: '$',
    features: ['Create and edit posts', 'Unlimited Notifications']
  },
  {
    title: 'Pro',
    description: 'Everything in Basic, plus',
    price: 35,
    currency: '$',
    features: ['Unlimited Requests', 'Unlimited Notifications']
  },
  {
    title: 'Enterprise',
    description: 'Everything in Pro, plus',
    price: 99,
    currency: '$',
    features: ['24/7 Support', 'Unlimited Notifications']
  }];



  return (
    <>
    <Navbar title="Cool Saas"></Navbar>
    <Header title="Payment Plans" description="Choose from one of the following payment plans"></Header>
    <Footer description="© 2024 Cool SaaS"></Footer>

    <div class="card-container">
      {
        plans.map(p=> <Card plan={p}></Card>)
      }
    </div>
    </>
  );

}



export default App; 
