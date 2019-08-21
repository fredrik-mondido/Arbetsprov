import { getAll, add, getOne, deleteOne, changeState, assign, update } from './TodoUtils';

describe('The Todo List', () => {
    
    
    const todos = [
        { id: 0, title: 'Hello', description: 'Something', complexity: '10', state: 'created', assignedTo: null },
        { id: 1, title: 'Hello again', description: 'Something again', complexity: '5', state: 'active', assignedTo: 'Batman' }
    ];


    it('should return all todo items', () => {
        expect(getAll(todos)).toEqual(todos);
    });

    it('should be possible to add new todo items', () => {
        const newTodo = { id: 2, title: 'New Todo', description: 'Something new', complexity: '8' };
        const expected = [
            { id: 0, title: 'Hello', description: 'Something', complexity: '10' },
            { id: 1, title: 'Hello again', description: 'Something again', complexity: '5' },
            { id: 2, title: 'New Todo', description: 'Something new', complexity: '8' }
        ];
        expect(add(todos, newTodo)).toEqual(expected);
    });
    
    it('should be possible to get one todo item', () => {
        const expected = { id: 1, title: 'Hello again', description: 'Something again', complexity: '5' };
        expect(getOne(todos, 1)).toEqual(expected);
    });
    
    it('should be possible to delete one todo item', () => {
        const expected = [{ id: 0, title: 'Hello', description: 'Something', complexity: '10' }];
        expect(deleteOne(todos, 1)).toEqual(expected);
    });

    it('should be possible to mark a todo as completed if it is active', () => {
        const expected = [
            { id: 0, title: 'Hello', description: 'Something', complexity: '10', state: 'created', assigned: false },
            { id: 1, title: 'Hello again', description: 'Something again', complexity: '5', state: 'completed', assigned: true }
        ];
        expect(changeState(todos, 1, 'completed')).toEqual(expected);
    });

    it('should throw an error if trying to mark a todo as complete if not previously active', () => {
        expect(changeState(todos, 0, 'completed')).toThrow('Can only mark active todos as complete.')
    })

    it('should be possible to assign a todo, or reassign if already assigned', () => {
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

    it('should be possible to update the title, description or complexity of the todo', () => {
        const first = { id: 1, title: 'A new title', description: 'Something again', complexity: '5', state: 'active', assignedTo: 'Batman' };
        expect(update(todos, 1, 'title', 'A new title')[1]).toEqual(first);
        
        const second = { id: 0, title: 'Hello', description: 'A new description', complexity: '10', state: 'created', assignedTo: null };
        expect(update(todos, 0, 'description', 'A new description')[0]).toEqual(second);
        
        const third = { id: 1, title: 'Hello again', description: 'Something again', complexity: '1', state: 'active', assignedTo: 'Batman' };
        expect(update(todos, 0, 'complexity', '1')[1]).toEqual(third);
    });

});