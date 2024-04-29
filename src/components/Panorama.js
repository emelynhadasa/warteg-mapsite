import React, { useEffect } from 'react';
import pannellum from 'pannellum';

const Panorama = ({ imageUrl }) => {
  useEffect(() => {
    const viewer = pannellum.viewer('panorama', {
      type: 'equirectangular',
      panorama: imageUrl,
      autoLoad: true
    });

    return () => {
      viewer.destroy();
    };
  }, [imageUrl]);

  return <div id="panorama" style={{ width: '100%', height: '100vh' }} />;
};

export default Panorama;
