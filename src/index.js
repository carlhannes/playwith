import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-javascript';
import lq from 'litequery';

import './style.less';

import createEditor from './editor';

let leftEditor;
// let rightEditor;

console.log('Hey! Im playwith');

lq(document).on('DOMContentLoaded', () => {
  leftEditor = createEditor('editor-left');

  lq('#editor-left').on('keyup', () => {
    console.log(leftEditor());
  });
});
