import React, { useState } from 'react'

const CreateForm = ({ onCreateSubmit }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  return (
    <form onSubmit={e => onCreateSubmit(e, title, body)}>
      <label htmlFor='title'>
        <strong>Title</strong>
      </label><br />
      <input 
        className='' 
        type="text" 
        id="title" 
        placeholder='Enter note title...'
        onChange={e => setTitle(e.target.value)}
        value={title}
      /><br />
      <label htmlFor='body'>
        <strong>Body</strong>
      </label><br />
      <input 
        className='u-full-width' 
        type='text' 
        id='body' 
        placeholder='Enter note body...'
        onChange={e => setBody(e.target.value)}
        value={body}
      /><br />
      <button type="submit">Save Note</button>
    </form>
  );
};

export default CreateForm