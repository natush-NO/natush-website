import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  border: none;

  box-sizing: border-box;
}
*::before,
*::after {
  display: inline-block;
}
a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
  border-radius: 10px;
  box-shadow: 0 4px 3px 1px rgba(0, 0, 0, 0.3);

}
li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}
html {
  font-size: 10px;
}
  
body {
  font-family: 'Arima', sans-serif;
  line-height: 1;
  font-weight: 600;
  color: rgb(101, 180, 223);
  color: white;
  min-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-image: url("background/background.webp");
  background-size: cover;
  

&::after {
  content: ""; 
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1; 
}

input,
button,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  background-color: transparent;
}
input,
textarea {
  width: 100%;
}

label {
  display: inline-block;
}

button {
  cursor: pointer;
  padding: 15px;
  text-align: center;
  overflow: hidden;
  background-color: rgb(24, 101, 134);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  transition: all 0.8s ease;

  @media (hover: hover) {
    &:hover {
      color: blue;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
}

select,
option {
  cursor: pointer;
}
input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
  appearance: none;
}

input[type="number"] {
  appearance: textfield; 
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: auto; 
  }

  &::-moz-appearance {
    appearance: auto; 
  }
`;
