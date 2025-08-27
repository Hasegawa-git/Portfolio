export default function Card({ children, className = '', ...props }) {
    return (
        <section
            className={`surface shadow-soft border-glow decor hover-lift p-6 md:p-8 lg:p-10 ${className}`}
            {...props}
        >
            {children}
        </section>
    );
}
