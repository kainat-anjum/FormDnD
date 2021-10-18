import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormTemplatesStyled } from "./style";
import Input from "./../../components/Input/Input";
import Divider from "./../../components/Divider/Divider";
import Checkbox from "./../../components/Checkbox/Checkbox";
import Text from "./../../components/Text/Text";
import Table from "./../../components/Table/Table";
import FileUploader from "./../../components/FileUploader1/FileUploader1";

const FormTemplatesScreen = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const screenState = useSelector((state) => state.screenReducer);
  const state = useSelector((state) => state.reducer);
  const [formId, setFormId] = useState();
  const [form, setForm] = useState();
  const [formComponents, setFormComponents] = useState();
  const dispatch = useDispatch();

  const handleClick = (id) => {
    setFormId(id);
  };

  useEffect(() => {
    setDisplayForm(true);

    const form = state.forms.find((data) => data.id === formId);
    setForm(form);
  }, [formId]);

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

  const showComponent = () => {
    const components =
      form && form.taskIds.map((taskId, index) => state.components[taskId]);
    setFormComponents(components);
  };

  useEffect(() => {
    showComponent();
  }, [form]);

  const goBack = () => {
    dispatch({
      type: "MAIN_SCREEN",
      payload: "MAIN_SCREEN",
    });
  };

  return (
    <FormTemplatesStyled>
      <span onClick={goBack} className="back-link">
        Go back
      </span>
      {state.forms.length === 0 ? (
        <p>No from added </p>
      ) : (
        state.forms !== 0 && (
          <>
            <article className="template-name-wrapper">
              {state.forms.map((data, index) => (
                <p key={index} onClick={() => handleClick(data.id)}>
                  Form Template {index}
                </p>
              ))}
            </article>
            <article>
              {displayForm && formComponents && (
                <section className="components-wrapper">
                  {formComponents.map((data, index) => (
                    <InteractiveComponent key={index} type={data.type} />
                  ))}
                </section>
              )}
            </article>
          </>
        )
      )}
    </FormTemplatesStyled>
  );
};

export default FormTemplatesScreen;
