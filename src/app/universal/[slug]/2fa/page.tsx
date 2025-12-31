import React from 'react';
import AuthTemplate from '../../../../shared/templates/AuthTemplate';
import Input from '../../../../shared/components/ui/Input';
import Button from '../../../../shared/components/ui/Button';
import { loadThemeData } from '../../../../shared/utils/themeLoader';

export default async function TwoFactorPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    return (
        <AuthTemplate
            slug={slug}
            themeConfig={themeData?.config}
            title="Two-Factor Authentication"
            subtitle="Enter the code sent to your device."
            footerLink={{ text: "Didn't receive code?", label: "Resend", href: "#" }}
        >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    {/* Simulating 4 digits input */}
                    {[1, 2, 3, 4].map(i => (
                        <Input key={i} style={{ width: '60px', height: '60px', textAlign: 'center', fontSize: '1.5rem' }} maxLength={1} />
                    ))}
                </div>

                <Button size="lg" fullWidth style={{ marginTop: '0.5rem' }}>
                    Verify
                </Button>
            </form>
        </AuthTemplate>
    );
}
