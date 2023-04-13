import { useState } from "react";

interface IInput {
  type: "text" | "email" | "number";
  place: string;
  set: any;
  value: string;
  children: any;


}

export function Input(props: IInput){

  return(
    <input
      className='max-w-[300px] p-2 border-b-2 border-yellow bg-transparent'
      {... props.children}
      type={props.type}
      value={props.value}
      placeholder={props.place}
    />
  )
}