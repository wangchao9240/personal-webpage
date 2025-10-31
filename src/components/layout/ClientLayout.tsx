'use client';

import React from 'react';
import { Header } from './Header';
import { FloatingNav } from './FloatingNav';

/**
 * ClientLayout Component
 * 
 * Wraps the fixed UI elements (Header and FloatingNav) that need access to client-side hooks.
 * This component is client-side rendered and has access to the ThemeProvider context.
 * 
 * @example
 * ```tsx
 * <ClientLayout>
 *   <YourContent />
 * </ClientLayout>
 * ```
 */
export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Fixed Header with Contact Icons and Theme Toggle */}
      <Header />

      {/* Floating Navigation Dots */}
      <FloatingNav />

      {/* Page Content */}
      {children}
    </>
  );
}

