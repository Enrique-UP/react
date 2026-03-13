import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Download from "yet-another-react-lightbox/plugins/download";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Video from "yet-another-react-lightbox/plugins/video";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/captions.css";

export default function App() {

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    {
      src: logo,
      description: "Green mountains and blue sky"
    },
    {
      src: logo,
      description: "Relaxing sunset by the sea"
    },
    {
      src: logo,
      description: "Relaxing sunset by the sea"
    },
    {
      src: logo,
      description: "Relaxing sunset by the sea"
    }
  ];

  return (
    <>
      <div style={{ display: "flex", gap: "10px", flexWrap:"wrap" }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            width="150"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
        plugins={[
          Zoom,
          Thumbnails,
          Fullscreen,
          Slideshow,
          Download,
          Counter,
          Captions,
          Video
        ]}
        captions={{ descriptionTextAlign: "center" }}
      />
    </>
  );
}