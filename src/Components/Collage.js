import * as THREE from "three";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Preload,
  Image as ImageImpl,
  ScrollControls,
  Scroll,
  useScroll,
  Html,
  useProgress,
} from "@react-three/drei";
import "./components.scss";
import sanityClient from "../Components/Client";

function Image(props) {
  const ref = useRef();
  const group = useRef();
  const data = useScroll();
  useFrame((state, delta) => {
    group.current.position.z = THREE.MathUtils.damp(
      group.current.position.z,
      Math.max(0, data.delta * 50),
      4,
      delta
    );
  });
  return (
    <group ref={group}>
      <ImageImpl ref={ref} {...props} grayscale={props.blur} />
    </group>
  );
}

function Page({ m = 0.4, urls, ...props }) {
  const { width } = useThree((state) => state.viewport);
  const w = 1.7 / 3;
  return (
    <group {...props}>
      <Image
        position={[-width * w, 0, -1]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[0]}
      />
      <Image
        position={[0, 0, 0]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[1]}
        blur={1}
      />
      {/* <Image
        position={[width * w, 0, 1]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[2]}
      /> */}
    </group>
  );
}

const Pages = ({ ...props }) => {
  const { width } = useThree((state) => state.viewport);

  // Sanity Connection
  const [postData, setPostData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "models"]{name,slug,image{asset->{_id,url}},imageArray[]{asset->{_id,url}}}`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);

  return (
    <>
      {postData &&
        postData.map((models, index) => {
          return (
            <>
              <Page
                position={[width * index, 0, 0]}
                urls={[models.image.asset.url, models.image.asset.url]}
              />
            </>
          );
        })}
    </>
  );
};

function Loader() {
  const progress = useProgress((state) => state.progress);
  if (progress !== 100) {
    return (
      <Html center wrapperClass="loader-div">
        {progress.toFixed()}% loaded
      </Html>
    );
  }

  return null;
}
const Collage = ({ ...props }) => {
  const click = props.click;
  useEffect(() => console.log(click), [click]);
  return (
    <>
      <div className="collageContainer">
        <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
          <Suspense fallback={null}>
            <ScrollControls
              infinite
              horizontal
              damping={4}
              pages={6}
              distance={1}
            >
              <Scroll>
                <Pages />
              </Scroll>
            </ScrollControls>
            <Preload />
          </Suspense>
          <Loader />
        </Canvas>
      </div>
    </>
  );
};
export default Collage;
