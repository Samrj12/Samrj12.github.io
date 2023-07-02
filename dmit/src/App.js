import { useEffect, useRef } from 'react';
import Form from './components/Form';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import VideoPlayer from './components/VideoPlayer';

function App() {

  const videoRef = useRef(null) 
  const formRef = useRef(null) 
  const reviewsRef = useRef(null) 

  return (
    <>
    <Navbar refs={[videoRef, formRef, reviewsRef]} ></Navbar>
    <Intro className="App-header"></Intro>
    <VideoPlayer ref={videoRef}></VideoPlayer>
    <Form ref={formRef}></Form>
    <Reviews ref={reviewsRef}></Reviews>
    </>
  );
}

export default App;
