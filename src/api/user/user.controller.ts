import { Request, Response, NextFunction } from "express";

import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from "./user.services";


export const getAllUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getAllUsers()
    res.status(200).json({ message: 'User Found', data: user })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getUserByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const user = await getUserById(id)

    if(!user) {
      return res.status(404).json({ message: 'User not Found' })
    }
    res.status(201).json({ message: 'User Found', data: user })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createUser(req.body)
    res.status(201).json({ message: 'User Created', data: user })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const user = await updateUser(id, req.body)

    if(!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(201).json({ message: 'User Updated', data: user })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await deleteUser(id);
    res.status(200).json({ message: 'User deleted', data: user })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}