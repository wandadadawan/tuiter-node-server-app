import * as tuitsDao from './tuits-dao.js';

const createTuit = async (req, res) => {
  const newTuit = req.body;
  newTuit.liked = false;
  newTuit.likes = 0;
  newTuit.dislikes = 0;
  newTuit.retuits = 0;
  newTuit.replies = 0;
  newTuit.time = '1s';
  const insertedTuit = await tuitsDao.createTuit(newTuit)
  res.json(insertedTuit);
};
const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  res.json(tuits);
};
const updateTuit = async (req, res) => {
  const tuitIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitIdToUpdate, updates);
  res.send(status); // cannot use sendStatus since sendStatus takes an int like 200, but status is an object.
};
const deleteTuit = async (req, res) => {
  const status = await tuitsDao.deleteTuit(req.params.tid)
  res.send(status);
};

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
};