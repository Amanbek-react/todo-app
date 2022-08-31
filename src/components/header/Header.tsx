import React from "react";
import { TodoType } from "../../types/Types";
import "./Header.css";

interface PropsType {
  state: TodoType[];
}
export const Header: React.FC<PropsType> = ({ state }) => {
  const result = state.filter((item) => item.status);

  return (
    <header className="Header_wrapper">
      Todos ({result.length} / {state.length})
    </header>
  );
};
