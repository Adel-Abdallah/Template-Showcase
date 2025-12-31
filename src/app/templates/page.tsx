import React from 'react';
import Link from 'next/link';
import TemplatesGrid from '../../components/TemplatesGrid';

export default function TemplatesShowcasePage() {
    return (
        <div style={{ minHeight: '100vh', background: '#000', color: '#fff', padding: '0' }}>
            {/* Header */}
            <header style={{
                padding: '1.5rem 2rem',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', color: '#fff' }}>
                    Template Showcase
                </Link>
                <nav style={{ display: 'flex', gap: '2rem' }}>
                    <Link href="/components" style={{ color: '#aaa', textDecoration: 'none' }}>Components</Link>
                    <Link href="/sections" style={{ color: '#aaa', textDecoration: 'none' }}>Sections</Link>
                    <Link href="/pages" style={{ color: '#aaa', textDecoration: 'none' }}>Pages</Link>
                </nav>
            </header>

            <main style={{ padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>All Templates</h1>
                        <p style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
                            Explore our complete collection of 10 modern e-commerce designs.
                        </p>
                    </div>

                    <TemplatesGrid />
                </div>
            </main>
        </div>
    );
}
