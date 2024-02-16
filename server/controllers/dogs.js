const Dog = require("../models/dogs");

exports.getAllDogs = async (req, res) => {
  try {
    const result = await Dog.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Dogs found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Dogs not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getDogById = async (req, res) => {
  try {
    const result = await Dog.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Dog found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Dog not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteDog = async (req, res) => {
  try {
    const result = await Dog.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Dog deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateDog = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      tail: req.body.tail,
      speed: req.body.speed,
    };
    const result = await Dog.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Dog updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Dog was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createDog = async (req, res) => {
  try {
    const data = new Dog({
      name: req.body.name,
      tail: req.body.tail,
      speed: req.body.speed,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Dog created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Dog was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
