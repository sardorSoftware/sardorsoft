"use client"
import { ThemeProvider } from '@/components/global/theme-provider';
import React from 'react';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default RootProvider;
