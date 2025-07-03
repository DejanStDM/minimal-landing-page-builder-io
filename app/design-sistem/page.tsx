import React from 'react';
import Link from 'next/link';

const pages = [
  { name: 'Guide', path: '/design-sistem/guide' },
  { name: 'Colors', path: '/design-sistem/colors' },
  { name: 'Typography', path: '/design-sistem/typography' },
  { name: 'Buttons', path: '/design-sistem/buttons' },
  { name: 'Effects', path: '/design-sistem/effects' },
  { name: 'Icons', path: '/design-sistem/icons' },
];

export default function DesignSistemHome() {
  return (
    <div style={{ padding: 32 }}>
      <h1>Design System</h1>
      <p>Welcome to the design system. Explore the following sections:</p>
      <ul style={{ marginTop: 24 }}>
        {pages.map((page) => (
          <li key={page.name} style={{ marginBottom: 12 }}>
            <Link href={page.path} style={{ color: '#0070f3', textDecoration: 'underline', fontSize: 18 }}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 