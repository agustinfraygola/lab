import express from "express";
import Users from "../controller/userController.js"

export const getAllUsers = async (req,res) => {
    try{
        const users = await Users.find();

        if(users.length() === 0){
            return res.status(404).json({
                status: 'failed',
                message: 'No users'
            })
        }

        res.status(200).json({
            status: 'success',
            data:{
                users
            }
        })

    }catch(error){
        res.status(500).json({
            status: 'failed',
            message: 'Internal server error.'
        })
    }
}

export const createUser = async (req,res) => {
    try{
        const {email} = req.body;
        const existUser = await Users.findOne({email});
        if(existUser){
            return res.status(404).json({
                status: 'failed',
                message: 'User already exists!'
            })
        }

        const userData = new User(req.body);
        const savedUser = await userData.save();

        res.status(200).json({
            status: 'success',
            data:{
                savedUser
            }
        })

    }catch(error){
        res.status(500).json({
            status: 'failed',
            message: 'Internal server error.'
        })
    }
}

export const updateUser = async (req,res) => {
    try{
        const id = req.params.id;
        const user = await Users.findOne({id});

        if(!user){
            return res.status(404).json({
                status: 'failed',
                message: 'User doesnt exist'
            })
        }

        const updateUser = await User.findbyIdAndUpdate(id, res.req.body, {new:true})

        res.status(201).json(updatedUser)
        
    }catch(error){
        res.status(500).json({
            status: 'failed',
            message: 'Internal server error.'
        })
    }
}


export const deleteUser = async (req,res) => {
    try{
        const id = req.params.id;
        const user = await Users.findOne({id});

        if(!user){
            return res.status(404).json({
                status: 'failed',
                message: 'User doesnt exist'
            })
        }

        const updateUser = await User.findbyIdAndDelete(id, res.req.body, {new:true})

        res.status(201).json(updatedUser)
        
    }catch(error){
        res.status(500).json({
            status: 'failed',
            message: 'Internal server error.'
        })
    }
}