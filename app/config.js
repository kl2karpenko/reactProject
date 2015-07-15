require.config({
  baseUrl: "app/",

  paths: {
    "react": "vendor/react/react-with-addons",
    "JSXTransformer": "vendor/react/JSXTransformer",
    "text": "vendor/react/text",
    "jsx": "vendor/react/jsx"
  },

  jsx: {
    fileExtension: '.jsx',
    harmony: true,
    stripTypes: true
  }
});