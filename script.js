const  cards = [
  {
    img: "../img/chiisai.png",
    content: "oi"
  },
  {
    img: "../img/chiisai.png",
    content: "olá"
  },
  {
    img: "../img/chiisai.png",
    content: "oi"
  },
  {
    img: "../img/chiisai.png",
    content: "olá"
  },
  {
    img: "../img/chiisai.png",
    content: "oi"
  },
  {
    img: "../img/chiisai.png",
    content: "olá"
  },
  {
    img: "../img/chiisai.png",
    content: "oi"
  },
  {
    img: "../img/chiisai.png",
    content: "olá"
  },
]

const  cards2 = [
  {
    img: "../img/chiisai.png",
    content: "ok"
  },
  {
    img: "../img/chiisai.png",
    content: "ossu"
  },
  {
    img: "../img/chiisai.png",
    content: "ok"
  },
  {
    img: "../img/chiisai.png",
    content: "ossu"
  },
  {
    img: "../img/chiisai.png",
    content: "ok"
  },
  {
    img: "../img/chiisai.png",
    content: "ossu"
  },
  {
    img: "../img/chiisai.png",
    content: "ok"
  },
  {
    img: "../img/chiisai.png",
    content: "ossu"
  }
]

const  cards3 = [
  {
    img: "../img/chiisai.png",
    content: "hi"
  },
  {
    img: "../img/chiisai.png",
    content: "ko"
  },
  {
    img: "../img/chiisai.png",
    content: "oi"
  },
  {
    img: "../img/chiisai.png",
    content: "olá"
  },
  {
    img: "../img/chiisai.png",
    content: "oi"
  },
  {
    img: "../img/chiisai.png",
    content: "olá"
  },
  {
    img: "../img/chiisai.png",
    content: "oi"
  },
  {
    img: "../img/chiisai.png",
    content: "olá"
  },
]

document.getElementById("cards").innerHTML = cards.map(card => {
  return `
  <div>
  <img src="https://c.tenor.com/jL0nHlu13AsAAAAC/komi-komi-san.gif">
  <p>${card.content}</p>
  <input placeholder = "digite um texto"/>
  </div>
  `
});

document.getElementById("cards2").innerHTML = cards2.map(card2 => {
  return `
  <div>
  <img src="https://c.tenor.com/DBqXXNQkF28AAAAd/komi-san.gif">
  <p>${card2.content}</p>
  <input placeholder = "digite um texto"/>
  </div>
  `
});

document.getElementById("cards3").innerHTML = cards3.map(card => {
  return `
  <div>
  <img src="https://c.tenor.com/bOcoT4nn3noAAAAd/alistar-league-of-legends.gif">
  <p>${card.content}</p>
  <input placeholder = "digite um texto"/>
  </div>
  `
});

// https://c.tenor.com/bOcoT4nn3noAAAAd/alistar-league-of-legends.gif ALISTAR1


// https://i.pinimg.com/originals/05/ee/ba/05eeba171a4ad62aff809a9202568fa8.gif KOMI3
// https://c.tenor.com/DBqXXNQkF28AAAAd/komi-san.gif KOMI2
// ttps://c.tenor.com/jL0nHlu13AsAAAAC/komi-komi-san.gif KOMI1