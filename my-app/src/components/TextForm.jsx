import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const [text, setText] = useState('your text')

    function handleUpClick() {
        console.log("Handle Up Clicked")
        setText(text.toUpperCase())
    }

    function handleChange(event) {
        console.log("text changed: " + text)
        setText(event.target.value)
    }

    return (
        <div className='container'>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control my-3" id="myForm" value={text} onChange={handleChange} rows="20"></textarea>
                <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            </div>
        </div>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}