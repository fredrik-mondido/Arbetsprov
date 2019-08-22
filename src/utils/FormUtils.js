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

    console.log(e.target.id.value)
    console.log(e.target.title.value)
    console.log(e.target.description.value)
    console.log(e.target.complexity.value)
    console.log(e.target.state.value)
    console.log(e.target.assignedTo.value)

    const content = {
        id: id ? Number.parseInt(id.value, 10) : null,
        title: title ? title.value : '',
        description: description ? description.value : '',
        complexity: complexity ? complexity.value : '5',
        state: state ? state.value : 'created',
        assignedTo: assignedTo ? assignedTo.value : null
    }

    callback(content);
    clearForm(e.target);
    title.focus();
}

export default submitHandler;