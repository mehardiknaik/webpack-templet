declare module "*.css" {
  const content: { [className: string]: string };
  export = content;
}

/**
 * Module declaration for image files.
 * Allows importing images as modules.
 */
declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

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
