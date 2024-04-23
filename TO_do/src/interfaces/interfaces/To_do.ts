/* V1
interface Todo {
email: string,
password: string,
}*/

// V2 
export interface Todo {
id: number,
token: string,
}


export type RootState = {
  todo: {
    data: Todo[];
  }
}