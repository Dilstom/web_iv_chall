const db = require('../data/dbConfig');

module.exports = {
 getDishes,
 getDish,
 addDish,
 getRecipes,
 addRecipe,
};

function getDishes() {
 return db('dishes');
}
function getDish(id) {
 return db('dishes')
  .join('recipes', 'dishes.id', '=', 'recipes.dishes_id')
  .select('dishes.*', { recipes: 'recipes.name' })
  .where({ 'dishes.id': id });
}
function addDish(dish) {
 return db('dishes')
  .insert(dish)
  .then(ids => {
   return getDish(ids[0]);
  });
}
function getRecipes() {
 return db('recipes')
  .join('dishes', 'recipes.dishes_id', '=', 'dishes.id')
  .select('recipes.*', { dish: 'dishes.name' });
}
function addRecipe(recipe) {
 return db('recipes').insert(recipe);
}
