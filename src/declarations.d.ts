/**
 * Module declaration for CSS and SCSS files.
 * Allows importing CSS and SCSS files as modules.
 */
declare module '*.css';
declare module '*.scss';

/**
 * Module declaration for image files.
 * Allows importing images as modules.
 */
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.gif' {
  const src: string;
  export default src;
}
declare module '*.webp' {
  const src: string;
  export default src;
}
declare module '*.svg' {
  const src: string;
  export default src;
}

/**
 * Module declaration for inline query.
 * Allows importing images as inline modules.
 * Returns base64 data:image/... URI string.
 */
declare module '*?inline' {
  const src: string;
  export default src;
}

/**
 * Module declaration for url query.
 * Allows importing images as url modules.
 * Returns resolved public file URL string.
 */
declare module '*?url' {
  const src: string;
  export default src;
}
/**
 * Module declaration for no-inline query.
 * Allows importing images as no-inline modules.
 * Returns resolved public file URL string.
 */
declare module '*?no-inline' {
  const src: string;
  export default src;
}

/**
 * Module declaration for raw query.
 * Allows importing files as raw modules.
 * Returns raw file text content as a string.
 */
declare module '*?raw' {
  const content: string;
  export default content;
}

/**
 * Module declaration for svg with react query.
 * Allows importing svg files as react components.
 */
declare module '*.svg?react' {
  import type { FunctionComponent, SVGProps } from 'react';
  const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

/**
 * Global variable.
 * Public path for Webpack.
 * This is set by Webpack at build time.
 */
declare const __webpack_public_path__: string;

/**
 * Global variable.
 * True when in development mode.
 */
declare const __DEV__: boolean;

/**
 * Global variable.
 * True when in production mode.
 */
declare const __PROD__: boolean;

/**
 * Global variable.
 * Build date in ISO format.
 */
declare const __BUILD_DATE__: string;

/**
 * Global variable.
 * Application version from package.json.
 */
declare const __VERSION__: string;

interface Window {
  /**
   * Global environment variables.
   * This object is access from window context.
   */
  __env: {
    /**
     * Application name.
     */
    NAME?: string;
  };
}
