/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { TodoDto } from "./todo.dto"
import { todos } from './todo-list-for-test';

@Injectable()
export class TodoService {
    private todoList: TodoDto[] = todos

    getTodos(): TodoDto[] {
        return this.todoList;
    }
    createTodo(createTodo: TodoDto): TodoDto {
        const newTodo: TodoDto = {
            id: (this.todoList.length + 1).toString(),
            ...createTodo
        };
        this.todoList.push(newTodo);
        return newTodo;
    }
    updateTodo(updateTodo: TodoDto, id: string): TodoDto {
        this.todoList = this.todoList
            .map(todo => (todo.id === id ? updateTodo : todo));

        return updateTodo;
    }
    deleteTodo(id: string): TodoDto {
        const todoToDelete = this.todoList.find(todo => todo.id === id);
        this.todoList = this.todoList.filter(todo => todo.id !== id);

        return todoToDelete;
    }
}
