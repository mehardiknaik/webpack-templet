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
declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';

/**
 * Module declaration for MDX files.
 * Allows importing MDX files as modules.
 */
declare module '*.mdx' {
  import type { MDXProps } from 'mdx/types';
  import type { JSX } from 'react';

  export default function MDXContent(props: MDXProps): JSX.Element;
  export const meta: Record<string, unknown>;
}
/**
 * Module declaration for MD files.
 * Allows importing MD files as modules.
 */
declare module '*.md' {
  import type { MDXProps } from 'mdx/types';
  import type { JSX } from 'react';

  export default function MDXContent(props: MDXProps): JSX.Element;
  export const meta: Record<string, unknown>;
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
