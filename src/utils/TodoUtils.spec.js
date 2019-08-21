import { add, getOne, deleteOne, changeState, assign, update } from './TodoUtils';

describe('The Todo List', () => {


    const todos = [
        { id: 0, title: 'Hello', description: 'Something', complexity: '10', state: 'created', assignedTo: null },
        { id: 1, title: 'Hello again', description: 'Something again', complexity: '5', state: 'active', assignedTo: 'Batman' }
    ];

    it('should be possible to add new todo items', () => {
        const newTodo = { title: 'New Todo', description: 'Something new', complexity: '8', state: 'created', assignedTo: null };
        const expected = [
            { id: 0, title: 'Hello', description: 'Something', complexity: '10', state: 'created', assignedTo: null },
            { id: 1, title: 'Hello again', description: 'Something again', complexity: '5', state: 'active', assignedTo: 'Batman' },
            { id: 2, title: 'New Todo', description: 'Something new', complexity: '8', state: 'created', assignedTo: null }
        ];
        expect(add(todos, newTodo)).toEqual(expected);
    });

    it('should be possible to get one todo item', () => {
        const expected = { id: 1, title: 'Hello again', description: 'Something again', complexity: '5', state: 'active', assignedTo: 'Batman' };
        expect(getOne(todos, 1)).toEqual(expected);
    });

    it('should be possible to delete one todo item', () => {
        const expected = [{ id: 0, title: 'Hello', description: 'Something', complexity: '10', state: 'created', assignedTo: null }];
        expect(deleteOne(todos, 1)).toEqual(expected);
    });

    it('should be possible to mark a todo as completed if it is active', () => {
        const expected = [
            { id: 0, title: 'Hello', description: 'Something', complexity: '10', state: 'created', assignedTo: null },
            { id: 1, title: 'Hello again', description: 'Something again', complexity: '5', state: 'completed', assignedTo: 'Batman' }
        ];
        expect(changeState(todos, 1, 'completed')).toEqual(expected);
    });

    it('should throw an error if trying to mark a todo as complete if not previously active', () => {
        expect(() => changeState(todos, 0, 'completed')).toThrow(new Error('Can only mark active todos as complete.'))
    })

    it('should be possible to assign a todo', () => {

        const expected = [
            { id: 0, title: 'Hello', description: 'Something', complexity: '10', state: 'created', assignedTo: 'Superman' },
            { id: 1, title: 'Hello again', description: 'Something again', complexity: '5', state: 'active', assignedTo: 'Batman' }
        ];
        expect(assign(todos, 0, 'Superman')).toEqual(expected);
    })

    it('should be possible to reassign if already assigned', () => {
        const expected = [
            { id: 0, title: 'Hello', description: 'Something', complexity: '10', state: 'created', assignedTo: null },
            { id: 1, title: 'Hello again', description: 'Something again', complexity: '5', state: 'active', assignedTo: 'Wonderwoman' }
        ];
        expect(assign(todos, 1, 'Wonderwoman')).toEqual(expected);
    })

    it('should be possible to update a single property of a todo', () => {
        expect(update(todos, { id: 1, title: 'A new title' })[1].title).toEqual('A new title');
        expect(update(todos, { id: 0, description: 'A new description' })[0].description).toEqual('A new description');
        expect(update(todos, { id: 1, state: 'completed' })[1].state).toEqual('completed');
    });
    
    it('should be possible to update multiple properties of a todo at the same time', () => {
        const expected = { id: 1, title: 'A new title', description: 'A new description', complexity: '8', state: 'active', assignedTo: 'Batman' };
        expect(update(todos, { id: 1, title: 'A new title', description: 'A new description', complexity: '8' })[1]).toEqual(expected);
    });

});