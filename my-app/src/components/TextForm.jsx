import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const [text, setText] = useState('')

    function handleUpClick() {
        // console.log("Handle Up Clicked")
        setText(text.toUpperCase())
    }

    function handleLowClick() {
        // console.log("Handle Up Clicked")
        setText(text.toLowerCase())
    }

    function handleChange(event) {
        // console.log("text changed: " + text)
        setText(event.target.value)
    }

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control my-3" id="myForm" value={text} onChange={handleChange} rows="8"></textarea>
                    <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button type="button" className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
                </div>
            </div>

            <div className="container">
                <h2>Your text summary</h2>
                <p>{(text.length !== 0) ? text.split(' ').length : 0} words {text.length} characters</p>
                <p>{(text.length !== 0) ? 0.008 * text.split(' ').length : 0} Minutes required to read.</p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}