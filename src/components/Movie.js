import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Movie = () => {

  const initialFormData = {
    name: '',
    email: '',
    tickets: 1,
    contact: ''
  };
  const [formData, setFormData] = useState(initialFormData);
  // State to manage form data
  

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Save data to localStorage
    localStorage.setItem('movieTicketFormData', JSON.stringify(formData));

    // Clear form inputs by setting state to initial state
    setFormData(initialFormData);

    // Your form submission logic goes here (optional)
    console.log('Form submitted!');
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

    const params=useParams();
    const {name}=params;
   
    const [Data,setData]=useState({});
    const [active,setactive]=useState(false);

    const doctive=()=>{
      setactive(true);
    }
   



    const fetchdata = async () => {
      const res = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${name}`);
      const data = await res.json();
      console.log(data);
      setData(data);
    };

    useEffect(() => {
      fetchdata();
    }, []);

console.log(Data);



  return (
  <>

  <div className='heading'>{Data.name}</div>


  
<div  className='imagecontainer'>{Data.image && <img  className="movieimage" src={Data.image.original} alt={`${Data.name} Poster`} />}

<div className='button'>
<div  className="summary" dangerouslySetInnerHTML={{__html: Data.summary}}>
  </div>
  <button onClick={doctive} style={{color:'white',backgroundColor:'#E3170A',padding:'5px',fontSize:'large',borderRadius:'20px'}}>Book Now</button>
  <br/>
  <br/>
  {active && ( <form onSubmit={handleFormSubmit}>
      <h2>Movie Ticket Booking</h2>
      <br />
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="tickets">Number of Tickets:</label>
      <input
        type="number"
        id="tickets"
        name="tickets"
        min="1"
        value={formData.tickets}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="contact">Contact Number:</label>
      <input
        type="tel"
        id="contact"
        name="contact"
        pattern="[0-9]{10}"
        placeholder="Enter 10-digit contact number"
        value={formData.contact}
        onChange={handleInputChange}
        required
      />

      <button type="submit">Book Tickets</button>
    </form>)}
</div>


</div>



  </>
  )
}

export default Movie
