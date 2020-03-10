import { createAction, props } from "@ngrx/store";

export const sayHello = createAction("[core] Say hello", props<String>());
export const sayGoodbye = createAction("[core] Say goodbye");
