import React from 'react'
import Link from 'next/link'

const ListItem = ({ note }) => {
  return (
    <div key={note.id}>
      <div className='pb-2'>
        <Link href={`/edit/?id=${note.id}`}>
          <a>
            <h5 className='text-2xl'>{note.title}</h5>
          </a>
        </Link>
      </div>
      <p>{note.body}</p>
      <hr />
    </div>
  );
};

export default ListItem