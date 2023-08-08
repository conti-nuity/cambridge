import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0;
      background-color: #F5F8FC;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    a,
    button, li, a, span, small, label {
    margin: 0;
    font-family: Source Sans Pro, sans-serif;
    }

    a {
    color: #000;
    text-decoration: none;
    }

    button .gm-ui-hover-effect {
    margin: 5px !important;
    }

    textarea::placeholder {
    color: #aab5be;
    padding-bottom: 10px;
    }

    hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
    }
`;
