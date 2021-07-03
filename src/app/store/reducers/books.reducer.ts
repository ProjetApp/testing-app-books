import { BookState, initializeState } from "../state/book.state";
import { 
    AddBookAction, 
    AddPaginatedBookAction, 
    SetLoadingAction, 
    GetBooksAction, 
    ADD_BOOK, 
    ADD_LIST_BOOKS, 
    GET_BOOKS, 
    SET_LOADING 
} from "../actions/books.actions";
import { Action } from "@ngrx/store";
import { Book } from "src/app/modules/books/models/interfaces/book.model";
import { Paginated } from "src/app/shared/models/interfaces/paginated.model";

export const intialState = initializeState();

export function bookReducer(state: BookState, action: Action) {
    switch (action.type) {
        case GET_BOOKS:
            return handleGetBooks(state, action);
        
        case ADD_BOOK:
            return handleAddBook(state, action);
        
        case ADD_LIST_BOOKS:
            return handleAddPaginatedBook(state, action);
        
        case SET_LOADING:
            return handleSetLoading(state, action);
        
        default:
            return state;
    }
}

export function handleGetBooks(bookState: BookState, { payload }: GetBooksAction): BookState {
    return {
        ...bookState,
        paginatedBook: {
            ...bookState.paginatedBook,
            page: payload || 1
        }
    };
}

export function handleAddBook(bookState: BookState, { payload }: AddBookAction): BookState {
    return { 
        ...bookState, 
        paginatedBook: {
            ...bookState.paginatedBook, 
            data: [
                ...bookState.paginatedBook.data, 
                payload || { } as Book
            ]
        }
    };
}

export function handleAddPaginatedBook(bookState: BookState, { payload }: AddPaginatedBookAction): BookState {
    return { 
        ...bookState, 
        paginatedBook: { ...payload || { } as Paginated<Book> },
        Loading: false
    };
}

export function handleSetLoading(bookState: BookState, { payload }: SetLoadingAction): BookState {
    return { 
        ...bookState, 
        Loading: payload || false
    }; 
}