export default function TextInput({ className = '', ...props }) {
    return (
        <input
            className={`w-full rounded-xl border border-orange-200 bg-white/95 px-4 py-2.5 outline-none shadow-soft focus:ring-2 focus:ring-orange-300 ${className}`}
            {...props}
        />
    );
}
