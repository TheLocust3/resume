import { injectGlobal } from 'emotion';

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        position: relative;

        font-family: "Trebuchet MS", Arial, sans-serif;
    }

    h1 {
        font-family: 'Times New Roman', Times, serif;
        font-size: 48px;
        font-weight: 700;

        margin: 0;
    }

    h2 {
        font-size: 26px;
        font-weight: 500;

        margin: 0;
    }
`;
