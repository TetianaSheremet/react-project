export const Loader = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="mb-6 break-inside-avoid rounded-xl overflow-hidden bg-gray-300 animate-pulse">
                        <div className="h-64 bg-gray-400/50" />
                        <div className="p-3 space-y-2">
                            <div className="h-4 bg-gray-400/50 rounded w-3/4" />
                            <div className="h-3 bg-gray-400/50 rounded w-1/2" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
