import React, { useRef, useState } from "react";

function App() {
  
  const  [formData, setFormData] = useState({
    emri: '',
    mbiemri: '',
    accept: false
  });

  const [formErrors, setFormErrors] = useState(formData);


  function uptadeField(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function sumbitForm(e){
      e.preventDefault();

      //validation
      if(formData.emri === ''){

        setFormErrors(err => {
          return{...err, emri: 'Emri nuk mund të jetë i zbrazët'}
        });
      }

      else{
        setFormErrors
      }

      if(formData.mbiemri === ''){

        setFormErrors(err => {
          return{...err, mbiemri: 'Mbiemri nuk mund të jetë i zbrazët'}
        });
      }
    
  }

  return <form onSubmit={sumbitForm}     style={{padding: '2rem'}}>
      <label htmlFor='emri'>Emri</label><br />
      <input value={formData.emri} onChange={uptadeField} id='emri' name='emri' />
      {formErrors.emri &&   <p style={{color: 'red'}}>{formErrors.emri}</p>}
      <br></br>
      <label htmlFor='mbiemri'>Mbiemri</label><br />
      <input value={formData.mbiemri} onChange={uptadeField} id='mbiemri' name='mbiemri' />
      {formErrors.mbiemri &&   <p style={{color: 'red'}}>{formErrors.mbiemri}</p>}
      <br></br><br></br>
      <input type='submit' value='Submit'></input>
      <input></input>
  </form>
}

export default App;
