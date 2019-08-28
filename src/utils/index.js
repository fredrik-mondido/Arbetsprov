export const getUniqueId = () => '_' + Math.random().toString(36).substr(2, 9);

export const getKeyFromValue = (dict, value) => {
    for (let key in dict)
        if (dict[key] === value)
            return key;
};