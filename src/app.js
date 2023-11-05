const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = '';
    var i=0
    // Instead of forloop use Map method
    // Code here
    detailedPlayers = players.map(function(item,index){
        if (index%2==0){
            type1="hero"
        }else{
            type1="villain"
        }
        i++
        return item={name:players[i-1],strength:getRandomStrength(),image:`./images/super-${i}.png`,type:type1}
       
    })

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    var hero = players.filter(function(item){
        return item.type=="hero"
    })
    var villain = players.filter(function(item){
        return item.type=="villain"
    })
    if (type=="hero"){
        fragment=hero.map(function(item){
            return `<div class="player"><img src="${item.image}"alt=""><div class="name">${item.name}</div><div class="strength">${item.strength}</div></div>`
        }).join("")
    }else{
        fragment=villain.map(function(item){
            return `<div class="player"><img src="${item.image}"alt=""><div class="name">${item.name}</div><div class="strength">${item.strength}</div></div>`
        }).join("")
    }
    console.log(fragment)

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}