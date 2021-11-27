import React, { useState, useEffect } from "react"

const ContactForm = (props) => {
  var [values, setValues] = useState(0)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    props.addOrEdit(props.count + 1)
  }

  return (
    <form autoComplete='off' onSubmit={handleFormSubmit}>
      <div className='form-group input-group'>
        <input
          type='submit'
          value='Increase'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  )
}

export default ContactForm
