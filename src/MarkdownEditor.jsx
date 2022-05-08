import React from 'react';
import styled from 'styled-components';

export default function MarkdownEditor({ markdown, handleChange }) {
  return (
    <Wrapper>
      <Heading>Input</Heading>
      <TextArea value={markdown} onChange={handleChange} rows="10" cols="50" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: clamp(500px, 100vw, 100%);
`;
const Heading = styled.h1`
  text-align: center;
  border-radius: 15px;
  background-color: hsl(0, 0%, 95%);
`;

const TextArea = styled.textarea`
  min-width: 100%;
  min-height: 100%;
  font-size: 1rem;
  border: none;
`;
