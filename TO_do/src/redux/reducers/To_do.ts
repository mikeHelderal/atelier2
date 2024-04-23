import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../interfaces/To_do";

type initialTodo = {
  data: Todo[];
  loading: boolean | null;
  error: boolean
}

const initialState: initialTodo = {
  data: [],
  loading: null,
  error: false
} 

export const Todos = createSlice({
  name: "Todos",
  initialState,
  /* 
    C'EST ICI QUE LES "REDUCERS" sont définis.
    les "reducers" sont des fonctions qui decrivent comment l'état de l'application change en réponse à des actions.
    Dans ce cas, trois "reducers" sont definis:
    FETCH_START, FETCH_SUCCES et FETCH_FAILURE 
  */
  reducers: {
    FETCH_START: (draft: initialTodo) => {
      draft.loading = true
    }, 
    FETCH_SUCCES: (draft: initialTodo, actions: PayloadAction<Todo[]> ) => {
      draft.loading = false
      draft.data = actions.payload
    },
    FETCH_FAILURE: (draft: initialTodo) => {
      draft.loading = false
      draft.error = true
    }
  }
})

export const {
  FETCH_START,
  FETCH_SUCCES,
  FETCH_FAILURE
} = Todos.actions

export default Todos.reducer
