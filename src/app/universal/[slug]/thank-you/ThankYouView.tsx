'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';
import ThemeWrapper from '../../../../shared/components/ThemeWrapper';
import Button from '../../../../shared/components/ui/Button';

interface ThankYouViewProps {
    slug: string;
    themeConfig: any;
}

export default function ThankYouView({ slug, themeConfig }: ThankYouViewProps) {
    return (
        <ThemeWrapper config={themeConfig}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', padding: '2rem', textAlign: 'center' }}>
                <CheckCircle size={80} color="var(--color-success, #4bb543)" style={{ marginBottom: '1.5rem' }} />
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Thank You!</h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '2rem', maxWidth: '500px' }}>
                    Your order has been placed successfully. We will send you an email confirmation shortly.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Button
                        variant="outline"
                        onClick={() => window.location.href = `/universal/${slug}/orders`}
                    >
                        View Orders
                    </Button>
                    <Button
                        onClick={() => window.location.href = `/universal/${slug}`}
                    >
                        Continue Shopping
                    </Button>
                </div>
            </div>
        </ThemeWrapper>
    );
}
