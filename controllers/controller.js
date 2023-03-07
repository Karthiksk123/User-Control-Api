import { User } from "../models/user.js";

export const addUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      gender: req.body.gender,
      dob: req.body.dob,
      city: req.body.city,
      state: req.body.state,
      pincode: req.body.pincode,
    });

    const newUser = await user.save();

    return res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        gender: req.body.gender,
        dob: req.body.dob,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
      }
    );

    const updatedUser = await User.findById(req.params.id);
    return res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
