import { createContext } from "react";

export const createTypedContext = <T>(data: T) => createContext<T>(data);
