const Result = (num, total, operator) => {
  if (total == 0 || num == 0 || operator == "") {
    return <p>zero</p>;
  } else {
    switch (operator) {
      case "+":
        return total + num;
      case "-":
        return total - num;
      case "*":
        return total * num;
      case "/":
        return total / num;
    }
  }
};

export { Result };
