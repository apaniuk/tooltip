# @awsmdruce/tooltip

<a href="LICENSE">
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="Software License" />
</a>
<a href="https://github.com/thgh/rollup-plugin-scss/issues">
  <img src="https://img.shields.io/github/issues/thgh/rollup-plugin-scss.svg" alt="Issues" />
</a>
<a href="https://npmjs.org/package/rollup-plugin-scss">
  <img src="https://img.shields.io/npm/v/rollup-plugin-scss.svg?style=flat-squar" alt="NPM" />
</a>
<a href="https://github.com/thgh/rollup-plugin-scss/releases">
  <img src="https://img.shields.io/github/release/thgh/rollup-plugin-scss.svg" alt="Latest Version" />
</a>

🎉 @awsmdruce/tooltip allows you to add simple tooltip to your components with ease-peasy.

## Installation

```
$ npm install @awsmdruce/tooltip
```
or
```
$ yarn add @awsmdruce/tooltip
```

## Usage

```jsx
import React from 'react';

import { Tooltip } from '@awsmdruce/tooltip';

const App = () => (
  <div>
      <Tooltip
          position='top'
          content={`I'm just button with tooltip!`}
      >
          <button onClick={() => alert('Hello tooltip!')}>Trigger button</button>
      </Tooltip>
  </div>
)
```

## API

| Property    | Type                             | Default   | Description                                    |
|-------------|----------------------------------|-----------|------------------------------------------------|
| children    | ReactNode / undefined            | undefined | Trigger element. For example some svg icon.    |
| className   | string / undefined               | undefined | Class for tooltip content.                     |
| content     | ReactNode / undefined            | undefined | Tooltip content.                               |
| showOnHover | boolean                          | true      | Show tooltip when `children` is been hovering. |
| showOnClick | boolean                          | false     | Show tooltip when `children` is clicked.       |
| position    | 'top', 'bottom', 'right', 'left' | 'bottom'  | Position of tooltip when it is shown.          |
