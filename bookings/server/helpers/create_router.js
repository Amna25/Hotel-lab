const express = require('express')
const ObjectID = require('mongodb').ObjectID

const createRouter = function (collection) {

  const router = express.Router()

  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
  });

  router.get('/:id', (req, res) => {
    collection
      .findOne({ _id: ObjectID(id) })
      .then((doc) => res.json(doc))
  });


  router.post('/', (req, res) => {
    newItem = req.body;
    collection
    .insertOne(newItem)
  })


  router.delete('/:id', (req, res) => {
    const id = req.params.id
    collection
      .deleteOne({ _id: ObjectID(id) })
  });

  router.put('/:id', (req, res) => {
    const id = req.params.id
    const updatedData = req.body
    collection
    .updateOne(
      {_id: ObjectID(id)},
      {$set: updatedData}
    )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    })
  })
  return router
};

module.exports = createRouter;