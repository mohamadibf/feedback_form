import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: ''
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const confirmationMessage = `
    Nom : ${formData.name}
    Email : ${formData.email}
    Retour : ${formData.feedback}
    Notation : ${formData.rating}
    `
    const isConfirmed = window.confirm(`Veuillez confirmer vos détails :\n\n${confirmationMessage}`)

    if (isConfirmed) {
      console.log('Soumission du retour :', formData);
      setFormData({
        name: '',
        email: '',
        feedback: '', 
        rating: ''
      })
      alert('Merci pour vos précieux retours !')
    }
  }

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit}  className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type='text' name='name' placeholder='Votre nom'  value={formData.name} onChange={handleChange}/>
        <input type='email' name='email' placeholder='Votre e-mail'  value={formData.email} onChange={handleChange}/>
        
        <textarea name='feedback' placeholder='Votre feedback' value={formData.feedback} onChange={handleChange} ></textarea>
        <div style={{display:'flex',gap:'10px',flexDirection:'column'}}>
                    <span>Évaluez-nous :</span>
                    <p><input
                        type="radio"
                        name="rating"
                        value="1"
                        onChange={handleChange}
                    /> 1</p>
                  <p>  <input
                        type="radio"
                        name="rating"
                        value="2"
                        onChange={handleChange}
                    /> 2</p>
                  <p>  <input
                        type="radio"
                        name="rating"
                        value="3"
                        onChange={handleChange}
                    /> 3</p>
                   <p> <input
                        type="radio"
                        name="rating"
                        value="4"
                        onChange={handleChange}
                    /> 4</p>
                    <p>
                      <input type="radio" name="rating" value="5" onChange={handleChange}
                    /> 5</p>
                </div>

        <button type='submit'>Soumettre le feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
