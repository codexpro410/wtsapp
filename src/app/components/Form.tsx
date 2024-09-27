import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
  } from '@chakra-ui/react'
  

  
  export default function Form() {
    return (
        <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type='email' />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    );
  }