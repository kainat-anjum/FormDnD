import { combineReducers } from "redux";

const initialState = {
  components: [
    { id: "task-1", content: "Table", type: "table" },
    { id: "task-2", content: "Input", type: "input" },
    { id: "task-3", content: "Checkbox", type: "checkbox" },
    { id: "task-4", content: "Divider", type: "divider" },
    { id: "task-5", content: "Text", type: "text" },
    { id: "task-6", content: "File Uploader", type: "file" },
  ],
  activeComponents: [],
  columns: {
    "column-1": {
      id: "column-1",
      title: "Form Components",
      taskIds: [0, 1, 2, 3, 4, 5],
      isDropable: true,
      sourceData: "components",
      interactiveComponents: false,
    },
    "column-2": {
      id: "column-2",
      title: "",
      taskIds: [],
      isDropable: false,
      sourceData: "activeComponents",
      interactiveComponents: true,
      displaySaveButton: true,
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2"],
  forms: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STATE":
      return action.payload;
    case "DELETE_COMPONENT":
      return action.payload;
    case "SAVE_FORM":
      return action.payload;
    case "RESET_COLUMN2":
      return action.payload;
    default:
      return state;
  }
};

const screen = "MAIN_SCREEN";

export const screenReducer = (state = screen, action) => {
  console.log('screen',action)
  switch (action.type) {
    case "MAIN_SCREEN":
      return action.payload;
    case "FORM_TEMPLATES_SCREEN":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducer,
  screenReducer,
});

export default rootReducer;
