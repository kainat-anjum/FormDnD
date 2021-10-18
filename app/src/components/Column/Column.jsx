import React, { useState } from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Task from "./../Task/Task";
import { useDispatch, useSelector } from "react-redux";
import {PlusIcon} from './../../assets/index'

const Container = styled.div`
  background-color: ${(props) =>
    props.background ? "#027aff" : "transparent"};
  padding: ${(props) => (props.background ? "0" : "20px")};
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;
  display: flex;
  flex-direction: column;
  width: 100%;

  &:first-child {
    border-left: none;
  }

  .heading {
    color: #fff;
    padding:8px;
    cursor:pointer
  }
`;

const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: 100px;
  background: ${(props) => (props.background ? "#027aff" : "")};
`;

const Column = (props) => {
  const { column, components } = props;
  const state = useSelector((state) => state.reducer);
  const screenState = useSelector((state) => state.screenReducer);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);

  const handleSave = () => {
    console.log("forms", state.totalFroms);
    dispatch({
      type: "SAVE_FORM",
      payload: {
        ...state,

        forms: [
          ...state.forms,
          {
            id: `form-${counter}`,
            taskIds: [...column.taskIds],
            sourceData: "components",
          },
        ],
        columns: {
          ...state.columns,
          ["column-2"]: { ...column, taskIds: [] },
        },
      },
    });

    setCounter(counter + 1);
  };

  const handleAdd = () => {
    dispatch({
      type: "FORM_TEMPLATES_SCREEN",
      payload: "FORM_TEMPLATES_SCREEN",
    });
    return "";
  };

  return (
    <Container background={column.id === "column-1" && true}>
      {column.id === "column-1" && (
        <article className={"heading"}>
          <span onClick={handleAdd}>Form Templates </span>
        </article>
      )}
      <Title className={column.id === "column-1" && "heading"}>
        {column.title}
      </Title>
      <Droppable droppableId={column.id} isDropDisabled={column.isDropable}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            background={column.id === "column-1" && true}
          >
            {components.map((task, index) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  index={index}
                  column={column}
                  type={task.type}
                />
              );
            })}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>

      {column.displaySaveButton && (
        <button
          style={{
            width: "80px",
            height: "38px",
            background: "#027aff",
            border: "none",
            borderRadius: "4px",
            color:'#fff'
          }}
          value="submit"
          onClick={handleSave}
        >
          Save
        </button>
      )}
    </Container>
  );
};

export default Column;
