import React, { useState, useEffect } from 'react'
import './app.css'

function App() {
  const [contacts, setContacts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    async function getContacts() {
      try {
        setIsLoading(true)
        const response = await fetch('https://randomuser.me/api/?results=10')
        const contacts = await response.json()
        setContacts(contacts.results)
      } catch (e) {
        setError(e)
      }
      setIsLoading(false)
    }

    getContacts()
  }, [])

  return (
    <div className="container">
      <h1>Contact list</h1>
      {isLoading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error.message} :(</div>}
      <ul className="contact-list">
        {contacts.map((contact, idx) => (
          <li className="contact" key={idx}>
            <img src={contact.picture.medium} alt={contact.name.first} />
            <div>
              <p className="contact-name">{contact.name.first}</p>
              <p>{contact.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
