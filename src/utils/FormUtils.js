const clearForm = ({ children }) => {
    Array.prototype.forEach.call(children, elem => {
        if (elem.nodeName === 'INPUT' || elem.nodeName === 'TEXTAREA') {
            if (elem.type.match(/^text/)) elem.value = '';
            if (elem.type === 'number') elem.value = '5';
        }
    })
}

export const submitHandler = (e, callback) => {
    e.preventDefault();

    const { id, title, description, complexity, state, assignedTo } = e.target;

    const content = {
        id: id ? Number.parseInt(id.value, 10) : null,
        title: title.value,
        description: description.value,
        complexity: complexity.value,
        state: state ? state.value : 'created',
        assignedTo: assignedTo ? assignedTo.value : null
    }

    callback(content);
    clearForm(e.target);
}

export default submitHandler;