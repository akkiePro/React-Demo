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

    function handleClrClick() {
        setText('')
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
                    <button type="button" className="btn btn-primary me-1" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button type="button" className="btn btn-info mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
                    <button type="button" className="btn btn-danger mx-1   " onClick={handleClrClick}>Clear</button>
                </div>
            </div>

            <div className="container">
                <h2>Your text summary</h2>
                <p>{(text.length !== 0) ? text.split(' ').length : 0} words, 
                    {text.length} characters, 
                    {(text.includes('.')) ? text.split('.\n').length-1 + text.split('. ').length : 0} sentences,
                    {(text.length > 0) ? text.split('.\n').length : 0} paragraphs.</p>
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