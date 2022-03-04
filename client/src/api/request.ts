import { axiosInstance } from './axiosInstance';
import {
  getErrorMessageUtils,
  reportErrorUtils,
} from '@utils/errorReport.utils';

interface ITodosRequest {
  title?: string;
  data?: string;
  status?: boolean;
  mark?: boolean;
  _id?: string;
  id?: string;
}

const createTodo = async (todo: ITodosRequest) => {
  try {
    const todoResponse = await axiosInstance({
      method: 'post',
      data: todo,
    });

    return todoResponse;
  } catch (err) {
    reportErrorUtils({ message: getErrorMessageUtils(err) });
  }
};

const getAllTodos = async () => {
  try {
    const response = await axiosInstance({
      headers: { 'Content-Type': 'applicatoin/json' },
    });

    return response;
  } catch (err) {
    reportErrorUtils({ message: getErrorMessageUtils(err) });
  }
};

const updateTodo = async (data: ITodosRequest) => {
  try {
    await axiosInstance({
      method: 'put',
      data,
    });
  } catch (err) {
    reportErrorUtils({ message: getErrorMessageUtils(err) });
  }
};

const deleteTodo = async (id: string) => {
  try {
    await axiosInstance({
      url: `${id}`,
      method: 'delete',
    });
  } catch (err) {
    reportErrorUtils({ message: getErrorMessageUtils(err) });
  }
};

export { getAllTodos, createTodo, updateTodo, deleteTodo };
