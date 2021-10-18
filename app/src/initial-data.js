const initialState = {
  components: [
    { id: "task-1", content: "Table", type: "table" },
    { id: "task-2", content: "Input", type: "input" },
    { id: "task-3", content: "Checkbox", type: "checkbox" },
    { id: "task-4", content: "Divider", type: "divider" },
    { id: "task-5", content: "Text", type: "text" },
    { id: "task-6", content: "File Uploader", type: "file" },
  ],
  activeComponents: [
   
  ],
  columns: {
    "column-1": {
      id: "column-1",
      title: "Form Components",
      taskIds: [0, 1, 2, 3,4,5],
      isDropable: true,
      sourceData: "components",
      interactiveComponents:false
    },
    "column-2": {
      id: "column-2",
      title: "Drop and Create",
      taskIds: [],
      isDropable: false,
      sourceData: "activeComponents",
      interactiveComponents:true,
      displaySaveButton:true
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2"],
};

export default initialState;
