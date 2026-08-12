
function Loading() {
    return (
        <>
            <style>
                {`
                    @keyframes loading-dim {
                        0%, 100% {
                            filter: brightness(0.95);
                        }
                        50% {
                            filter: brightness(0.8);
                        }
                    }

                    .loading-dim {
                        animation: loading-dim 3s ease-in-out infinite;
                    }
                `}
            </style>

            <div className="p-4 h-dvh w-full blur-sm">
                <div className="bg-primary-200/50 w-full h-full shadow-2xl blur-sm loading-dim"></div>
            </div>
        </>
    );
}

export default Loading;