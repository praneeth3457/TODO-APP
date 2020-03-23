import React from 'react';

function Input(params) {
    return(
        <div>
            <button className="addBtn marginTop10" type="submit">{params.btnlabel}</button>
        </div> 
    )
}

export default Input;