// import Draggable from 'gsap/Draggable';
import React from 'react';

const Tasks = () => {
  //   React.useEffect(() => {
  //     Draggable.create('.draggable', { bounds: '#map' });
  //   }, []);
  return (
    <div className="draggable">
      <svg width="35px" height="35px" viewBox="0 0 35 35" version="1.1">
        <title>Oval</title>
        <desc>Created with Sketch.</desc>
        <g
          id="Duck-duck-soup"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Group-7"
            transform="translate(-377.000000, -78.000000)"
            fill="#745EAD"
          >
            <circle id="Task name" cx="394.5" cy="95.5" r="17.5" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Tasks;
