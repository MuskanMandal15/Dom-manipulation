const ADD_MOVIE_MODAL = document.getElementById("add-modal");
// const ADD_MOVIE_MODAL = document.querySelector('#add-modal');
// const ADD_MOVIE_MODAL = document.body.children[1];
const START_ADD_MOVIE_BUTTON = document.querySelector("header button");
// const START_ADD_MOVIE_BUTTON = document.querySelector("header").lastElementChild;
const BACKDROP = document.getElementById("backdrop");
// const BACKDROP = document.body.firstElementChild;
const CANCEL_ADD_MOVIE_BUTTON = ADD_MOVIE_MODAL.querySelector(".btn--passive");
const CONFIRM_ADD_MOVIE_BUTTON = CANCEL_ADD_MOVIE_BUTTON.nextElementSibling;
const USER_INPUT = ADD_MOVIE_MODAL.querySelectorAll("input");
const ENTRY_TEXT_SECTION = document.getElementById("entry-text");

let TITLE_VALUE;
let IMAGE_URL_VALUE;
let RATING__VALUE;

const MOVIES = [
  // {
  //   title: "1",
  //   image_url:
  //     "https://images.news18.com/ibnlive/uploads/2023/06/upcoming-movies-of-2023.jpg",
  //   rating: 4.2,
  // },
  // {
  //   title: "2",
  //   image_url:
  //     "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00361712-nccubmuzyu-portrait.jpg",
  //   rating: 3,
  // },
  // {
  //   title: "3",
  //   image_url: "https://img.etimg.com/photo/89661295/89661295.jpg",
  //   rating: 5,
  // },
  // {
  //   title: "4",
  //   image_url:
  //     "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00313411-dvmdcxgrrk-portrait.jpg",
  //   rating: 1.6,
  // },
  // {
  //   title: "5",
  //   image_url:
  //     "https://static-koimoi.akamaized.net/wp-content/new-galleries/2020/11/adipurush002.jpg",
  //   rating: 4.5,
  // },
  // {
  //   title: "6",
  //   image_url:
  //     "https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/03/salaar-1.jpg",
  //   rating: 5,
  // },
  // {
  //   title: "7",
  //   image_url:
  //     "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00308207-chkvvgtmnx-portrait.jpg",
  //   rating: 4.0,
  // },
];

const UPDATE_UI = function () {
  if (MOVIES.length === 0) {
    ENTRY_TEXT_SECTION.style.display = "block";
  } else {
    ENTRY_TEXT_SECTION.style.display = "none";
  }
};
const TOGGLE_BACKDROP = function () {
  BACKDROP.classList.toggle("visible");
};

const renderNoElementFoundOnUI = function () {
  const section = document.createElement("section");
  const pTag = document.createElement("p");
  pTag.textContent = "No Data Found";
  section.classList.add("card");
  section.setAttribute("id", "entry-text");
  const main = document.querySelector("main");
  section.append(pTag);
  main.append(section);
};

const renderIfPresent = function () {
  if (MOVIES.length) {
    for (let movie of MOVIES) {
      RENDER_MOVIE_ELEMENT(movie.title, movie.image_url, movie.rating);
    }
  } else {
    renderNoElementFoundOnUI();
    `1`;
  }
};

const DELETE_MOVIE_HANDLER = function (MOVIE_ID) {
  let movie_index = 0;
  for (const movie of MOVIES) {
    if (NEW_MOVIE.id === MOVIE_ID) {
    }
    break;
    movie_index++;
  }
  MOVIES.splice(movie_index, 1);
  const LIST_ROOT = document.getElementById("movie-list");
  LIST_ROOT.children[movie_index].remove();
};

const RENDER_MOVIE_ELEMENT = function (title, image_url, rating) {
  const NEW_MOVIE_ELEMENT = document.createElement("li");
  NEW_MOVIE_ELEMENT.className = "movie-element";
  NEW_MOVIE_ELEMENT.innerHTML = `
  <div class = "movie-element_image">
  <img src = "${image_url}" width="400px" alt = "${title}" >
  </div>
  <div class = "movie-element_info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
  </div>
  <button> Delete </button>
  `;
  const LIST_ROOT = document.getElementById("movie-list");
  LIST_ROOT.append(NEW_MOVIE_ELEMENT);
  NEW_MOVIE_ELEMENT.addEventListener(
    "click",
    DELETE_MOVIE_HANDLER.bind(null, id)
  );
};

renderIfPresent();

const TOGGLE_MOVIE_MODAL = function (removeFn) {
  if (removeFn) {
    ADD_MOVIE_MODAL.classList.add("visible");
  } else {
    ADD_MOVIE_MODAL.classList.remove("visible");
  }
  TOGGLE_BACKDROP();
};

const CLEAR_MOVIE_INPUT = function () {
  for (const input of USER_INPUT) {
    input.value = "";
  }
};

const CANCEL_ADD_MOVIE_HANDLER = function () {
  TOGGLE_MOVIE_MODAL();
  CLEAR_MOVIE_INPUT();
};

const GettingValuesFromInput = function () {
  TITLE_VALUE = USER_INPUT[0].value;
  IMAGE_URL_VALUE = USER_INPUT[1].value;
  RATING__VALUE = USER_INPUT[2].value;
};

const ADD_MOVIE_HANDLER = function () {
  GettingValuesFromInput();

  if (
    TITLE_VALUE.trim() === "" ||
    IMAGE_URL_VALUE.trim() === "" ||
    RATING__VALUE.trim() === "" ||
    +RATING__VALUE < 1 ||
    +RATING__VALUE > 5
  ) {
    alert("Please enter valid values bewteen (1 and 5).");
    return;
  }

  const NEW_MOVIE = {
    id: Math.random().toString(),
    title: TITLE_VALUE,
    image: IMAGE_URL_VALUE,
    rating: +RATING__VALUE,
  };

  MOVIES.push(NEW_MOVIE);
  console.log("fljkasdfkljasdf", MOVIES);
  CLEAR_MOVIE_INPUT();
  TOGGLE_MOVIE_MODAL();
  RENDER_MOVIE_ELEMENT(
    NEW_MOVIE.id,
    NEW_MOVIE.title,
    NEW_MOVIE.image,
    NEW_MOVIE.rating
  );
  UPDATE_UI();
};

const BACKDROP_CLICK_HANDLER = function () {
  TOGGLE_MOVIE_MODAL();
};

START_ADD_MOVIE_BUTTON.addEventListener(
  "click",
  TOGGLE_MOVIE_MODAL.bind(null, true)
);
BACKDROP.addEventListener("click", TOGGLE_MOVIE_MODAL);
CANCEL_ADD_MOVIE_BUTTON.addEventListener("click", CANCEL_ADD_MOVIE_HANDLER);
CONFIRM_ADD_MOVIE_BUTTON.addEventListener("click", ADD_MOVIE_HANDLER);

// Cancel.addEventListener("click", function () {
//   const present = ADD_MOVIE_MODAL.classList.contains('modal');
//   if(present){}

// });
