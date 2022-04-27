const champions = [];


const arrayOfChampions = data => {
    Object.entries(data).map(champion => {
        champions.push(champion[1]);
    })
}

export {
    champions,
    arrayOfChampions
}