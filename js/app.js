/*function success(response) {
  for (let i = 0; i < response[`data`][`meals`].length; i++) {
    document.body.insertAdjacentHTML(
      `afterbegin`,
      `
    <h4>${response[`data`][`meals`][i][`strMeal`]}</h4>
    <img src="${response[`data`][`meals`][i][`strMealThumb`]}">
`
    );
  }
}

function failure(error) {
  document.body.insertAdjacentElement(
    `afterbegin`,
    `<h1>Refresh and try again</h1>`
  );
}

axios
  .request({
    url: `https://www.themealdb.com/api/json/v1/1/filter.php`,
    params: {
      c: `Chicken`,
    },
  })
  .then(success)
  .catch(failure);
*/

function post_success(response) {
  document.body.insertAdjacentHTML(
    `beforeend`,
    `
    <h1>Posted!</h1>
    `
  );
}

function post_failure(error) {
  document.body.insertAdjacentHTML(
    `beforeend`,
    `
    <h1>Try again</h1>
    `
  );
}

function postUserMessage(details) {
  let user_title_input = document.getElementById(`title`);
  let user_title_value = user_title_input[`value`];

  let user_body_input = document.getElementById(`body`);
  let user_body_value = user_body_input[`value`];

  let user_id_input = document.getElementById(`userId`);
  let user_id_value = user_id_input[`value`];
  axios
    .request({
      url: `https://jsonplaceholder.typicode.com/posts`,
      method: `POST`,
      data: {
        title: `${user_title_value}`,
        body: `${user_body_value}`,
        userId: `${user_id_value}`,
      },
    })
    .then(post_success)
    .catch(post_failure);
}

let button = document.querySelector(`button`);
button.addEventListener(`click`, postUserMessage);
