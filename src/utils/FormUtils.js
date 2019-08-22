const clearForm = ({ children }) => {
    Array.prototype.forEach.call(children, ({ lastChild }) => {
        if (lastChild) {
            if (lastChild.nodeName === 'INPUT' || lastChild.nodeName === 'TEXTAREA') {
                if (lastChild.type.match(/^text/)) lastChild.value = '';
                if (lastChild.type === 'number' || lastChild.type === 'range') lastChild.value = '5';
            }
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