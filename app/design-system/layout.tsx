import React from 'react';
import Link from 'next/link';

export default function DesignSistemLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: '#fafbfc' }}>
      <nav style={{ padding: '16px 32px', borderBottom: '1px solid #eee', marginBottom: 32 }}>
        <Link href="/" style={{ marginRight: 24, fontWeight: 600 }}>Home</Link>
        <Link href="/design-system/guide" style={{ marginRight: 24, fontWeight: 600 }}>Guide</Link>
        <Link href="/design-system/colors" style={{ marginRight: 24 }}>Colors</Link>
        <Link href="/design-system/typography" style={{ marginRight: 24 }}>Typography</Link>
        <Link href="/design-system/buttons" style={{ marginRight: 24 }}>Buttons</Link>
        <Link href="/design-system/effects" style={{ marginRight: 24 }}>Effects</Link>
        <Link href="/design-system/icons">Icons</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
} 