function success(response) {
  document.body.insertAdjacentHTML(
    `afterbegin`,
    `
    <h4>${response[`data`][`meals`][0][`strMeal`]}</h4>
<h3>${response[`data`][`meals`][0][`strArea`]}</h3>
<p>${response[`data`][`meals`][0][`strInstructions`]}</p>
`
  );
}

function failure(error) {
    document.body.insertAdjacentElement(`afterbegin`, `<h1>Refresh and try again</h1>`)
}

axios
  .request({
    url: `https://www.themealdb.com/api/json/v1/1/random.php`,
  })
  .then(success)
  .catch(failure);
