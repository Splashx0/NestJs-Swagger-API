/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from "./todo.dto"
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';


@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }
  @Get()
  @ApiOkResponse({ description: 'Get all todos' })
  getTodos(): TodoDto[] {
    return this.todoService.getTodos();
  }
  @Post()
  @ApiCreatedResponse({ description: 'New todo created' })
  createTodo(@Body() createTodo: TodoDto): TodoDto {
    return this.todoService.createTodo(createTodo)
  };
  @Put(":id")
  @ApiOkResponse({ description: 'todo updated' })
  updateTodo(@Body() updateTodo: TodoDto, @Param("id") id): TodoDto {
    return this.todoService.updateTodo(updateTodo, id);
  }
  @Delete(":id")
  @ApiOkResponse({ description: 'todo deleted successfully' })
  deleteTodo(@Param("id") id): TodoDto {

    return this.todoService.deleteTodo(id);
  }

}

