export default function Button({
    children,
    className = '',
    variant = 'primary',
    ...props
}) {
    const base =
        "relative inline-flex items-center justify-center rounded-full px-5 py-3 text-sm md:text-base font-semibold " +
        "transition-all hover:translate-y-[-1px] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1";

    const variants = {
        primary:
            "text-white shadow-soft ring-offset-white " +
            "bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 " +
            "hover:from-orange-500 hover:via-amber-500 hover:to-orange-600 focus-visible:ring-orange-300",
        subtle:
            "bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100 focus-visible:ring-orange-200",
        ghost:
            "text-slate-700 hover:bg-orange-50 border border-transparent focus-visible:ring-orange-200",
    };

    return (
        <button className={`${base} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}
