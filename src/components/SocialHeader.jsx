import React from 'react';

const SocialHeader = () => {
    return (
        <div className="w-full h-48 md:h-64 relative overflow-hidden bg-slate-900 flex items-center justify-center">
            {/* Cyberpunk Grid Background */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.4) 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }}>
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/30 to-slate-900/10"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                    SRE DESIGNS
                </h1>
                <p className="text-gray-400 mt-2 tracking-[0.3em] text-sm md:text-base font-mono uppercase border-t border-gray-700 pt-2 inline-block">
                    System Reliability Engineering
                </p>
            </div>

            {/* Circuit Line Accents */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
        </div>
    );
};

export default SocialHeader;
