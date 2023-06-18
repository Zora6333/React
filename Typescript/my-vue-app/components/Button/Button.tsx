import {HTMLAttributes, SyntheticEvent} from 'react'

 interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    text: string
    onClick: (event: SyntheticEvent<HTMLButtonElement>)=>void
  }
  
export  const Button=({text, onClick, ...props}: ButtonProps) =>(
<button onClick={onClick} {...props}>
{text}
</button>

) 


 
  
 

export default Button ;


