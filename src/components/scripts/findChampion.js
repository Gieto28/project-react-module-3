function findChampion(data, id) {
    return data.find( data => id === data.id)
}

export {
    findChampion,
}
