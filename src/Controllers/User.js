const UserSchema = require('../Schemas/User');

exports.store = async (req, res) => {
  try {
    const user = await UserSchema.create(...req.body);
    return res.json(user);
  } catch (err) {
    return res.sendStatus(500).send({ message: 'Internal server error', stack: err });
  }
};

exports.update = async (req, res) => {
  try {
    const user = await UserSchema.findByIdAndUpdate(req.params.id, ...req.body, { new: true });
    return res.json(user);
  } catch (err) {
    return res.sendStatus(500).send({ message: 'Internal server error', stack: err });
  }
};

exports.show = async (req, res) => {
  try {
    const user = await UserSchema.find(req.params.id);
    return res.json(user);
  } catch (err) {
    return res.sendStatus(500).send({ message: 'Internal server error', stack: err });
  }
};

exports.index = async (req, res) => {
  try {
    const users = await UserSchema.find();
    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500).send({ message: 'Internal server error', stack: err });
  }
};

exports.destroy = async (req, res) => {
  try {
    const user = await UserSchema.findByIdAndRemove(req.params.id);
    return res.json(user);
  } catch (err) {
    return res.sendStatus(500).send({ message: 'Internal server error', stack: err });
  }
};