// ./app/about-us/layout.jsx
export async function generateMetadata() {
    return {
        title: 'About Sustainology',
        description:
            'Learn about Sustainology: A leading sustainability partner offering expert carbon project consulting, ESG services, carbon credit marketplaces, and advanced DMRV technology. Driving impactful solutions for a greener future.',
    };
}

export default function AboutUsLayout({ children }) {
    return <>{children}</>;
}
