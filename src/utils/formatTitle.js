const formatTitle = name => {
    const capitalchar = name.match(/[A-Z]/);
    const firstChar = name.charAt(0).toUpperCase();
    name = capitalchar ? name.replace(capitalchar, ` ${capitalchar}`) : name;
    return firstChar + name.slice(1);
}

export default formatTitle;