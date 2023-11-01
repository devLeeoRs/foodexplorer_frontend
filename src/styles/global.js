import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing: border-box;

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #000A0F; /* Cor de fundo do trilho */
}
::-webkit-scrollbar-thumb {
 
  background: #750310; 
}


}

:root {
  font-size: 65.5%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-text-size-adjust: 100%;
}

body {
  overflow: hidden;
  font-family: 'Roboto',sans-serif;
  font-size: clamp(1.2rem, 0.394vw + 1.033rem, 1.6rem);
  background: ${({ theme }) => theme.COLORS.DARK_400}
}

a{
    text-decoration: none;
  }

  button,a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover,a:hover {
    filter: brightness(0.9);
  }

  @media(max-width:425px) {
    ::-webkit-scrollbar {
  width: 0px;
}
  }
`;
