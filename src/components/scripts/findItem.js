function findItem(data, id) {
    return data.find( data => id === data.name)
}

function findItemById(data, id) {
    return data.find( data => id === data.id)
}

export {
    findItem,
    findItemById
}
