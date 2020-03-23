const intialState = {
    counter: 0,
    todoList : [
        {heading: "List 1", subheading: "Sub Heading 1", description: "Desc 1", category: "Category 1", id: 1}, 
        {heading: "List 2", subheading: "Sub Heading 2", description: "Desc 2", category: "Category 2", id: 2},
        {heading: "List 3", subheading: "Sub Heading 3", description: "Desc 3", category: "Category 3", id: 3},
        {heading: "List 4", subheading: "Sub Heading 4", description: "Desc 4", category: "Category 1", id: 4}]
}

const reducer = (state=intialState, action) => {
    return state
}

export default reducer;