import { useEffect } from 'react';

function useIntersectionObserver(sectionRefs, threshold) {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.getAttribute('id');
                    const navLink = document.querySelector(
                        `.nav-link[href="#${id}"]`
                    );
                    console.log('navlink', entry);
                    if (navLink) {
                        if (entry.isIntersecting) {
                            navLink.classList.add('sidebar-active');
                        } else {
                            navLink.classList.remove('sidebar-active');
                        }
                    }
                });
            },
            { threshold: threshold }
        );

        if (sectionRefs.current?.length > 0 && sectionRefs.current[0]) {
            sectionRefs.current.forEach((ref) => observer.observe(ref));
        }

        return () => {
            if (sectionRefs.current?.length > 0 && sectionRefs.current[0]) {
                sectionRefs.current.forEach((ref) => observer.unobserve(ref));
            }
        };
    }, [sectionRefs, threshold]);
}

export default useIntersectionObserver;
