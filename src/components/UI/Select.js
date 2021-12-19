import classes from "./Select.module.css";

function Select({ options, defaultValue, value, onChange }) {
  return (
    <select
      className={classes.select}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={Math.random()} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
