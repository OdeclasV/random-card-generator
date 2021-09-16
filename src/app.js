/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { contains } from "jquery";
//import { doc } from "prettier";

const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const suits = ["♦", "♥", "♠", "♣"];
const gameContainer = document.querySelector(".container-fluid");

window.onload = function() {
  render();
};

let render = () => {
  //createCard();

  shuffleCardsWhenClicked();
};

let createCard = () => {
  let randomCard = Math.floor(Math.random() * cards.length);
  document.getElementById("card-number").innerHTML = cards[randomCard];

  let randomSuit = Math.floor(Math.random() * suits.length);
  let cardSuit = suits[randomSuit];

  if (cardSuit == "♥" || cardSuit == "♦") {
    document.querySelector(".card").style.color = "red";
    document.getElementById("top-suit").innerHTML = cardSuit;
    document.getElementById("bottom-suit").innerHTML = cardSuit;
  } else {
    document.querySelector(".card").style.color = "black";
    document.getElementById("top-suit").innerHTML = cardSuit;
    document.getElementById("bottom-suit").innerHTML = cardSuit;
  }
};

let shuffleCardsWhenClicked = () => {
  let shuffleButton = document.createElement("button");
  gameContainer.appendChild(shuffleButton).innerText = "Shuffle Cards";
  shuffleButton.addEventListener("click", () => {
    createCard();
  });
};
