export const add = (todoList, item) => [...todoList, { ...item, id: todoList.length }];

export const getOne = (todoList, id) => todoList.find(item => item.id === id);

export const deleteOne = (todoList, id) => todoList.filter(item => item.id !== id);

export const changeState = (todoList, id, state) => todoList
    .map(({ ...item }) => {
        if (item.id === id) {
            if (state === 'completed' && item.state !== 'active') throw new Error('Can only mark active todos as complete.');
            item.state = state;
            return item;
        }
        return item;
    });

export const assign = (todoList, id, name) => todoList
    .map(({ ...item }) => {
        if (item.id === id) item.assignedTo = name;
        return item;
    });

export const update = (todoList, todoObject) => todoList
    .map(item => (item.id === todoObject.id) 
        ? { ...item, ...todoObject }
        : item);
