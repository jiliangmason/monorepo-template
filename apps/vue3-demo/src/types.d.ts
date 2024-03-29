/** 任意类型 */
declare type IAnyObject = Record<string, any | undefined>;

declare module 'postcss-px-to-viewport-8-plugin' {
  type Options = {
    unitToConvert: 'px' | 'rem' | 'cm' | 'em';
    viewportWidth: number;
    viewportHeight: number; // not now used; TODO: need for different units and math for different properties
    unitPrecision: number;
    viewportUnit: string;
    fontViewportUnit: string; // vmin is more suitable.
    selectorBlackList: string[];
    propList: string[];
    minPixelValue: number;
    mediaQuery: boolean;
    replace: boolean;
    landscape: boolean;
    landscapeUnit: string;
    landscapeWidth: number;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export default (options: Partial<Options>) => any;
}
