import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --color-primary: #106cc8;
  --color-secondary: #ff9b08;
  --color-white: #fff;
  --radius: 5px;
  --shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
  --size-big: 1rem;
  --size-normal: .85rem;
  --weight-bold: 900;
  --weight-normal: 300;
}

::-webkit-input-placeholder {
  color: var(--color-white);
  font-size: 1rem;
  font-weight: 600;
  opacity: 1;
}
::-moz-placeholder {
  color: var(--color-white);
  font-size: 1rem;
  font-weight: 600;
  opacity: 1;
}
:-ms-input-placeholder {
  color: var(--color-white);
  font-size: 1rem;
  font-weight: 600;
  opacity: 1;
}
::-ms-input-placeholder {
  color: var(--color-white);
  font-size: 1rem;
  font-weight: 600;
  opacity: 1;
}
::placeholder {
  color: var(--color-white);
  font-size: 1rem;
  font-weight: 600;
  opacity: 1;
}

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  font-family: Helvetica, -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  font-size: 100%;
}

[class$='-option'] input[type='checkbox'] {
  order: 2;
}

.filter button + div {
  width: 100%;
}

/**
*** SIMPLE GRID
*** (C) ZACH COLE 2016
**/

/* ==== GRID SYSTEM ==== */

.container {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.row {
  position: relative;
  width: 100%;
}

.row [class^='col'] {
  float: left;
  margin: 0.5rem 2%;
  min-height: 0.125rem;
}

.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12 {
  width: 96%;
}

.col-1-sm {
  width: 4.33%;
}

.col-2-sm {
  width: 12.66%;
}

.col-3-sm {
  width: 21%;
}

.col-4-sm {
  width: 29.33%;
}

.col-5-sm {
  width: 37.66%;
}

.col-6-sm {
  width: 46%;
}

.col-7-sm {
  width: 54.33%;
}

.col-8-sm {
  width: 62.66%;
}

.col-9-sm {
  width: 71%;
}

.col-10-sm {
  width: 79.33%;
}

.col-11-sm {
  width: 87.66%;
}

.col-12-sm {
  width: 96%;
}

.row::after {
  content: '';
  display: table;
  clear: both;
}

.hidden-sm {
  display: none;
}

@media only screen and (min-width: 33.75em) {
  /* 540px */
  .container {
    width: 80%;
  }
}

@media only screen and (min-width: 45em) {
  /* 720px */
  .col-1 {
    width: 4.33%;
  }

  .col-2 {
    width: 12.66%;
  }

  .col-3 {
    width: 21%;
  }

  .col-4 {
    width: 29.33%;
  }

  .col-5 {
    width: 37.66%;
  }

  .col-6 {
    width: 46%;
  }

  .col-7 {
    width: 54.33%;
  }

  .col-8 {
    width: 62.66%;
  }

  .col-9 {
    width: 71%;
  }

  .col-10 {
    width: 79.33%;
  }

  .col-11 {
    width: 87.66%;
  }

  .col-12 {
    width: 96%;
  }

  .hidden-sm {
    display: block;
  }
}

@media only screen and (min-width: 60em) {
  /* 960px */
  .container {
    width: 75%;
    max-width: 60rem;
  }
}
`;
