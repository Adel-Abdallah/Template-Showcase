import React from 'react';
import AuthTemplate from '../../../../shared/templates/AuthTemplate';
import Input from '../../../../shared/components/ui/Input';
import Button from '../../../../shared/components/ui/Button';
import { loadThemeData } from '../../../../shared/utils/themeLoader';

export default async function ForgotPasswordPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);

    return (
        <AuthTemplate
            slug={slug}
            themeStyles={themeData?.styles}
            title="Forgot Password?"
            subtitle="No worries, we'll send you reset instructions."
            footerLink={{ text: "Remember your password?", label: "Back to login", href: `/universal/${slug}/login` }}
        >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <Input label="Email" type="email" placeholder="Enter your registered email" fullWidth />

                <Button size="lg" fullWidth style={{ marginTop: '0.5rem' }}>
                    Reset Password
                </Button>
            </form>
        </AuthTemplate>
    );
}
