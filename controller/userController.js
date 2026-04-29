import express from "express";
import Users from "../model/userModel.js"
import { catchAsync } from "../utils/catchAsync.js";

export const createUser = catchAsync(async (req, res, next) => {

  const { email } = req.body;
  const existUser = await Users.findOne({ email });
  if (existUser) {
    return res.status(404).json({
      status: 'failed',
      message: 'User already exists!'
    })
  }

  const userData = new User(req.body);
  const savedUser = await userData.save();

  res.status(201).json({
    status: 'success',
    data: {
      savedUser
    }
  })

})



export const getAllUsers = catchAsync(async (req, res,next) => {
  const users = await Users.find();

  if (users.length() === 0) {
    return res.status(404).json({
      status: 'failed',
      message: 'No users'
    })
  }

  res.status(200).json({
    status: 'success',
    data: {
      users
    }
  })
})

export const updateUser = catchAsync(async (req, res,next) => {
  const id = req.params.id;
  const user = await Users.findOne({ id });

  if (!user) {
    return res.status(404).json({
      status: 'failed',
      message: 'User doesnt exist'
    })
  }

  const userUpdated = await User.findbyIdAndUpdate(id, res.req.body, { new: true })

  res.status(200).json(updatedUser)
})


export const deleteUser = catchAsync(async (req, res,next) => {
  const id = req.params.id;
  const user = await Users.findOne({ id });

  if (!user) {
    return res.status(404).json({
      status: 'failed',
      message: 'User doesnt exist'
    })
  }

  const updateUser = await User.findbyIdAndDelete(id, res.req.body, { new: true })

  res.status(204).json(updatedUser)
})