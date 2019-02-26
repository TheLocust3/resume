import { injectGlobal } from 'emotion';

import { colors } from './constants';

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        width: 8.5in;
        height: 11in;
        position: relative;

        font-family: "Trebuchet MS", Arial, sans-serif;
        font-size: 11px;
    }

    h1 {
        font-family: 'Playfair Display', serif;
        font-size: 48px;
        font-weight: 500;

        margin: 0;
    }

    h2 {
        font-size: 32px;
        font-weight: 500;

        margin: 0;
    }

    h3 {
        font-size: 24px;
        font-weight: 500;

        margin: 0;
    }

    h4 {
        font-size: 18px;
        font-weight: 500;

        margin: 0;
    }

    ul {
        margin-top: 0;
        margin-bottom: 0;
    }

    p i {
        color: ${colors.textBlack}
    }
`;
