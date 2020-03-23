import React from 'react';
import styles from './TodoNav.module.css';

function TodoNav(params) {
    let todoList = null;

    if(params.todoList && params.todoList.length) {
        params.categoryList.forEach(category => {
            category.lists = params.todoList.filter(l => l.category === category.value);
        });
        todoList = params.categoryList.map(category => {
            let categoryStyle = {
                backgroundColor : category.background,
                color: category.colorCode
            }
            return <div className="" key={category.value}>
                        <h4 className={styles.category} style={categoryStyle}>{category.value}</h4>
                        <ul className={styles.lists}>
                            {
                                category.lists.map(list => {
                                    return <li className={styles.list} key={list.heading} onClick={(event) => params.selectedList(event, list)}>{list.heading}</li>
                                })
                            }
                        </ul>
                   </div>
        });
        console.log(params.categoryList);
    }

    return(
        <div>
            {todoList}
        </div>
    )
}

export default TodoNav;