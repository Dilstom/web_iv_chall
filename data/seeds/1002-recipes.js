exports.seed = function(knex, Promise) {
 // Deletes ALL existing entries
 return knex('recipes')
  .del()
  .then(function() {
   // Inserts seed entries
   return knex('recipes').insert([
    {
     // id: 1,
     name: 'Fennel and harissa yoghurt',
     description: 'A light yoghurt made with fresh fennel and harissa',
     dishes_id: 3,
    },
    {
     // id: 2,
     name: 'Ugli fruit and squash salad',
     description:
      'Fresh ugli fruit and butternut squash served on a bed of lettuce',
     dishes_id: 2,
    },
    {
     // id: 2
     name: 'Falafel and tofu salad',
     description: 'A crunchy salad featuring falafel and crispy tofu',
     dishes_id: 2,
    },
    {
     name: 'Clementine and manchego salad',
     description: 'Fresh clementine and manchego served on a bed of lettuce',
     dishes_id: 2,
    },
    {
     name: 'Carne Asada Tacos',
     description:
      'Strips of beef are marinated in lime and pepper, then quickly sautéed, and served in soft corn tortillas with tomatillo sauce.',
     dishes_id: 1,
    },
    {
     name: 'Spicy Shredded Beef',
     description:
      'Browned, cubed beef is simmered with diced tomatoes, cumin, and garlic, then shredded.',
     dishes_id: 1,
    },
   ]);
  });
};
