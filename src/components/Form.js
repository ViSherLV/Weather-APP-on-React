import React from "react";

const Form = (props) =>(
    <form onSubmit={props.weatherMethod}>
      <input type="text"  name="city" placeholder="City (such as Lviv)"/>
      <button>Get the weather</button>
    </form>
)

export default Form;
