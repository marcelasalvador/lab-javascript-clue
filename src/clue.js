// ITERATION 1

// Suspects Array

const suspectsArray = [

//array of objects?

    {
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        color: "green"

    },

    {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "white",

    },

    {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        color: "green"
    
    },
    
    { 
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actor",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "green"

    },
    
    {
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        color: "blue"

    },


    {
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color: "yellow"

    },

];


// Rooms Array

const roomsArray = [

    {
        name: "",

    },

    {
        name: "",

    },
    {
        name: "",

    },

    {
        name: "",

    },

    {
        name: "",

    },

    {
        name: "",

    },

    {
        name: "",

    },

    {
        name: "",

    },

    {
        name: "",

    },

    {
        name: "",

    },

    {
        name: "",

    },

    {
        name: "",

    },

    {
        name: "",

    },

    {
        name: "",

    },

    {
        name: "",

    },

    
];

// Weapons Array

const weaponsArray = [
    {
        name: "",
        weight: 0,

    },
    
    {
        name: "",
        weight: 0,

    },

    {
        name: "",
        weight: 0,

    },

    {
        name: "",
        weight: 0,

    },

    {
        name: "",
        weight: 0,

    },

    {
        name: "",
        weight: 0,

    },

    {
        name: "",
        weight: 0,

    },

    {
        name: "",
        weight: 0,

    },

    {
        name: "",
        weight: 0,

    },




];


// ITERATION 2





function selectRandom(array) {
   return array[Math.floor(Math.random()*array.length)];
}


function pickMystery() {
    
    let randomSuspect = selectRandom(suspectsArray);
    let randomWeapon = selectRandom(weaponsArray);
    let randomRoom = selectRandom(roomsArray);
    return {
        suspect: randomSuspect,
        weapon: randomWeapon,
        room: randomRoom,
    }

}


// ITERATION 3

function revealMystery(envelope) {
let reveal = `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
return reveal;
}
