// import React, { useState } from 'react'

// const ContactForm = () => {
//   // State to manage form inputs
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle form submission logic (e.g., send data to a backend)
//     alert('Form submitted!')
//     setFormData({ name: '', email: '', message: '' })
//   }

//   return (
//     <div className="container mx-auto py-5 pt-10 my-15 md:px-20 lg:px-32 w-full" id="contact-form">
//       <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
//         Contact <span className="underline underline-offset-4 font-light decoration-1">Us</span>
//       </h1>
//       <p className="text-center text-lg mb-5 text-gray-500">
//         We'd love to hear from you! Fill out the form below and we'll get in touch with you shortly.
//       </p>

//       <div className="flex justify-center">
//         <form onSubmit={handleSubmit} className="max-w-[400px] w-full border shadow-lg px-6 py-12">
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-lg font-semibold mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Your Name"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="email" className="block text-lg font-semibold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Your Email"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="message" className="block text-lg font-semibold mb-2">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               rows="4"
//               placeholder="Your Message"
//               required
//             ></textarea>
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default ContactForm
import React, { useState } from 'react'

const ContactForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic (e.g., send data to a backend)
    alert('Form submitted!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="container mx-auto py-5 pt-10 my-15 md:px-20 lg:px-32 w-full" id="contact-form">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact <span className="underline underline-offset-4 font-light decoration-1">With Us</span>
      </h1>
      <p className="text-center  text-lg mb-5 text-gray-500">Ready to Make Move.Build your Future together
      </p>

      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="max-w-[600px] w-full border shadow-lg px-6 py-12">
          <div className="flex mb-4 gap-4">
            <div className="w-full">
              <label htmlFor="name" className="block text-lg font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="email" className="block text-lg font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
