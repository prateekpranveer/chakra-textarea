import React from 'react';
import { Textarea } from '@chakra-ui/react';

function Resize() {
  return (
    <>
    <p>Resize Vertical</p>
    <Textarea resize="vertical" placeholder="Enter your text" />
    </>
  );
}

export default Resize;
