import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
    
    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        transition: all 0.40s linear;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        color: ${({ theme }) => theme.text};
        transition: all 0.40s linear;
    }

    a {
        color: ${({ theme }) => theme.text};
        transition: all 0.40s linear;
    }

    .slider.round {
        background-color: ${({ theme }) => theme.text};
    }

    .slider.round:before {
        background-color: ${({ theme }) => theme.background};
    }

`
