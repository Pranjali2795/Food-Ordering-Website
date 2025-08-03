import React from 'react';

function Contact() {
  return (
    <div className='min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6'>
      <h1 className='text-3xl font-bold text-green-600 mb-6'>Contact Us</h1>
      <form className='bg-white shadow-md rounded-md p-8 w-full max-w-lg space-y-6'>
        <div>
          <label className='block text-gray-700 font-semibold'>Name</label>
          <input
            type='text'
            placeholder='Your name'
            className='w-full border border-gray-300 rounded-md p-3 outline-none focus:border-green-400'
          />
        </div>
        <div>
          <label className='block text-gray-700 font-semibold'>Email</label>
          <input
            type='email'
            placeholder='your@email.com'
            className='w-full border border-gray-300 rounded-md p-3 outline-none focus:border-green-400'
          />
        </div>
        <div>
          <label className='block text-gray-700 font-semibold'>Message</label>
          <textarea
            placeholder='Your message...'
            rows='4'
            className='w-full border border-gray-300 rounded-md p-3 outline-none focus:border-green-400'
          ></textarea>
        </div>
        <button
          type='submit'
          className='w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-400 transition'
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;