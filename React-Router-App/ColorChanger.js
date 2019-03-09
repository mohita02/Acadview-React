import React from 'react';


const ColorChanger = (ProspectComponent) => {

  const color = ['red', 'blue', 'green', 'yellow', 'purple', 'violet']
  const randomColor = color[Math.floor(Math.random() * 5)];
 
  const className = randomColor + '-text';

 
  return (props) => {
    return (
      <div className={className}>
        <ProspectComponent {...props}/>
      </div>
    )
  }
}

export default ColorChanger;
