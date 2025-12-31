import React from 'react';
import AuthTemplate from '../../../../shared/templates/AuthTemplate';
import Input from '../../../../shared/components/ui/Input';
import Button from '../../../../shared/components/ui/Button';
import { loadThemeData } from '../../../../shared/utils/themeLoader';

export default async function SignupPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    return (
        <AuthTemplate
            slug={slug}
            themeConfig={themeData?.config}
            title="Create Account"
            subtitle="Start your journey with us today."
            footerLink={{ text: "Already have an account?", label: "Sign in", href: `/universal/${slug}/login` }}
        >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <Input label="First Name" placeholder="John" fullWidth />
                    <Input label="Last Name" placeholder="Doe" fullWidth />
                </div>
                <Input label="Email" type="email" placeholder="name@example.com" fullWidth />
                <Input label="Password" type="password" placeholder="Create a password" fullWidth />

                <Button size="lg" fullWidth style={{ marginTop: '0.5rem' }}>
                    Sign Up
                </Button>
            </form>
        </AuthTemplate>
    );
}
