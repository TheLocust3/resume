import { injectGlobal } from 'emotion';

import { colors } from './constants';

injectGlobal`
    body, #root {
        margin: 0;
        padding: 0;
        width: 8.5in;
        height: 11in;
        position: relative;

        font-family: 'Roboto', sans-serif;
        font-size: 12px;
    }

    h1 {
        font-family: 'Roboto Slab', serif;
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
        padding-left: 20px;
    }

    p i {
        color: ${colors.textBlack}
    }
    
    br {
        content: "";
        margin: 1em;
        display: block;
        font-size: 24%;
    }
`;
