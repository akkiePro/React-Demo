import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const [text, setText] = useState('')

    function handleUpClick() {
        // console.log("Handle Up Clicked")
        setText(text.toUpperCase())
        props.showAlert('Converted to UpperCase', 'success')
    }
    
    function handleLowClick() {
        // console.log("Handle Up Clicked")
        setText(text.toLowerCase())
        props.showAlert('Converted to LowerCase', 'success')
    }
    
    function handleClrClick() {
        setText('')
        props.showAlert('Cleared data from textarea.', 'success')
    }

    function handleChange(event) {
        // console.log("text changed: " + text)
        setText(event.target.value)
    }

    const darkStyle = {
        backgroundColor : '#002b69',
        color : 'white'
    }
    const lightStyle = {
        backgroundColor : 'white',
        color : 'black'
    }

    return (
        <>
            <div className={`container text-${props.mode==='light' ? 'dark' : 'light'}`}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control my-3" style={props.mode==='light' ? lightStyle : darkStyle} id="myForm" value={text} onChange={handleChange} rows="8"></textarea>
                    <button type="button" className="btn btn-primary me-1" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button type="button" className="btn btn-info mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
                    <button type="button" className="btn btn-danger mx-1   " onClick={handleClrClick}>Clear</button>
                </div>
            </div>

            <div className={`container text-${props.mode==='light' ? 'dark' : 'light'}`}>
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