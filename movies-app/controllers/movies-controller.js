const Movie = require('../models/movie');

const movieController = {};

movieController.index = (req, res) => {
    Movie.findAll()
    .then(movies => {
        res.json({
            message: 'ok',
            data: movies,
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};

movieController.show = (req, res) => {
    Movie.findById(req.params.id)
    .then(movie => {
        res.json({
            message: 'ok',
            data: movie,
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};

movieController.create = (req, res) => {
  Movie.create({
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre,
    director: req.body.director,
  }, req.user.id).then((movie) => {
  res.json({
      message: 'Movie updated successfully!',
      data: movie,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

movieController.update = (req, res) => {
  Movie.update({
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre,
    director: req.body.director,
  }, req.params.id).then(movies => {
      res.json({
      message: 'Movie updated successfully!',
      data: movie,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

movieController.delete = (req, res) => {
    Movie.destroy(req.params.id)
    .then(() => {
      res.json({
        message: 'ok',
      });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};

module.exports = movieController;
