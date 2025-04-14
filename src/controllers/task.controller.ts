import { Request, Response } from "express";
import prisma from "../db";

export const createTask = async (req: Request, res: Response) => {
  const { title, description, dueDate } = req.body;
  const userId = (req as any).userId;

  const task = await prisma.task.create({
    data: {
      title,
      description,
      dueDate: dueDate ? new Date(dueDate) : undefined,
      userId,
    },
  });

  res.json(task);
};

export const shareTask = async (req: Request, res: Response) => {
  const { taskId, sharedWithUserId } = req.body;
  const sharedByUserId = (req as any).userId;

  const shared = await prisma.sharedTask.create({
    data: { taskId, sharedWithUserId, sharedByUserId },
  });

  res.json(shared);
};

export const getAllTasks = async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
};

export const getMyTasks = async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const tasks = await prisma.task.findMany({
    where: { userId },
  });
  res.json(tasks);
};

export const getSharedTasks = async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const sharedTasks = await prisma.sharedTask.findMany({
    where: { sharedWithUserId: userId },
    include: { task: true },
  });

  res.json(sharedTasks.map((sharedTask) => sharedTask.task));
};
