const { ace } = window;

export default function createEditor(id) {
  function myEditor(value) {
    if (typeof value !== 'undefined') {
      myEditor.setValue(value);
    }

    return myEditor;
  }
}
