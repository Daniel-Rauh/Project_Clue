const reveal = document.getElementById("reveal")
let mystery
let suspectsArray = [
    mrGreen = {
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        color: "green"
    },
    drOrchid = {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientis",
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "white"
    },
    profPlum = {
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
        image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        color: "purple"
    },
    missScarlet = {
        firstName: "Kasadra",
        lastName: "Scarlet",
        occupation: "Actress",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        image: "https://www.ultraboardgames.com/clue/gfx/miss-scarlet.jpg",
        color: "red"
    },
    mrsPeacock = {
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: "https://www.ultraboardgames.com/clue/gfx/mrs-peacock.jpg",
        color: "blue"
    },
    mrMustard = {
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color: "yellow"
        }
]
let weaponsArray = [
    rope = {
        name: "rope",
        weight: 10
    },
    knife = {
        name: "knife",
        weight: 8
    },
    candlestick = {
        name: "candlestick",
        weight: 2
    },
    dumbbell = {
        name: "dumbbell",
        weight: 30
    },
    poison = {
        name: "poison",
        weight: 2
    },
    axe = {
        name: "axe",
        weight: 15
    },
    bat = {
        name: "bat",
        weight: 13
    },
    thropy = {
        name: "trophy",
        weight: 25
    },
    pistol = {
        name: "pistol",
        weight: 20
    }
]
let roomsArray = [
    diningRoom = {
        name: "Dining Room"
    },
    conservatory = {
        name: "Conservatory"
    },
    kitchen = {
        name: "Kitchen"
    },
    study = {
        name: "Study"
    },
    library = {
        name: "Library"
    },
    billiardRoom = {
        name: "Billiard Room"
    },
    lounge = {
        name: "Lounge"
    },
    ballroom = {
        name: "Ballroom"
    },
    hall = {
        name: "Hall"
    },
    spa = {
        name: "Spa"
    },
    livingRoom = {
        name: "Living Room"
    },
    observatory = {
        name: "Observatory"
    },
    theater = {
        name: "Theater"
    },
    guesHouse = {
        name: "Guest House"
    },
    patio = {
        name: "Patio"
    }
]
function selectRandom(input) {
    return input[Math.floor(Math.random() * input.length)]
}
function pickMystery() {
    mystery = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }
}
function revealMystery() {
    pickMystery()
    reveal.innerHTML = `
    <h1>${mystery.suspect.firstName} ${mystery.suspect.lastName} killed Mr. Boddy using ${mystery.weapon.name} in the ${mystery.room.name}</h1>
    <div>
    <img src=${mystery.suspect.image} alt ="">
    </div>
    `
}