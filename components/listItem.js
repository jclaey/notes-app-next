import React from 'react'
import Link from 'next/link'

const ListItem = ({ note }) => {
  return (
    <div key={note.id}>
      <Link href={`/edit/?id=${note.id}`}>
        <h5>{note.title}</h5>
      </Link>
      <p>{note.body}</p>
      <hr />
    </div>
  );
};

export default ListItem