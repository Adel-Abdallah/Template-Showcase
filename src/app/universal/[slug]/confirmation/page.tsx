import React from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Package } from 'lucide-react';
import { loadThemeData } from '../../../../shared/utils/themeLoader';

export default async function ConfirmationPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);
    const styles = themeData ? themeData.styles : {};

    return (
        <div className={styles.container} style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <div style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '3rem',
                borderRadius: '24px',
                textAlign: 'center',
                maxWidth: '500px',
                border: '1px solid rgba(128,128,128,0.2)'
            }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(75, 181, 67, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto',
                    color: '#4bb543'
                }}>
                    <CheckCircle size={40} />
                </div>

                <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Order Confirmed!</h1>
                <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '2rem', lineHeight: '1.6' }}>
                    Thank you for your purchase. Your order <strong>#ORD-NEW-123</strong> has been received and is being processed.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Link href={`/universal/${slug}/orders`} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.8rem',
                        padding: '1rem 2rem',
                        background: '#333', // Theme dynamic? using standard dark for now or relying on css
                        color: 'white',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        transition: 'transform 0.2s'
                    }}>
                        <Package size={20} />
                        Track Order Progress
                    </Link>

                    <Link href={`/universal/${slug}`} style={{
                        opacity: 0.7,
                        textDecoration: 'underline',
                        marginTop: '0.5rem'
                    }}>
                        Return to Store
                    </Link>
                </div>
            </div>
        </div>
    );
}
