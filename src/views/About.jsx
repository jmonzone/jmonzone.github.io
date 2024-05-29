import React from 'react';

import TextBlock from './TextBlock';

export default function About() {
  const content = [
    'I am an XR developer based in New York City. I enjoy building video games, interactive web applications and immersive AR/VR experiences. My skillset primarily includes using tools such as Unity, Three.js, and React. I am currently employed full time for a media production agency in healthcare, where I lead development on our WebXR projects. I am also involved in WebGL projects as a freelance developer.',
    'I graduated with a B.S. Degree is in Computer Science and Mathematics from the Macaulay Honors College (CSI) in New York City, where I built VR visualization tools as a research assistant. I was also involved in a fellowship with the RLab, an AR/VR research facility; and worked for a VR forensics startup, where I built various navigation and measurement tools.',
  ];

  return (
    <div className={`about`}>
      <img className="about-headshot" src="/assets/images/headshot.png" />
      <div className="about-text">
        <div className="about-header">About Johnnan</div>
        {content.map(text => (
          <TextBlock key={text.slice(-5)} text={text} />
        ))}
      </div>
    </div>
  );
}
