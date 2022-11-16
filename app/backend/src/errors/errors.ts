export enum ErrorTypes {
  entityNotFound = 'entityNotFound',
}

type ErrorResponseObject = {
  error: string;
  httpStatus: number
};

export type ErrorCatalog = Record<ErrorTypes, ErrorResponseObject>;

export const errorCatalog: ErrorCatalog = {
  entityNotFound: {
    error: 'Object not found',
    httpStatus: 404,
  },
};
