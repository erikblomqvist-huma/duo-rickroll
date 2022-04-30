import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

// Import assets
import 'modern-normalize/modern-normalize.css';
import woff2 from '../public/fonts/product-sans-regular.woff2';
import woff from '../public/fonts/open-sans-v16-latin-regular.woff';
// import outgoing from '../public/audio/outgoing.ogg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100vh;
  padding: 70px 0;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Heading = styled.h1`
  color: white;
  font-size: 4em;
  font-weight: 400;
`

const Subheading = styled.h2`
  color: #a9a9a9;
  font-weight: 400;
  font-size: 2em;
  margin-bottom: 0;
`

const Buttons = styled.div`

`

const Button = styled.button`
  cursor: pointer;

  margin: 0 20px;
  border: 0;
  border-radius: 28px;
  height: 56px;
  padding: 0 40px;

  font-size: 1.25em;

  &.decline {
    background-color: #dbdbdc;

    color: #4384f4;
  }

  &.accept {
    background-color: #4384f4;

    color: white;
  }

`

// Global Style
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
        url('${woff2}') format('woff2'),
        url('${woff}') format('woff');
  }

  body {
    font-family: Open Sans, Segoe UI, Tahoma, sans-serif !important;
    background: #0d0d12;
    color: #fff;
    padding: 0;
    line-height: 1.8em;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word
  }
`;


// Main page
const App = () => {
  const Music = new Audio('https://www.gstatic.com/duo/desktop/sounds/outgoing.ogg')

  const startAudio = () => {
    Music.loop = true
    Music.play()
  }
  
  const rickRollMe = () => {
    Music.pause()
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank', 'noopener,noreferrer')
  }

	return (
		<Container>
      <Header>
        <Subheading>Duo video call</Subheading>
        <Heading onClick={startAudio}>David Vickhoff</Heading>
      </Header>
      <Buttons>
        <Button onClick={rickRollMe} className="decline">Decline</Button>
        <Button onClick={rickRollMe} className="accept">Accept</Button>
      </Buttons>
			<GlobalStyle/>
		</Container>
	);
};

export default App;
