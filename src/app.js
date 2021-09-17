/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { contains } from "jquery";
//import { doc } from "prettier";

const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const suits = ["♦", "♥", "♠", "♣"];
const gameContainer = document.querySelector("body");
const cardContainer = document.querySelector(".card-container");
let cardDeck = [];
let image = document.querySelector("img");

window.onload = function() {
  render();
};

let render = () => {
  shuffleCardsWhenClicked();

  clearDeckButton();
};

let createCard = () => {
  // initialize empty object where each card info will be stored
  // it will have cardnumber, cardsuit, and (card)color
  let cardObject = {};

  // get random number for card
  let randomCard = Math.floor(Math.random() * cards.length);
  cardObject["cardnumber"] = cards[randomCard];

  // get random number for suit
  let randomSuit = Math.floor(Math.random() * suits.length);
  let cardSuit = suits[randomSuit];
  cardObject["cardsuit"] = suits[randomSuit];

  cardSuit == "♥" || cardSuit == "♦"
    ? (cardObject["color"] = "red")
    : (cardObject["color"] = "black");

  cardDeck.push(cardObject);
};

let shuffleCardsWhenClicked = () => {
  // create button to get a new card
  let shuffleButton = document.createElement("button");
  gameContainer.appendChild(shuffleButton).innerText = "Get A Card";
  shuffleButton.classList.add("btn", "btn-secondary", "m-3");

  // dynamically create each new card after clicking button
  shuffleButton.addEventListener("click", () => {
    cardContainer.innerHTML = "";
    createCard();
    deleteImage();
    cardDeck.forEach(({ cardnumber, cardsuit, color }) => {
      cardContainer.innerHTML += `
      <div class="card" style= 'color:${color};'>
        <div class="card-body">
        <div class="card-suit" id="top-suit">${cardsuit}</div>
        <div class="card-number" id="card-number">${cardnumber}</div>
        <div class="card-suit" id="bottom-suit">${cardsuit}</div>
      </div>
    </div>`;
    });
  });
};

let clearDeckButton = () => {
  let clearButton = document.createElement("button");
  gameContainer.appendChild(clearButton).innerText = "Clear Deck";
  clearButton.classList.add("btn", "btn-warning", "m-3");

  clearButton.addEventListener("click", () => {
    cardContainer.innerHTML = `     <img
    src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_1024x1024.png?v=1535755695"
    style="width: 13%;"
    alt=""
  />`;
    cardDeck = [];
  });
};

let deleteImage = () => {
  image.src = "";
};
