const { ace } = window;

const JavaScriptMode = ace.require('ace/mode/javascript').Mode;

export default function createEditor(id) {
  function myEditor(value) {
    if (typeof value !== 'undefined') {
      myEditor.ace.setValue(value, -1);
    }

    return myEditor.ace.getValue();
  }

  myEditor.ace = ace.edit(id);
  myEditor.ace.$blockScrolling = Infinity;
  myEditor.ace.session.setMode(new JavaScriptMode());
  myEditor.ace.setOptions({
    fontSize: '14px',
    tabSize: 2,
    useSoftTabs: true
  });

  return myEditor;
}
