import './style.css';
import {pushScore} from './modules/fetchApi';


const form = document.querySelector('.inputForm');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameValue = document.querySelector('.nameValue').value;
  const scoreValue = document.querySelector('.scoreValue').value;
  const score = {
    user: nameValue,
    score: scoreValue,
  };
  pushScore(score);
  // setTimeout(() => {
  //   loadLists(list.store);
  // }, 1000);
 form.reset();
});

