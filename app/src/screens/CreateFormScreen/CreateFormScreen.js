import React, { useState } from "react";
import "@atlaskit/css-reset";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./../../components/Column/Column";
import { ContainerStyled } from "./../../components/style";
import { useDispatch, useSelector } from "react-redux";

const CreateFormScreen = () => {
  const state = useSelector((state) => state.reducer);
  const screenState = useSelector((state) => state.screenReducer);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.columns[source.droppableId]; //column id
    const finish = state.columns[destination.droppableId]; // column-2 object

    if (start.id === "column-2" && finish.id === "column-2") {
      const newTaskIds = Array.from(start.taskIds);

      const temp = newTaskIds[source.index];

      newTaskIds.splice(source.index, 1);

      newTaskIds.splice(destination.index, 0, temp);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      dispatch({
        type: "SET_STATE",
        payload: {
          ...state,
          columns: {
            ...state.columns,
            [newColumn.id]: newColumn,
          },
        },
      });
      return;
    }

    const draggedComponent = state.components.find(
      (component) => component.id === draggableId
    );

    const newTaskIndex = state.activeComponents.length;

    const newActiveComponentTask = {
      ...draggedComponent,
      id: `${draggableId}-active-${newTaskIndex}`,
    };

    const column2TaskClones = [...finish.taskIds];

    column2TaskClones.splice(destination.index, 0, newTaskIndex); //puts the item on the destination position
    const newFinish = {
      ...finish,
      taskIds: column2TaskClones,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        //  [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
      activeComponents: [...state.activeComponents, newActiveComponentTask],
    };
    dispatch({
      type: "SET_STATE",
      payload: {
        ...state,
        columns: {
          ...state.columns,
          //  [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
        activeComponents: [...state.activeComponents, newActiveComponentTask],
      },
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ContainerStyled>
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId];
          const components = column.taskIds.map(
            (taskId) => state[column.sourceData][taskId]
          );

          return (
            <Column key={column.id} column={column} components={components} />
          );
        })}
      </ContainerStyled>
    </DragDropContext>
  );
};

export default CreateFormScreen