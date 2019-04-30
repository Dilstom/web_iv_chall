exports.seed = function(knex, Promise) {
 // Deletes ALL existing entries
 return knex('ingredients')
  .del()
  .then(function() {
   // Inserts seed entries
   return knex('ingredients').insert([
    { name: 'fennel', amount: '2c', recipes_id: 1 },
    { name: 'harissa', amount: '2 tbs', recipes_id: 1 },
    { name: 'ugli fruit', amount: '2', recipes_id: 2 },
    { name: 'butternut squash', amount: '2 lb', recipes_id: 2 },
    { name: 'lettuce', amount: '4c', recipes_id: 2 },
    { name: 'Falafel', amount: '3c', recipes_id: 3 },
    { name: 'tofu', amount: '3oz', recipes_id: 3 },
    { name: 'clementine', amount: '5c', recipes_id: 4 },
    { name: 'manchego', amount: '3c', recipes_id: 4 },
    { name: 'lettuce', amount: '3c', recipes_id: 4 },
    { name: 'Strips of beef', amount: '12c', recipes_id: 5 },
    { name: 'lime', amount: '2c', recipes_id: 5 },
    { name: 'pepper', amount: '3c', recipes_id: 5 },
    { name: 'corn tortillas', amount: '12c', recipes_id: 5 },
    { name: 'tomatillo sauce', amount: '10oz', recipes_id: 5 },
    { name: 'cubed beef', amount: '3lb', recipes_id: 6 },
    { name: 'tomatillo sauce', amount: '10oz', recipes_id: 6 },
    { name: 'diced tomatoes', amount: '1 tsp', recipes_id: 6 },
    { name: 'garlic', amount: '3 c', recipes_id: 6 },
   ]);
  });
};
