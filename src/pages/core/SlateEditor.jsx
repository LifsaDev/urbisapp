import React, { useState, useCallback, useMemo } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

const SlateEditor = ({ onChange, initialValue = '' }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState(() => {
    if (initialValue) {
      return [
        {
          type: 'paragraph',
          children: [{ text: initialValue }],
        },
      ];
    }
    return [
      {
        type: 'paragraph',
        children: [{ text: '' }],
      },
    ];
  });

  const handleChange = useCallback((newValue) => {
    setValue(newValue);
    onChange(newValue.map(n => n.children.map(c => c.text).join('')).join('\n'));
  }, [onChange]);

  const renderElement = useCallback(({ attributes, children, element }) => {
    switch (element.type) {
      case 'paragraph':
        return <p {...attributes}>{children}</p>;
      default:
        return <p {...attributes}>{children}</p>;
    }
  }, []);

  return (
    <Slate editor={editor} value={value} onChange={handleChange}>
      <Editable
        renderElement={renderElement}
        placeholder="Enter some text..."
        style={{ border: '1px solid black', padding: '5px', minHeight: '100px' }}
      />
    </Slate>
  );
};

export default SlateEditor;