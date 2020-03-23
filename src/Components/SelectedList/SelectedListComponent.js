import React, { useState, useEffect } from 'react';
import styles from './SelectedList.module.css';
import Element from '../UI/Element/ElementComponent';

function SelectedList(params) {
    const [editableState, setEditableState] = useState({
        isEditable : false
    });

    let [ createElements, setElements ] = useState({
        heading : {
            elabel : 'HEADING',
            etype : 'input',
            eattributes : {
                type: 'text',
                placeholder: 'HEADING'
            },
            value : params.list.heading
        },
        subheading : {
            elabel : 'SUB HEADING',
            etype : 'input',
            eattributes : {
                type: 'text',
                placeholder: 'SUB-HEADING'
            },
            value : params.list.subheading
        },
        description : {
            elabel : 'DESCRIPTION',
            etype : 'textarea',
            eattributes : {
                type: 'text',
                placeholder: 'DESCRIPTION'
            },
            value : params.list.description
        },
        category : {
            elabel : 'CATEGORY',
            etype : 'select',
            eattributes : {
                options: [{value: 'SELECT CATEGORY'}, ...params.categoryList]
            },
            value : params.list.category
        }
    });

    useEffect(() => {
        console.log("Use Effect ==>");
        setEditableState({isEditable : false});
    }, [params.list])

    const editableHandler = () => {
        setEditableState({isEditable : true});
    }

    const saveHandler = (event) => {
        setEditableState({isEditable : false});
        params.saveClicked(event, params.list);
    }

    const elementChangedHandler = (event, key) => {
        const updatedElements = {...createElements};
        const updatedElement = { ...updatedElements[key] };
        updatedElement.value = event.target.value;
        updatedElements[key] = updatedElement;
        setElements(updatedElements);
        params.list[key] = event.target.value;
    }

    const selectableContent = {
        headingNonEditable : <div className={styles.heading}><h2>{params.list.heading}</h2></div>,
        headingEditable : <div className={styles.heading}><Element elabel={createElements["heading"].elabel} etype={createElements["heading"].etype} eattributes={createElements["heading"].eattributes} key="heading" value={createElements["heading"].value} elementChanged={(event) => elementChangedHandler(event, "heading")}/></div>,
        subheadingNonEditable : <div className={styles.contentVal}><span>{params.list.subheading}</span></div>,
        subheadingEditable : <div className={styles.contentVal}><Element elabel={createElements["subheading"].elabel} etype={createElements["subheading"].etype} eattributes={createElements["subheading"].eattributes} key="subheading" value={createElements["subheading"].value} elementChanged={(event) => elementChangedHandler(event, "subheading")}/></div>,
        descNonEditable : <div className={styles.contentVal}><span>{params.list.description}</span></div>,
        descEditable : <div className={styles.contentVal}><Element elabel={createElements["description"].elabel} etype={createElements["description"].etype} eattributes={createElements["description"].eattributes} key="description" value={createElements["description"].value} elementChanged={(event) => elementChangedHandler(event, "description")}/></div>,
        categoryNonEditable : <div className={styles.contentVal}><span>{params.list.category}</span></div>,
        categoryEditable : <div className={styles.contentVal}><Element elabel={createElements["category"].elabel} etype={createElements["category"].etype} eattributes={createElements["category"].eattributes} key="category" value={createElements["category"].value} elementChanged={(event) => elementChangedHandler(event, "category")}/></div>,
        editButton : <div className={styles.btn}><button className="addBtn" onClick={editableHandler}>EDIT</button></div>,
        saveButton : <div className={styles.btn}><button className="addBtn" onClick={(event) => saveHandler(event)}>SAVE</button></div>
    }

    return(
        <div className={styles.selectedPanel}>
            <div className={styles.btnContent}>
                {editableState.isEditable ? selectableContent.headingEditable : selectableContent.headingNonEditable}
                {editableState.isEditable ? selectableContent.saveButton : selectableContent.editButton}
            </div>
            <div className={styles.content}>
                <label>SUB HEADING : </label>
                {editableState.isEditable ? selectableContent.subheadingEditable : selectableContent.subheadingNonEditable}
            </div>
            <div className={styles.content}>
                <label>DESCRIPTION : </label>
                {editableState.isEditable ? selectableContent.descEditable : selectableContent.descNonEditable}
            </div>
            <div className={styles.content}>
                <label>CATEGORY : </label>
                {editableState.isEditable ? selectableContent.categoryEditable : selectableContent.categoryNonEditable}
            </div>
        </div>
    )
}

export default SelectedList;