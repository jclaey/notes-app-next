import React, { useState } from 'react'

const CreateForm = ({ onCreateSubmit }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  return (
    <form 
      onSubmit={e => onCreateSubmit(e, title, body)}
      className='pb-5'
    >
      <div className='pb-2'>
        <label htmlFor='title'>
          <strong>Title</strong>
        </label><br />
        <input 
          className='
            border-2 
            border-solid 
            border-gray-500/50 
            p-1
            rounded-sm' 
          type="text" 
          id="title" 
          placeholder='Enter note title...'
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className='pb-2'>
        <label htmlFor='body'>
          <strong>Body</strong>
        </label><br />
        <input 
          className='
            border-2 
            border-solid 
            border-gray-500/50
            p-1
            rounded-sm' 
          type='text' 
          id='body' 
          placeholder='Enter note body...'
          onChange={e => setBody(e.target.value)}
          value={body}
        />
      </div>
      <button 
        type="submit" 
        className='
          border-2 
          border-solid 
          border-gray-500/100
          p-2
          rounded-sm'
      >
        Save Note
      </button>
    </form>
  );
};

export default CreateForm