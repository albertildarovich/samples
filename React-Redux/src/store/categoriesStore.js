// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------

// ------------------------------------
// Reducer
// ------------------------------------
const INITIAL_STATE = {
  categoriesParamName: `statusIn`,
  categoriesList: [
    {
      title: `Все`,
      categoryId: `0`,
    },
    {
      title: `Выполненные`,
      categoryId: `DONE`,
    },
  ],
};

export default function categoriesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  default: return state;
  }
}
