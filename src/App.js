import React from "react";
import "./App.scss";
import Header from "@componentsMain/Header";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(register);
  console.log(handleSubmit());
  console.log(errors);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
