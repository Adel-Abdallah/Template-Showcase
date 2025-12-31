import React from 'react';
import { loadThemeData } from '../../../../shared/utils/themeLoader'; // Assuming you can load theme data
import { Package, CheckCircle, Clock } from 'lucide-react';

export default async function OrdersPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const themeData = await loadThemeData(slug);
    const styles = themeData ? themeData.styles : {};

    const orders = [
        { id: '#ORD-1234', date: 'Dec 31, 2024', total: '$129.00', status: 'Processing', items: 3 },
        { id: '#ORD-0987', date: 'Dec 15, 2024', total: '$59.50', status: 'Delivered', items: 1 },
        { id: '#ORD-0456', date: 'Nov 28, 2024', total: '$299.99', status: 'Delivered', items: 4 },
    ];

    return (
        <div className={styles.container} style={{ minHeight: '80vh', padding: '4rem 1rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Order History</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {orders.map((order) => (
                        <div key={order.id} style={{
                            padding: '2rem',
                            border: '1px solid rgba(128,128,128,0.2)',
                            borderRadius: '16px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            background: 'rgba(255,255,255,0.02)',
                            flexWrap: 'wrap',
                            gap: '1rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    background: 'rgba(128,128,128,0.1)'
                                }}>
                                    <Package size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{order.id}</h3>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>{order.date} • {order.items} Items</p>
                                </div>
                            </div>

                            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem', minWidth: '140px' }}>
                                <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{order.total}</p>

                                {/* Status Badge */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.4rem',
                                    fontSize: '0.85rem',
                                    padding: '0.3rem 0.8rem',
                                    borderRadius: '20px',
                                    background: order.status === 'Delivered' ? 'rgba(75, 181, 67, 0.1)' : 'rgba(255, 193, 7, 0.1)',
                                    color: order.status === 'Delivered' ? '#4bb543' : '#ffc107',
                                    width: 'fit-content',
                                    marginBottom: '0.5rem'
                                }}>
                                    {order.status === 'Delivered' ? <CheckCircle size={14} /> : <Clock size={14} />}
                                    {order.status}
                                </div>

                                {/* Progress Bar */}
                                <div style={{ width: '100%', height: '4px', background: 'rgba(128,128,128,0.2)', borderRadius: '2px', overflow: 'hidden' }}>
                                    <div style={{
                                        width: order.status === 'Delivered' ? '100%' : '40%',
                                        height: '100%',
                                        background: order.status === 'Delivered' ? '#4bb543' : '#ffc107',
                                        transition: 'width 0.5s ease'
                                    }} />
                                </div>
                                <div style={{ fontSize: '0.7rem', opacity: 0.5, marginTop: '2px' }}>
                                    {order.status === 'Delivered' ? 'Completed' : 'Processing...'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
