import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import Input from "./../Input/Input";
import Divider from "./../Divider/Divider";
import Checkbox from "./../Checkbox/Checkbox";
import Text from "./../Text/Text";
import Table from "./../Table/Table";
import FileUploader from "./../FileUploader1/FileUploader1";
import { useDispatch, useSelector } from "react-redux";
import { DeleteIcon } from "../../assets";
import { ComponentsWrapper } from "./style";

const Container = styled.div`
  position: relative;
  border: ${(props) =>
    props.interactiveComponent ? "none" : "1px solid #fff"};
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) =>
    props.isDragging ? "lightgreen" : "transparent"};
  color: ${(props) => (props.interactiveComponent ? "#000" : "#fff")};
`;

const InteractiveComponent = (type) => {
  switch (type.type) {
    case "input":
      return <Input />;
    case "divider":
      return <Divider />;
    case "checkbox":
      return <Checkbox />;
    case "text":
      return <Text />;
    case "table":
      return <Table />;
    case "file":
      return <FileUploader />;
    default:
      return "null";
  }
};

const Task = (props) => {
  const { task, index, column, type } = props;
  const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log('task id',task.id)
    var newTaskIds = column.taskIds.splice(task.id, 1);
    if (column.taskIds.length === 0) {
      newTaskIds = [];
    }
    const newActiveComponent = state.activeComponents.splice(task.id, 1);
    dispatch({
      type: "DELETE_COMPONENT",
      payload: {
        ...state,
        activeComponents: newActiveComponent,
        columns: {
          ...state.columns,
          [column.id]: { ...column, taskIds: newTaskIds },
        },
      },
    });
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          interactiveComponent={column.interactiveComponents}
          className="container"
        >
          {column.interactiveComponents ? (
            <ComponentsWrapper className="components-wrapper">
              <InteractiveComponent type={type} />
              <span className="delete-icon" onClick={() => handleDelete()}>
                <DeleteIcon />
              </span>
            </ComponentsWrapper>
          ) : (
            task.content
          )}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
