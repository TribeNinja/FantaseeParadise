import * as THREE from "three";
import { Suspense, useEffect, useRef } from "react";
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
      <ImageImpl ref={ref} {...props} />
    </group>
  );
}

function Page({ m = 0.4, urls, ...props }) {
  const { width } = useThree((state) => state.viewport);
  const w = width < 10 ? 1.5 / 3 : 1 / 3;
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

  return (
    <>
      <Page
        position={[-width * 0, 0, 0]}
        urls={["/Assets/1.jpg", "/Assets/2.jpg"]}
      />
      <Page
        position={[width * 1, 0, 0]}
        urls={["/Assets/3.jpg", "/Assets/4.jpg"]}
      />
      <Page
        position={[width * 2, 0, 0]}
        urls={["./Assets/5.jpg", "./Assets/1.jpg"]}
      />
      <Page
        position={[width * 3, 0, 0]}
        urls={["./Assets/2.jpg", "./Assets/3.jpg"]}
      />
      <Page
        position={[width * 4, 0, 0]}
        urls={["./Assets/4.jpg", "./Assets/5.jpg"]}
      />
      <Page
        position={[width * 5, 0, 0]}
        urls={["./Assets/1.jpg", "./Assets/2.jpg"]}
      />
      <Page
        position={[width * 6, 0, 0]}
        urls={["./Assets/3.jpg", "./Assets/4.jpg"]}
      />
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
