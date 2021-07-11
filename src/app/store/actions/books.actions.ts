import { Action } from "@ngrx/store";
import { Paginated } from "src/app/shared/models/interfaces/paginated.model";
import { Book } from "../../modules/books/models/interfaces/book.model";

export const GET_BOOKS = 'GET_BOOKS';
export const ADD_BOOK = 'ADD_BOOK';
export const ADD_LIST_BOOKS = 'ADD_LIST_BOOKS';
export const SET_LOADING = 'SET_LOADING';

export class GetBooksAction implements Action {
    type: string = GET_BOOKS;
    
    constructor(public payload?: number) {}
}

export class AddBookAction implements Action {
    type: string = ADD_BOOK;

    constructor(public payload?: Book) {}
}

export class AddPaginatedBookAction implements Action {
    type: string = ADD_LIST_BOOKS;

    constructor(public payload?: Paginated<Book>) {}
}

export class SetLoadingAction implements Action {
    type: string = SET_LOADING;

    constructor(public payload?: boolean) {}
}