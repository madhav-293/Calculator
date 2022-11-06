function Calculator() {
  const [calc, setCalc] = React.useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: "" });

  function handleNum(value) {
    let newValue = value;
    if (!calc.isInitial) {
      newValue = calc.current + value;
    }
    setCalc({ current: newValue, total: calc.total, isInitial: false, preOp: calc.preOp });
  }
  function handleOper(value) {
    const total = doCalculation();
    setCalc({ current: total.toString(), total: total.toString(), isInitial: true, preOp: value });
  }
  function doCalculation() {
    let total = parseInt(calc.total);

    switch (calc.preOp) {
      case "+":
        total += parseInt(calc.current);
        break;
      case "-":
        total -= parseInt(calc.current);
        break;
      case "*":
        total *= parseInt(calc.current);
        break;
      case "/":
        total /= parseInt(calc.current);
        break;
      default:
        total = parseInt(calc.current);}

    return total;
  }
  function handleClear() {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: "" });

  }

  
  return /*#__PURE__*/(
    React.createElement("div", { className: "calculator" }, /*#__PURE__*/
    React.createElement("div", { className: "display" }, calc.current), /*#__PURE__*/
    React.createElement(CalButton, { value: "7", onClick: handleNum }), /*#__PURE__*/
    React.createElement(CalButton, { value: "8", onClick: handleNum }), /*#__PURE__*/
    React.createElement(CalButton, { value: "9", onClick: handleNum }), /*#__PURE__*/
    React.createElement(CalButton, { className: "operator", onClick: handleOper, value: "/" }), /*#__PURE__*/

    React.createElement(CalButton, { value: "4", onClick: handleNum }), /*#__PURE__*/
    React.createElement(CalButton, { value: "5", onClick: handleNum }), /*#__PURE__*/
    React.createElement(CalButton, { value: "6", onClick: handleNum }), /*#__PURE__*/
    React.createElement(CalButton, { className: "operator", onClick: handleOper, value: "*" }), /*#__PURE__*/

    React.createElement(CalButton, { value: "1", onClick: handleNum }), /*#__PURE__*/
    React.createElement(CalButton, { value: "2", onClick: handleNum }), /*#__PURE__*/
    React.createElement(CalButton, { value: "3", onClick: handleNum }), /*#__PURE__*/
    React.createElement(CalButton, { className: "operator", onClick: handleOper, value: "-" }), /*#__PURE__*/

    React.createElement(CalButton, { value: "C", onClick: handleClear }), /*#__PURE__*/
    React.createElement(CalButton, { value: "0", onClick: handleNum }), /*#__PURE__*/
    React.createElement(CalButton, { value: "=", onClick: handleOper }), /*#__PURE__*/
    React.createElement(CalButton, { className: "operator", onClick: handleOper, value: "+" })));


}
function CalButton(props) {
  return /*#__PURE__*/React.createElement("button", { className: props.className, onClick: () => props.onClick(props.value) }, props.value);
}
ReactDOM.render( /*#__PURE__*/React.createElement("div", { className: "cont" }, /*#__PURE__*/React.createElement(Calculator, null)), document.getElementById("root"));