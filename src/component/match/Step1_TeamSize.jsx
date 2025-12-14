import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Step1_TeamSize = () => {

  const [personSize, setPersonSize] = useState(0);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    // Form verilerini al
    const formData = new FormData(e.target);

    // "exampleRadios" ismindeki inputun değerini çek
    const selectedSize = formData.get('personSizeRadios');
    console.log(e.target.value);
    setPersonSize(selectedSize);

  }

  return (
    <React.Fragment>
      <h1>Takımların belirlenmesi için kişi sayısı seçin:</h1>
      <form style={{ "margin-left": "10%", "margin-top": "2%" }} onSubmit={onSubmit}>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="personSizeRadios" value="2" />
          <label className="form-check-label" >
            2
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="personSizeRadios" value="3" />
          <label className="form-check-label" >
            3
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="personSizeRadios" value="4" />
          <label className="form-check-label">
            4
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Primary</button>
      </form>
      <h1>Seçilen sayı</h1>
      <h2>{personSize}</h2>
    </React.Fragment>
  )
}

export default Step1_TeamSize