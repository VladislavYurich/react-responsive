export interface IMediaQuery{
    query: string; 
}

export interface IMediaQueryProps {
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    orientation?: string;
    minResolution?: TResolutionValue | number;
    maxResolution?: TResolutionValue | number;
    children: React.ReactNode | ((matches: boolean) => React.ReactNode);
  }

export type TResolutionUnits = "dppx";
export type TResolutionValue = `${number}${TResolutionUnits}`;

