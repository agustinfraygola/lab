import User from "../model/userModel.js"
import jwt from "jsonwebtoken"
import AppError from "../utils/appError.js"

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

export const signup = async (req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    })

    const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: process.env.EXPIRES_IN})

    res.status(201).json({
      status: 'success',
      token,
      data: {
        user: newUser
      }
    })
}

export const login = async (req,res,next) => {
  const {email,password} = req.body

  if(!email || !password){
    next(new AppError('Please provide email and password', 400))
  }

  const user = await User.findOne({email}).select('+password')

  if(!user){
    return next(new AppError('Incorrect email', 401))
  }

  const token = signToken(user._id);
  res.status(200).json({
    status: 'success',
    token
  })
}
