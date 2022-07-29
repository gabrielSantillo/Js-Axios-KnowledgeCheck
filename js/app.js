function success(response) {
  
    document.body.insertAdjacentHTML(
      `afterbegin`,
      `
    <h4>${response[`data`][`meals`][0][`strMeal`]}</h4>
    <img src="${response[`data`][`meals`][0][`strMealThumb`]}">
`
    );
  
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
