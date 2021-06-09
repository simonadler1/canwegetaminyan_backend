import Minyan from "../models/Minyan.js";

// creat new minyan

// @desc create new minyan
// @route POST /api/v1/minyan
// @access Public
export const createMinyan = async (req, res, next) => {
  const minyan = await Minyan.create(req.body);
  res.status(200).json({ minyan: "create a minyan goes here" });
};
// @desc get a specific minyan
// @route GET /api/v1/minyan/:id
// @access Public
export const getMinyan = (req, res, next) => {
  res.status(200).json({ minyan: " get a specific minyan goes here" });
};
// @desc update a specific minyan
// @route PUT /api/v1/minyan/:id
// @access Public
export const updateMinyan = (req, res, next) => {
  res.status(200).json({ minyan: " update a specific minyan goes here" });
};
// @desc delete a specific minyan
// @route DELETE /api/v1/minyan/:id
// @access Public
export const deleteMinyan = (req, res, next) => {
  res.status(200).json({ minyan: "deletea specific minyan goes here" });
};
