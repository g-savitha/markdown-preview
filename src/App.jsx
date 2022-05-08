import { useState } from 'react';
import styled from 'styled-components';

import MarkdownEditor from './MarkdownEditor';
import MarkdownPreview from './MarkdownPreview';

function App() {
  const defaultState = `
  # Heading level 1
  ## Heading level 2
  ### Heading level 3
  #### Heading level 4
  ##### Heading level 5
  ###### Heading level 6

  Here is the **bold text**.

  This text is _italicized_.

  This text is **_bold and italicized_**.

  - this is an unordered list

  1. ordered list item1
  2. ordered list item2

  \`\`\`
  console.log('this is a code block')
  \`\`\`

  [Learn more about markdown syntax](https://www.markdownguide.org/basic-syntax/)
  `;
  const [markdown, setMarkdown] = useState(defaultState);
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };
  return (
    <Wrapper>
      <Heading>Markdown Previewer</Heading>
      <ComponentWrapper>
        <MarkdownEditor markdown={markdown} handleChange={handleChange} />
        <MarkdownPreview markdown={markdown} />
      </ComponentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Heading = styled.h1`
  background-color: hsl(0, 0%, 95%);
  border-radius: 15px;
  width: fit-content;
`;

const ComponentWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
`;

export default App;
