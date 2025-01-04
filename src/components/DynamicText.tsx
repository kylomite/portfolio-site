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
      typeSpeed: 80,
      backSpeed: 80,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="flex justify-center items-center text-center p-52 text-4xl font-bold">
      <section>Kyle is <br /><span ref={el} /></section>
    </main>
  );
}

export default DynamicText