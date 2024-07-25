
"use client";
import DarajState from "./daraj/mystate";
export function Provider({ children }) {
    return <DarajState>{children} </DarajState>
  }
  