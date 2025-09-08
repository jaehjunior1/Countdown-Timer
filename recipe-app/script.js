getRandomMeal();

async function getRandomMeal() {
    const resp = fetch('http://www.themealdb.com/api/json/v1/1/random.php');
    const randomMeal = await resp.json();

    console.log(randomMeal);
}

async function getMealById(id) {
    const meal =await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id);
}

async function getMealBySearch(term) {
    const meals = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+term);
}