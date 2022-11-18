import './style.css';
import { pushScore, getScoreCard } from './modules/fetchApi.js';

const form = document.querySelector('.inputForm');
const refreshButton = document.querySelector('.refreshButton');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameValue = document.querySelector('.nameValue').value;
  const scoreValue = document.querySelector('.scoreValue').value;
  const score = {
    user: nameValue,
    score: scoreValue,
  };
  pushScore(score);
  form.reset();
});

refreshButton.addEventListener('click', () => {
  getScoreCard();
});

getScoreCard();