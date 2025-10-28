import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return taskRepository.findAll();
}

export async function getTaskById(id) {
  const taskId = parseInt(id, 10);
  const task = await taskRepository.findById(taskId);

  if (!task) {
    const error = new Error('Task not found');
    error.status = 404;
    throw error;
  }
  return task;
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}