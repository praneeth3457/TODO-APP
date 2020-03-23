import React, { useState } from 'react';
import './App.css';
import CreateList from './Components/CreateList/CreateListComponent';
import CreateCategory from './Components/CreateCategory/CreateCategoryComponent';
import TodoNav from './Components/TodoNav/TodoNavComponent';
import SelectedList from './Components/SelectedList/SelectedListComponent';
// import { connect } from 'react-redux';

function App() {
  const [ articleState, setArticleState ] = useState({
    article : <div>Your notes are empty!</div>
  });

  const [ todoListState, setTodoListState ] = useState({
    todoList : [
      {heading: "List 1", subheading: "Sub Heading 1", description: "Desc 1", category: "Category 1", id: 1}, 
      {heading: "List 2", subheading: "Sub Heading 2", description: "Desc 2", category: "Category 2", id: 2},
      {heading: "List 3", subheading: "Sub Heading 3", description: "Desc 3", category: "Category 3", id: 3},
      {heading: "List 4", subheading: "Sub Heading 4", description: "Desc 4", category: "Category 1", id: 4}]
  });

  const [ categoryListState, setCategoryListState ] = useState({
    categoryList : [
      {value: 'Category 1', color: 'BLUE', background: '#66d9ff', colorCode: '#242424'},
      {value: 'Category 2', color: 'PALE GREEN', background: '#d5ff80', colorCode: '#242424'},
      {value: 'Category 3', color: 'PINK', background: '#ff99cc', colorCode: '#242424'}
    ]
  });

  const createCategoryHandler = (event, categoryElements) => {
    event.preventDefault();
    const updatedCategory = {...categoryListState};
    const option = categoryElements.color.eattributes.options.filter(c => c.value === categoryElements.color.value);
    updatedCategory.categoryList.push({value: categoryElements.name.value, color: categoryElements.color.value, background: option[0].code, colorCode: option[0].color})
    setCategoryListState(updatedCategory);
    // setArticleState({ article : <CreateList categoryClicked={showCategoryHandler} createListClicked={createListHandler} categoryList={categoryListState.categoryList}></CreateList> })
  }

  const createListHandler = (event, createElements) => {
    event.preventDefault();
    const updatedTodoList = {...todoListState};
    updatedTodoList.todoList.push({heading: createElements.heading.value, subheading: createElements.subheading.value, description: createElements.description.value, category: createElements.category.value, id: updatedTodoList.length})
    setTodoListState(updatedTodoList);
  }

  const modifyHandler = (event, modifiedList) => {
    event.preventDefault();
    const updatedTodoList = {...todoListState};
    const idx = updatedTodoList.todoList.findIndex(i => i.id === modifiedList.id);
    if(idx >= 0 ) {
      updatedTodoList.todoList[idx] = modifiedList;
      setTodoListState(updatedTodoList);
    }
  }

  const createNotesHandler = () => {
    setArticleState({ article : <CreateList categoryClicked={showCategoryHandler} createListClicked={createListHandler} categoryList={categoryListState.categoryList}></CreateList> })
  }

  const showCategoryHandler = () => {
    setArticleState({ article : <CreateCategory categoryClicked={createCategoryHandler}></CreateCategory> })
  }

  const selectedListHandler = (event, list) => {
    console.log(list);
    setArticleState({ article : <SelectedList list={list} categoryList={categoryListState.categoryList} saveClicked={modifyHandler}></SelectedList> })
  }

  return (
    <div className="App">
      <div className="Container">
        <div className="Flex-header">
          <nav className="Flex-add">
            <button className="addBtn" onClick={createNotesHandler}>CREATE NOTES</button>
          </nav>
          <header className="Flex-h1">
            <h1>TODO-APP</h1>
          </header>
        </div>
        <main className="Flex-main">
          <nav className="Flex-nav Flex-item">
            <TodoNav todoList={todoListState.todoList} categoryList={categoryListState.categoryList} selectedList={selectedListHandler}></TodoNav>
          </nav>
          <article className="Flex-article Flex-item">
            {articleState.article}
          </article>
        </main>
      </div>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     ctr : state.counter,
//     todoList : state.todoListState
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
//     onTodoListChanged: () => dispatch({type: 'TODOLIST_CHANGED', payload: {}})
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
