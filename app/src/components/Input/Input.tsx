type InputTypeProps = {
  placeholder: string;
};

const Input = (props: InputTypeProps) => {
  const { placeholder } = props;
  return <input className="input" placeholder={placeholder} />;
};

export default Input;
