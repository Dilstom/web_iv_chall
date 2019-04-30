const express = require('express');

const server = express();
const db_dishes = require('./roles/dishes_module');

server.get('/', async (req, res) => {
 try {
  const dish = await db_dishes.getDishes();
  res.status(200).json(dish);
 } catch (error) {
  res.status(500).json(error);
 }
});
server.get('/:id', async (req, res) => {
 try {
  const dish = await db_dishes.getDish(req.params.id);
  res.status(200).json(dish);
 } catch (error) {
  res.status(500).json(error);
 }
});
server.post('/', async (req, res) => {
 try {
  const dish = await db_dishes.addDish(req.body);
  res.status(200).json(dish);
 } catch (error) {
  res.status(500).json(error);
 }
});

server.listen(5000, () => console.log('App is running on port 5000'));
