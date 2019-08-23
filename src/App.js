import React, { useState } from 'react'

function App() {
  const [contacts] = useState([
    {
      name: 'Lucas',
      id: 1,
    },
    {
      name: 'Luís',
      id: 2,
    },
  ])

  return (
    <div>
      <h1>Contact list</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
