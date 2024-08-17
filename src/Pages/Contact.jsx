/* eslint-disable react/no-unescaped-entities */

import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    emailjs.send(
      'service_liima34',       // Replace with your EmailJS service ID
      'template_kry3nl9',      // Replace with your EmailJS template ID
      data,
      'Q1COxpZk0xMAMLt4I'           // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success('Message sent successfully!');
      reset();
    })
    .catch((err) => {
      console.error('FAILED...', err);
      toast.success('Failed to send message. Please try again later.');
    });
  };

  return (
    <div className="py-16 h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="border border-indigo-400 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder='Your Name'
              {...register('name', { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gradient-to-r  from-indigo-800 to-fuchsia-500"
            />
            {errors.name && <p className="text-red-500 text-xs italic">Please enter your name.</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder='Your Email'
              {...register('email', { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gradient-to-r  from-indigo-800 to-fuchsia-500"
            />
            {errors.email && <p className="text-red-500 text-xs italic">Please enter a valid email address.</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder='Your Message'
              {...register('message', { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gradient-to-r  from-indigo-800 to-fuchsia-500"
              rows="5"
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs italic">Please enter your message.</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-gradient-to-r  from-indigo-800 to-fuchsia-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
