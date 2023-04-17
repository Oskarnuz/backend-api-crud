import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllUsers = () => {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      lastname: true,
      email: true,
      password: true
    }
  })
}

export const getUserById = (id: string) => {
  return prisma.user.findUnique({
    where: {
      id: id
    },
    select: {
      id: true,
      name: true,
      lastname: true,
      email: true,
      password: true
    }
  })
}

export const createUser = (input: any) => {
  return prisma.user.create({
    data: {
      name: input.name,
      lastname: input.lastname,
      email: input.email,
      password: input.password
    }
  })
}

export const updateUser = (id: string, input: any) => {
  return prisma.user.update({
    where: {
      id: id
    },
    data: {
      name: input.name,
      lastname: input.lastname,
      email: input.email,
      password: input.password
    }
  })
}

export const deleteUser = (id: string) => {
  return prisma.user.delete({
    where: {
      id: id
    }
  })
}