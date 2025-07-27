import {useState} from 'react'

const LearnForm = () => {
    const [formData, setFormData] = useState({
        firstName:'', lastName:'',
    })

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault()
        console.log("Form submitted", formData)
    }

  return (
    <>
        <form action='' onSubmit={handleFormSubmit}>
            First Name: <input type='text' name='firstName' onChange={handleChange} value={formData.firstName} />
            <br />
            Last Name: <input type='text' name='lastName' onChange={handleChange} value={formData.lastName} />
            <br />
            <input type='submit' value='Submit' />
        </form>
    </>
  )
}

export default LearnForm