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

export type taches = {
  
    "id": number,
    "title": string,
    "categoryId": number,
    "userId": number,
    "createdAt": string,
    "category": {
      "id": number,
      "name": string
    },
    "done": boolean,
    "expiration": string
  
}