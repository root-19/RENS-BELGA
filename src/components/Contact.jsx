import  { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to server
      await axios.post('http://localhost:3001', formData);
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      // Display success message or redirect to a thank you page
      alert('Message sent successfully!');
    } catch (error) {
      // Handle errors
      console.error('Error sending message:', error);
      alert('An error occurred while sending the message. Please try again later.');
    }
  };

  return (
   
    <div className="container mx-auto">
    <div>
        <p className="text-2xl font-bold underline bg-gradient-to-r text-transparent p-2 from-blue-500 via-cyan-400 to-blue-700 bg-clip-text mt-4">
     Contact Me
       
      </p>
      </div>
        <div className="flex items-center justify-center">
      <a href="mailto:wasieacuna@email.com" className="bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">Send Email</a>
    
    </div>
      {/* <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
  <div className="mb-4">
    <label htmlFor="name" className="block mb-2">Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder='Name'
      className="w-full rounded px-3 py-2 border-5 outline-none border border-blue-500 text-black"
      required
    />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block mb-2">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder='Email'
      className="w-full rounded px-3 py-2 border-5 outline-none border border-blue-500 text-black"
      required
    />
  </div>
  <div className="mb-4">
    <label htmlFor="message" className="block mb-2">Message:</label>
    <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      className="w-full rounded px-3 py-2 border-5 outline-none border border-blue-500 text-black"
      rows="4"
      placeholder='Messages'
      required
    ></textarea>
  </div>
  <button type="submit" className="block mx-auto bg-sky-400 text-2xl px-4 py-2 rounded flex items-center bg-gradient-to-r text-transparent from-blue-500 via-cyan-400 to-blue-700 bg-clip-text hover:from-blue-600 hover:via-cyan-500 hover:to-blue-800">Send Message</button>
</form> */}

    </div>
  );
};

export default Contact;
