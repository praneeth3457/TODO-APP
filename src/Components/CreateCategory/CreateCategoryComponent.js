import React, { useState } from 'react';
import Element from '../UI/Element/ElementComponent';
import Button from '../UI/Button/ButtonComponent';

function CreateCategory(params) {
    let [ categoryElements, setCategoryElements ] = useState({
        name : {
            elabel : 'NAME',
            etype : 'input',
            eattributes : {
                type: 'text',
                placeholder: 'NAME'
            },
            value : ''
        },
        color : {
            elabel : 'COLOR',
            etype : 'select',
            eattributes : {
                options: [
                    {value: 'BLUE', code: "#66d9ff", color: "#242424"},
                    {value: 'GREEN', code:"#33ff99", color: "#242424"},
                    {value: 'RED', code:"#ff8566", color: "#242424"},
                    {value: 'YELLOW', code:"#ffff66", color: "#242424"},
                    {value: 'ORANGE', code:"#ffc266", color: "#242424"},
                    {value: 'PALE GREEN', code:"#d5ff80", color: "#242424"},
                    {value: 'NAVY BLUE', code:"#005580", color: "#FAFAFA"},
                    {value: 'DARK GREEN', code:"#00802b", color: "#FAFAFA"},
                    {value: 'PINK', code:"#ff99cc", color: "#242424"},
                    {value: 'DARK RED', code:"#800000", color: "#FAFAFA"}
                ]
            },
            value : 'RED'
        }
    })

    const elementChangedHandler = (event, key) => {
        const updatedCategories = {...categoryElements};
        const updatedCategory = { ...updatedCategories[key] };
        updatedCategory.value = event.target.value;
        updatedCategories[key] = updatedCategory;
        setCategoryElements(updatedCategories);
    }

    const elements = Object.keys(categoryElements).map(ele => {
        return <Element elabel={categoryElements[ele].elabel} etype={categoryElements[ele].etype} eattributes={categoryElements[ele].eattributes} key={ele} elementChanged={(event) => elementChangedHandler(event, ele)}/>
    });

    return(
        <div>
            <h3>CREATE NEW CATEGORY</h3>
            <form onSubmit={(event) => params.categoryClicked( event, categoryElements )}>
                {elements}
                <Button btnlabel="CREATE"></Button> 
            </form>
        </div>
    )
}

export default CreateCategory;