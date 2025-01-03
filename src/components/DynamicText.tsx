import React from 'react';
import Typed from 'typed.js';

function DynamicText() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Creative',
        'Energized',
        'Curious',
        'Optimized',
        'Reliable',
        ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex justify-center items-center p-96 text-4xl font-bold">
      <span ref={el} />
    </div>
  );
}

export default DynamicText