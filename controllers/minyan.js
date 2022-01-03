import Minyan from "../models/Minyan.js";
import { sendNotification } from "../controllers/notifications.js";

// creat new minyan

// @desc create new minyan
// @route POST /api/v1/minyan
// @access Public
export const createMinyan = async (req, res, next) => {
  try {
    const minyan = await Minyan.create(req.body);
    res.status(201).json({ success: true, data: minyan });
  } catch (error) {
    res.status(400).json({ success: false, errorMessage: error });
  }
};
// @desc get a specific minyan
// @route GET /api/v1/minyan/:id
// @access Public
export const getMinyan = async (req, res, next) => {
  try {
    const minyan = await Minyan.findById(req.params.id);

    if (!minyan) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: minyan });
  } catch (error) {
    res.status(400).json({ success: false, errorMessage: error });
  }
};
// @desc update a specific minyan
// @route PUT /api/v1/minyan/:id
// @access Public
export const updateMinyan = async (req, res, next) => {
  try {
    const minyan = await Minyan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!minyan) {
      return res.status(400).json({ success: false, data: minyan });
    }
    // sendNotification({}, {}, {}, minyan);
    res.status(200).json({ success: true, data: minyan });
  } catch (error) {
    res.status(400).json({ success: false, errorMessage: error });
  }
};
// @desc delete a specific minyan
// @route DELETE /api/v1/minyan/:id
// @access Public
export const deleteMinyan = async (req, res, next) => {
  try {
    const minyan = await Minyan.findByIdAndDelete(req.params.id);

    if (!minyan) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, errorMessage: error });
  }
};
