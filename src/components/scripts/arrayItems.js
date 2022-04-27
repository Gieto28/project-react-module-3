const items = [];


const arrayOfItems = data => {
    Object.entries(data).map((item) => {
        items.push({...item[1], id: item[0]});
    })
}

export {
    items,
    arrayOfItems
}