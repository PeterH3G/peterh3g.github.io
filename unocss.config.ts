import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
} from "unocss";

export default defineConfig({
  shortcuts: [
    // Classes for re-use
    // ------------------------------------------------------------------------
    ["bg-main", "bg-gray-900"],
    ["root", "text-white"],
    ["centered", "sm:max-w-3xl m-auto px-6"],
    ["flex-centered", "flex justify-center items-center"],

    // Application Components
    // ------------------------------------------------------------------------
    // Navigation component
    ["nav-root", "root bg-main text-sm sm:text-base"],
    ["nav-content", "centered py-4"],
    ["nav-link", "text-gray-500 hover:text-green-400"],
    ["nav-button", "p-2 mr-2 sm:mr-0 sm:ml-2 text-gray-500 hover:text-green-400 bg-gray-800 rounded-md border-none transition duration-150 ease-in-out"],
    ["nav-button-i", "nav-link text-xl"],
    ["nav-link-base", "nav-link ml-2"],
    ["nav-link-responsive", "nav-link hover:bg-green-400 hover:bg-opacity-10"],

    // Header component
    ["header-root", "root bg-main"],
    ["header-content", "centered"],
    ["header-title", "text-green-400 text-xl"],

    // Main component
    ["main-root", "root"],

    // Footer component
    ["footer-root", "root bg-main text-xs"],
    ["footer-content", "centered sm:flex sm:justify-center sm:items-center"],
    ["footer-section", "bg-gray-800 rounded"],
    ["footer-item", "border-gray-700"],
    ["footer-link", ""],
    ["footer-link-icon", "text-size-2xl mr-2"],
    ["footer-link-ext", "text-size-2xl"],
    ["footer-disclaimer", "flex-centered"],

    // Modal & Layout components
    // ------------------------------------------------------------------------
    ["modal-outer", "bg-black bg-opacity-80"],
    ["modal-inner", "bg-white bg-opacity-80 rounded"],
    ["model-title", "text-2xl"],
    ["modal-close-i", "text-4xl rounded"],
    ["article-root", "centered"],
    ["article-title", "text-2xl"],

  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: "DM Sans",
        serif: "DM Serif Display",
        mono: "DM Mono",
      },
    }),
  ],
  theme: {
    extend: {},
    fontSize: {
      xs: ".75rem",
      sm: ".8rem",
      base: ".9rem",
      lg: "1rem",
      xl: "1.2rem",
    },
  },
});
