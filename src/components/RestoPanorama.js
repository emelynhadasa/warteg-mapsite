import React, { useRef, useLayoutEffect } from 'react'; 
import 'pannellum'
const pano = './1.jpg';

function RestoPanorama() {
  const pannellumContainer = useRef(null);

  useLayoutEffect(() => {
    pannellumContainer.current = window.pannellum.viewer(pannellumContainer.current, {
    type: 'equirectangular',
    panorama: pano

    });
    return () => {
        pannellumContainer.current.destroy()
    }
  }, []);

  return (
    <div
      ref={pannellumContainer}
      style={{ width: '100%', height: '500px' }}
    ></div>
  );
}

export default RestoPanorama;