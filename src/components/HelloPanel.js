import React from 'react';

let input;
const HelloPanel = ({userName, onChange, onClick}) => {
  console.log(`展示的userName=${userName}`);
  return (<form onSubmit={e => {
      e.preventDefault();
      onClick();
      input.value = '';
    }}>
    <div>Hello: {userName}</div>
    姓名：<input ref={node => {
          input = node
        }} onChange={()=>onChange(input.value)}/>
    <button type="submit">
      清空
    </button>
  </form>
  );
}

export default HelloPanel;
