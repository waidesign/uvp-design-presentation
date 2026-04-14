"use client";
import React from 'react';
import { Agentation } from 'agentation';

export default function AgentWrapper() {
  if (process.env.NODE_ENV !== "development") return null;
  // Temporarily disabled to resolve extension messaging errors
  return null; 
  // return <Agentation />;
}
