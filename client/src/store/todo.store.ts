import { makeAutoObservable } from 'mobx';
import { delay } from '@utils/delay.utils';
import {
  getErrorMessageUtils,
  reportErrorUtils,
} from '@utils/errorReport.utils';

interface ITodos {
  title: string;
  data: string;
  status: boolean;
  mark: boolean;
  id: string;
}

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  isLoading = false;
  requestError = null;
  todos: ITodos[] = [];
  renderTodos: ITodos[] = [];
  title = '';
  query = '';
  sortType = 'all';

  setTitle = (value: string) => {
    this.title = value;
  };

  setQuery = (value: string) => {
    this.query = value;
  };

  setLoading = (value: boolean) => {
    this.isLoading = value;
  };

  setError = (value: any) => {
    this.requestError = value;
  };

  setSortType = (value: string) => {
    this.sortType = value;
  };

  deleteTodo = (id: string) => {
    try {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.renderTodos = this.todos;
    } catch (err) {
      reportErrorUtils({
        message: getErrorMessageUtils(err),
        cb: this.requestError,
      });
    }
  };

  markTodo = (id: string) => {
    let currentMark;
    try {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          currentMark = !todo.mark;
          return { ...todo, mark: currentMark };
        }
        return todo;
      });

      this.renderTodos = this.todos;
      this.todoFilter(this.query);

      return currentMark;
    } catch (err) {
      reportErrorUtils({
        message: getErrorMessageUtils(err),
        cb: this.requestError,
      });
    }
  };

  setStatus = (id: string) => {
    let currentStatus;
    try {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          currentStatus = !todo.status;
          return { ...todo, status: currentStatus };
        }

        return todo;
      });

      this.renderTodos = this.todos;
      this.todoFilter(this.query);

      return currentStatus;
    } catch (err) {
      reportErrorUtils({
        message: getErrorMessageUtils(err),
        cb: this.requestError,
      });
    }
  };

  statusFilter = () => {
    if (this.sortType === 'active') {
      this.renderTodos = this.todos.filter((todo) => !todo.status);
    } else if (this.sortType === 'done') {
      this.renderTodos = this.todos.filter((todo) => todo.status);
    } else {
      this.renderTodos = this.todos;
    }
  };

  searchFilter = (value: string) => {
    const reg = new RegExp(value, 'gi');

    this.renderTodos = this.renderTodos.filter((todo) => todo.title.match(reg));
  };

  todoFilter = (value: string) => {
    this.statusFilter();
    this.searchFilter(value);
  };

  setTodo = async (data: any) => {
    this.todos.push({ ...data, id: data.id });
    this.renderTodos = this.todos;
    this.todoFilter(this.query);
    this.title = '';
  };

  setTodosTest = async (value: ITodos) => {
    this.todos.push(value);
    this.renderTodos = this.todos;
  };

  getAllTodos = async (data: any) => {
    await delay(1000);
    this.todos = data;
    this.renderTodos = this.todos;
  };

  get done() {
    return this.todos.filter((todo) => todo.status).length;
  }

  get active() {
    return this.todos.filter((todo) => !todo.status).length;
  }
}

const TodoStore = new Store();
export { TodoStore };
