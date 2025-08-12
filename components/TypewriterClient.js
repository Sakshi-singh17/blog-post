"use client";
import Typewriter from 'typewriter-effect';

export default function TypewriterClient(words) {
  return (
    <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Code. Learn. Conquer.')
            .callFunction(() => {
              console.log('String typed out!');
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
        }}
      />
  );
} 