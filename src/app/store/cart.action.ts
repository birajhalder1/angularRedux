import { createAction, props } from "@ngrx/store";

export const addToCart = createAction('[Item] Add to Cart', props<{item: any}>());
export const removeFromCart = createAction('[Item] Remove From Cart');