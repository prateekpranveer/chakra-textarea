import React, { useState } from 'react';
import { Textarea, Button, Alert } from '@chakra-ui/react';

function Invalid() {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false); // Assume initially it's invalid

  const handleChange = (event) => {
    setValue(event.target.value);
    // Perform validation here
    setIsValid(event.target.value.length > 0); // Invalid if the input is empty
  };

  const handleSubmit = () => {
    if (isValid) {
      console.log("Data entered:", value);
    } else {
      console.log("Form is invalid. Cannot submit.");
    }
  };

  return (
    <>
    <p>Invalid</p>
      <Textarea value={value} onChange={handleChange} placeholder="Enter your text" border={!isValid && "3px solid red"} borderColor={isValid ? undefined : "red"} />
      <Button color={"white"} padding={"8px"} border={"none"} background={"crimson"} colorScheme='teal' size='md' onClick={handleSubmit}>Submit</Button>
      {!isValid && (
        <Alert color={'red'} status="error" borderRadius="md">
          Please enter valid text.
        </Alert>
      )}
    </>
  );
}

export default Invalid;
