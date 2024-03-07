const Button = (props) => {
  return (
    <>
      <button
        onClick={props.onClick}
        style={{
          width: props.width,
          height: props.height,
          color: props.color,
          marginLeft: props.marginLeft,
          backgroundColor: props.backgroundColor,
          borderRadius: props.borderRadius,
          borderRadius: props.borderRadios,
          padding: props.paddingBtn,
          cursor: props.curserPointer,
        }}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
