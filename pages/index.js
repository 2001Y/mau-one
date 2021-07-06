import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
        <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
        <script src="https://raw.githack.com/AR-js-org/studio-backend/master/src/modules/marker/tools/gesture-detector.js"></script>
        <script src="https://raw.githack.com/AR-js-org/studio-backend/master/src/modules/marker/tools/gesture-handler.js"></script>
      </Head>

      <body>
        <a-scene
          vr-mode-ui="enabled: false;"
          loading-screen="enabled: false;"
          arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
          id="scene"
          embedded
          gesture-detector
        >
          <a-marker
            type="pattern"
            preset="custom"
            url="assets/14.patt"
            raycaster="objects: .clickable"
            emitevents="true"
            cursor="fuse: false; rayOrigin: mouse;"
          >
            <a-image
              src="img/14/1.JPG"
              id="fourteenElm"
              width="10"
              height="6.75"
              rotation="-90 0 0"
              gesture-handler
            ></a-image>
          </a-marker>

          <a-marker
            type="pattern"
            preset="custom"
            url="assets/15.patt"
            raycaster="objects: .clickable"
            emitevents="true"
            cursor="fuse: false; rayOrigin: mouse;"
          >
            <a-image
              src="img/15/1.JPG"
              id="fifteenElm"
              width="10"
              height="6.75"
              rotation="-90 0 0"
              gesture-handler
            ></a-image>
          </a-marker>

          <a-marker
            type="pattern"
            preset="custom"
            url="assets/under.patt"
            raycaster="objects: .clickable"
            emitevents="true"
            cursor="fuse: false; rayOrigin: mouse;"
          >
            <a-image
              src="img/under/1.JPG"
              id="underElm"
              width="10"
              height="6.75"
              rotation="-90 0 0"
              gesture-handler
            ></a-image>
          </a-marker>

          <a-entity camera></a-entity>
        </a-scene>
      </body>
    </div>
  );
}
