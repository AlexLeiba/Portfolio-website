/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    cssnano: {
      preset: [
        "default",
        {
          discardUnused: false,
          reduceIdents: false,
          normalizeWhitespace: false,
        },
      ],
    },
  },
};

export default config;
