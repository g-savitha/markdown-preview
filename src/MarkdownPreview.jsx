import React from 'react';
import styled from 'styled-components';
import { marked } from 'marked';
export default function MarkdownPreview({ markdown }) {
  return (
    <Wrapper>
      <Heading>Preview</Heading>
      <Preview dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: clamp(500px, 100vw, 100%);
  display: flex;
  flex-direction: column;
  flex: 1 0 50%;
`;
const Heading = styled.h1`
  text-align: center;
  border-radius: 15px;
  background-color: hsl(0, 0%, 95%);
`;

const Preview = styled.div`
  background-color: hsl(0, 0%, 95%);
  min-height: 100%;
  padding-left: 8px;
  font-size: 1rem;
`;
