import React, { useState } from 'react';
import { Textarea, Button } from '@chakra-ui/react';

function Controlled() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Data entered:", value);
  };

  return (
    <>
    <p>Controlled</p>
      <Textarea value={value} onChange={handleChange} placeholder="Enter your text" />
      <Button color={"white"} padding={"8px"} border={"none"} background={"green"} onClick={handleSubmit} >Submit</Button>
    </>
  );
}

export default Controlled;
