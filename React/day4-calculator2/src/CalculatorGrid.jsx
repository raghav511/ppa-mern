import { Result } from "./Result";

const CalculatorGrid = () => {
  return (
    <div>
      <div>
        <span>
          <button onClick={Result}>1</button>
          <button>2</button>
          <button>3</button>
        </span>
      </div>
      <div>
        <span>
          <button>4</button>
          <button>5</button>
          <button>6</button>
        </span>
      </div>
      <div>
        <span>
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </span>
        <div>
          <span></span>
          <button>0</button>
        </div>
      </div>
      <div>
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>=</button>
      </div>
    </div>
  );
};

export { CalculatorGrid };
