import React, { Fragment, useContext, useEffect } from 'react';
import './App.css';
// Components
import {AnimatedObject, StaticObject} from './components/objects';
import { Header, Controls } from './components/layout';

import globalContext from './context/global/globalContext';

function App() {
  const { reducePlaybackRateAutomatically } = useContext(globalContext);

  useEffect(() => {
    reducePlaybackRateAutomatically();
  // eslint-disable-next-line
  }, [])
  
  return (
    <Fragment>
      {/* Header */}
      <Header />
      {/* Controlling Buttons */}
      <Controls />
      {/* Clouds */}
      <AnimatedObject id="cloud-1" zIndex={-4} src="https://www.freepnglogos.com/uploads/cloud-clipart/cloud-clip-clkerm-vector-clip-online-20.png" width="9" height="auto" bottom={50} delay={0} duration={5500} flipVertically={false} flipHorizontally={false} />
      <AnimatedObject id="cloud-2" zIndex={-3} src="https://www.freepnglogos.com/uploads/cloud-clipart/cloud-clip-clkerm-vector-clip-online-20.png" width="10" height="auto" bottom={55} delay={2500} duration={5500} flipVertically={false} flipHorizontally={false} />
      {/* Plane */}
      <StaticObject id="plane" zIndex={-2} src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/14167/airliner-aircraft-clipart-xl.png" width="13" height="auto" bottom={45} left={50}/>
      {/* Again Clouds */}
      <AnimatedObject id="cloud-3" zIndex={1} src="https://www.freepnglogos.com/uploads/cloud-clipart/cloud-clip-clkerm-vector-clip-online-20.png" width="15" height="auto" bottom={55} delay={1500} duration={5500} flipVertically={false} flipHorizontally={false} />
      <AnimatedObject id="cloud-4" zIndex={1} src="https://www.freepnglogos.com/uploads/cloud-clipart/cloud-clip-clkerm-vector-clip-online-20.png" width="14" height="auto" bottom={45} delay={3500} duration={5500} flipVertically={false} flipHorizontally={false} />
      {/* Rock-1 */}
      <AnimatedObject id="rock-1" zIndex={-1} src="https://www.pinclipart.com/picdir/big/567-5679213_angle-hand-headgear-snowy-rock-clipart-png-transparent.png" width="13" height="auto" bottom={18} delay={2000} duration={7500} flipVertically={false} flipHorizontally={false} />
      <AnimatedObject id="rock-2" zIndex={-1} src="https://www.pinclipart.com/picdir/big/567-5679213_angle-hand-headgear-snowy-rock-clipart-png-transparent.png" width="13" height="auto" bottom={18} delay={4000} duration={7500} flipVertically={false} flipHorizontally={false} />
      {/* Dinosaur */}
      <AnimatedObject id="t-rex" zIndex={1} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ca9f2274597569.5c34d66faf8c0.gif" width="13" height="auto" bottom={16} delay={0} duration={11000} flipVertically={true} flipHorizontally={false} />
      {/* Tree */}
      <AnimatedObject id="tree-1" zIndex={2} src="https://www.pngkey.com/png/full/176-1761454_transparent-tree-flower-cartoons-pictures-png-transparent-cartoon.png" width="9" height="auto" bottom={14} delay={2500} duration={6500} flipVertically={false} flipHorizontally={false} />
      {/* Again Dinosaurs */}
      <AnimatedObject id="spinosaurus-reddish-pink" zIndex={2} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/323a4974597569.5c34d66faeb11.gif" width="15" height="auto" bottom={10} delay={1000} duration={9000} flipVertically={true} flipHorizontally={false} />
      <AnimatedObject id="velociraptor-orange-1" zIndex={3} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c6568274597569.5c34d66fb0015.gif" width="12" height="auto" bottom={8} delay={3000} duration={12000} flipVertically={true} flipHorizontally={false} />
      <AnimatedObject id="parasaurolophus-one-horn-pink-dino-1" zIndex={4} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/15055674597569.5c34d66faf1ed.gif" width="18" height="auto" bottom={6} delay={5800} duration={8000} flipVertically={true} flipHorizontally={false} />
      <AnimatedObject id="dino-dodgerblue" zIndex={5} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8ff8db74597569.5c34d66faf4dd.gif" width="14" height="auto" bottom={4} delay={1000} duration={6000} flipVertically={true} flipHorizontally={false} />
      <AnimatedObject id="stegosaurus-skyblue" zIndex={6} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6e9c1e74597569.5c34d66faeedb.gif" width="18" height="auto" bottom={2} delay={0} duration={7000} flipVertically={true} flipHorizontally={false} />
      {/* Trees */}
      <AnimatedObject id="tree-2" zIndex={7} src="https://www.pngkey.com/png/full/176-1761454_transparent-tree-flower-cartoons-pictures-png-transparent-cartoon.png" width="15" height="auto" bottom={0} delay={0} duration={5500} flipVertically={false} flipHorizontally={false} />
      <AnimatedObject id="tree-3" zIndex={7} src="https://www.pngkey.com/png/full/176-1761454_transparent-tree-flower-cartoons-pictures-png-transparent-cartoon.png" width="15" height="auto" bottom={0} delay={700} duration={5500} flipVertically={false} flipHorizontally={false} />
      {/* Rock-2 */}
      <AnimatedObject id="rock-3" zIndex={8} src="https://www.pinclipart.com/picdir/big/567-5679213_angle-hand-headgear-snowy-rock-clipart-png-transparent.png" width="13" height="auto" bottom={-5} delay={3000} duration={5500} flipVertically={false} flipHorizontally={false} />
    </Fragment>
  );
}

export default App;
