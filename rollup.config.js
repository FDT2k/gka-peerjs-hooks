/**
 * Adapted from https://github.com/reduxjs/redux/blob/master/rollup.config.js
 * Copyright (c) 2015-present Dan Abramov
 */
 /*
 "bundle:preact":"npx rollup -e react,preact,preact/hooks -f cjs --exports named --preserveModules -d dist/preact/cjs dist/preact/*.js",
 "bundle:react":"npx rollup -e react,preact,preact/hooks -f cjs --exports named --preserveModules -d dist/react/cjs dist/react/*.js",
 */

 export default [
   {
     input: 'dist/react/export.js',
     output: {
       file: 'dist/react/cjs/index.js',
       compact:  true ,
       format: 'cjs'
     },
     external: [ '@geekagency/composite-js','react','peerjs' ]
  },
    {
     input: 'dist/preact/export.js',
     output: {
       file: 'dist/preact/cjs/index.js',
       compact:  true ,
       format: 'cjs'
     },
     external: [ '@geekagency/composite-js','preact','preact/hooks','peerjs' ]
   }
];
