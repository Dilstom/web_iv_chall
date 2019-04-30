const express = require('express');

const server = express();
const db_dishes = require('./roles/dishes_module');

server.use(express.json());

server.get('/api/dishes/', async (req, res) => {
 try {
  const dish = await db_dishes.getDishes();
  res.status(200).json(dish);
 } catch (error) {
  res.status(500).json(error);
 }
});
server.get('/api/dishes/:id', async (req, res) => {
 try {
  const dish = await db_dishes.getDish(req.params.id);
  if (dish) {
   res.status(200).json(dish);
  } else {
   res.status(404).json({ message: 'There is no record with this id' });
  }
 } catch (error) {
  res.status(500).json(error);
 }
});

server.get('/api/recipes', async (req, res) => {
 try {
  const recipe = await db_dishes.getRecipes();
  res.status(200).json(recipe);
 } catch (error) {
  res.status(500).json(error);
 }
});

server.post('/api/dishes/', async (req, res) => {
 try {
  const { name } = req.body;
  const dish = await db_dishes.addDish({ name });
  res.status(200).json(dish);
 } catch (error) {
  res.status(500).json(error);
 }
});
server.post('/api/recipes/', async (req, res) => {
 try {
  const { name, dishes_id } = req.body;
  const dish = await db_dishes.addRecipe({ name, dishes_id });
  res.status(200).json(dish);
 } catch (error) {
  res.status(500).json(error);
 }
});

server.listen(5000, () => console.log('App is running on port 5000'));
