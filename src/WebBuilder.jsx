// GrapesEditor.js
import React, { useEffect, useRef } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";

const WebBuilder = () => {
  useEffect(() => {
    const editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: "#gjs",
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      components: '<h1>Hello World Component!</h1>', 
      // Size of the editor
      height: "300px",
      width: "auto",
      // Disable the storage manager for the moment
      storageManager: false,
      // Avoid any default panel
      panels: { defaults: [] },
    });

    return () => {
      editor.destroy(); // Clean up when the component is unmounted
    };
  }, []);

  return (
    <div id="gjs"></div>
  );
};

export default WebBuilder;