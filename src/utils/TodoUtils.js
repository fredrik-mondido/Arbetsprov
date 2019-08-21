export const getAll = (todoList) => todoList;
export const add = (todoList, item) => [...todoList, item];
export const getOne = (todoList, id) => todoList.find(item => item.id === id);
export const deleteOne = (todoList, id) => todoList.filter(item => item.id !== id);