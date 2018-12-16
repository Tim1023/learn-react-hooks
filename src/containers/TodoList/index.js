import React, {useState} from "react";

export default function TodoList() {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSetText = e =>
    setText(e.target.value);
  const handleCheckboxToggle = e =>
    setChecked(!checked);
  return (
    <section>
      <input
        type="text"
        value={text}
        onChange={handleSetText}
      />
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxToggle}
      />
      <ul>
        <li>{text}</li>
        <li>{checked.toString()}</li>
      </ul>
    </section>
  );

}

export function PlaygroundX() {
  return (
    <section>
      <input type="text" value={""} onChange={e => {
      }}/>
      <input type="checkbox" checked={false} onChange={e => {
      }}/>
      <ul>
        <li>{""}</li>
        <li>{""}</li>
      </ul>
    </section>
  );
}
