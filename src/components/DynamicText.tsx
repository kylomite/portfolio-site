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
        'the web developer for you.'
        ],
      typeSpeed: 80,
      backSpeed: 80,
      loop: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
  <main className="flex justify-center items-center h-screen text-center text-4xl font-bold">
    <section>Kyle is <span ref={el} /> </section>
  </main>
  );
}

export default DynamicText