function success(response) {
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
