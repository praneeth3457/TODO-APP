import React, { useState } from 'react';
import Element from '../UI/Element/ElementComponent';
import Button from '../UI/Button/ButtonComponent';

function CreateList(params) {
    let [ createElements, setElements ] = useState({
        heading : {
            elabel : 'HEADING',
            etype : 'input',
            eattributes : {
                type: 'text',
                placeholder: 'HEADING'
            },
            value : ''
        },
        subheading : {
            elabel : 'SUB HEADING',
            etype : 'input',
            eattributes : {
                type: 'text',
                placeholder: 'SUB-HEADING'
            },
            value : ''
        },
        description : {
            elabel : 'DESCRIPTION',
            etype : 'textarea',
            eattributes : {
                type: 'text',
                placeholder: 'DESCRIPTION'
            },
            value : ''
        },
        category : {
            elabel : 'CATEGORY',
            etype : 'select',
            eattributes : {
                options: [{value: 'SELECT CATEGORY'}, ...params.categoryList]
            },
            value : 'SELECT CATEGORY'
        }
    });

    const elementChangedHandler = (event, key) => {
        const updatedElements = {...createElements};
        const updatedElement = { ...updatedElements[key] };
        updatedElement.value = event.target.value;
        updatedElements[key] = updatedElement;
        setElements(updatedElements);
    }

    const elements = Object.keys(createElements).map(ele => {
        return <Element elabel={createElements[ele].elabel} etype={createElements[ele].etype} eattributes={createElements[ele].eattributes} key={ele} value={createElements[ele].value} elementChanged={(event) => elementChangedHandler(event, ele)}/>
    });

    return(
        <div>
            <h3>CREATE NEW LIST</h3>
            <form onSubmit={(event) => params.createListClicked( event, createElements )}>
                {elements}
                <Button btnlabel="CREATE"></Button>
                <hr/>
                <a href="javascript:void(0)" onClick={params.categoryClicked}>Create Category</a>
            </form>
        </div>
    )
}

export default CreateList;