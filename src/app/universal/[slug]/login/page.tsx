import React from 'react';
import AuthTemplate from '../../../../shared/templates/AuthTemplate';
import Input from '../../../../shared/components/ui/Input';
import Button from '../../../../shared/components/ui/Button';
import { loadThemeData } from '../../../../shared/utils/themeLoader';
import Link from 'next/link';

export default async function LoginPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    // We load theme data to check validity, and maybe pass classes if needed
    // But AuthTemplate handles most layout.

    // In a real app we would get specific colors from config or CSS
    const themeData = await loadThemeData(slug);

    return (
        <AuthTemplate
            slug={slug}
            themeConfig={themeData?.config}
            title="Welcome Back"
            subtitle="Please enter your details to sign in."
            footerLink={{ text: "Don't have an account?", label: "Sign up", href: `/universal/${slug}/signup` }}
        >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <Input label="Email" type="email" placeholder="Enter your email" fullWidth />
                <div>
                    <Input label="Password" type="password" placeholder="••••••••" fullWidth />
                    <div style={{ textAlign: 'right', marginTop: '0.5rem' }}>
                        <Link href={`/universal/${slug}/forgot-password`} style={{ fontSize: '0.85rem', opacity: 0.7, color: 'inherit' }}>
                            Forgot password?
                        </Link>
                    </div>
                </div>

                <Button size="lg" fullWidth style={{ marginTop: '0.5rem' }}>
                    Sign In
                </Button>
            </form>
        </AuthTemplate>
    );
}
