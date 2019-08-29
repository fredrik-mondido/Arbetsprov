export const getUniqueId = () => '_' + Math.random().toString(36).substr(2, 9);

export const getKeyFromValue = (dict, value) => {
    for (let key in dict)
        if (dict[key] === value)
            return key;
};

export const sortAscending = arr => arr.sort((a, b) => (a.complexity || 0) - (b.complexity || 0));

export const sortDescending = arr => arr.sort((a, b) => (b.complexity || 0) - (a.complexity || 0));