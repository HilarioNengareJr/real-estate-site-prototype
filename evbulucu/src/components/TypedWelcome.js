import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = ({ strings }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [strings]);

  return <span ref={typedRef} />;
};

export default TypedComponent;
