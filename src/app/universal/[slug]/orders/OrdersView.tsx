'use client';

import React from 'react';
import { Package, CheckCircle, Clock } from 'lucide-react';
import ThemeWrapper from '../../../../shared/components/ThemeWrapper';
import Badge from '../../../../shared/components/ui/Badge';

interface OrdersViewProps {
    slug: string;
    themeConfig: any;
}

export default function OrdersView({ slug, themeConfig }: OrdersViewProps) {
    const orders = [
        { id: '#ORD-1234', date: 'Dec 31, 2024', total: '$129.00', status: 'Processing', items: 3 },
        { id: '#ORD-0987', date: 'Dec 15, 2024', total: '$59.50', status: 'Delivered', items: 1 },
        { id: '#ORD-0456', date: 'Nov 28, 2024', total: '$299.99', status: 'Delivered', items: 4 },
    ];

    return (
        <ThemeWrapper config={themeConfig}>
            <div style={{ minHeight: '80vh', padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>Order History</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {orders.map((order, index) => (
                        <div key={order.id}
                            className={themeConfig?.cardStyle === 'blob' ? 'orders-blob' : ''}
                            style={{
                                padding: themeConfig?.cardStyle === 'blob' ? '2.5rem' : '2rem',
                                border: themeConfig?.cardStyle === 'blob' ? 'none' : '1px solid var(--border)',
                                borderRadius: themeConfig?.cardStyle === 'blob' ?
                                    (index % 2 === 0 ? '30% 70% 70% 30% / 30% 30% 70% 70%' : '70% 30% 30% 70% / 70% 70% 30% 30%')
                                    : 'var(--radius)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                background: 'var(--card-bg)',
                                flexWrap: 'wrap',
                                gap: '1rem',
                                boxShadow: themeConfig?.cardStyle === 'blob' ? '0 10px 30px rgba(135, 206, 235, 0.2)' : 'var(--shadow-md)',
                                transition: 'all 0.4s ease'
                            }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    background: 'var(--color-info-bg, rgba(59, 130, 246, 0.1))',
                                    color: 'var(--color-info, #3b82f6)'
                                }}>
                                    <Package size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{order.id}</h3>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>{order.date} • {order.items} Items</p>
                                </div>
                            </div>

                            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem', minWidth: '140px' }}>
                                <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--primary)' }}>{order.total}</p>

                                <Badge variant={order.status === 'Delivered' ? 'success' : 'warning'}>
                                    {order.status === 'Delivered' ? <CheckCircle size={14} /> : <Clock size={14} />}
                                    <span style={{ marginLeft: '0.4rem' }}>{order.status}</span>
                                </Badge>

                                {/* Progress Bar */}
                                <div style={{ width: '100%', height: '4px', background: 'rgba(128,128,128,0.2)', borderRadius: '2px', overflow: 'hidden', marginTop: '0.5rem' }}>
                                    <div style={{
                                        width: order.status === 'Delivered' ? '100%' : '40%',
                                        height: '100%',
                                        background: order.status === 'Delivered' ? 'var(--color-success)' : 'var(--color-warning)',
                                        transition: 'width 0.5s ease'
                                    }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>
            <style jsx>{`
                .orders-blob {
                    transition: all 0.4s ease;
                    animation: float 6s ease-in-out infinite;
                }
                .orders-blob:hover {
                    border-radius: 50% 50% 50% 50% / 40% 60% 40% 60% !important;
                    transform: translateX(10px) scale(1.02);
                    box-shadow: 0 25px 50px rgba(135, 206, 235, 0.4) !important;
                    background: #fff !important;
                    animation-play-state: paused;
                }
            `}</style>
        </ThemeWrapper>
    );
}
