'use client'

import { ThemeProvider } from '@/components/global/theme-provider'
import { SessionProvider } from 'next-auth/react'

const RootProvider =({ children }: { children: React.ReactNode }) => {
	return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
}