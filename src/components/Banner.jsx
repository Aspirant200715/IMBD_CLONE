import bannerImage from "./image.png";

function Banner() {
    return (
        <div
            className="relative h-[75vh] bg-cover bg-center flex items-center"
            style={{
                backgroundImage: `url(${bannerImage})`,
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 px-16 max-w-2xl">
                <h1 className="text-6xl font-bold mb-6">
                    Inception
                </h1>

                <p className="text-zinc-200 text-lg mb-8 leading-relaxed">
                    A thief who steals corporate secrets through dream-sharing technology.
                </p>

                <div className="flex gap-6">
                    <button className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition">
                        ▶ Watch Now
                    </button>

                    <button className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded hover:bg-white/30 transition">
                        + Watchlist
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
