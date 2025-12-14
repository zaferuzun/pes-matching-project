import React from 'react'

const DefaultInput = ({name,i}) => {
    return (
        <div>
            <div className="input-group mb-3" key={i}>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" className="form-control" name={name} aria-label="Text input" />
            </div>
        </div>
    )
}

export default DefaultInput