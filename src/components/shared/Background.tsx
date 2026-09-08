// 🌌 Fixed ambient background — animated gradient blobs + dot grid (pure CSS)
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="dots-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]" />
      <div className="absolute -top-40 start-1/4 size-[36rem] animate-blob rounded-full bg-brand/25 blur-[140px] dark:bg-brand/20" />
      <div className="absolute top-1/3 -end-32 size-[30rem] animate-blob-slow rounded-full bg-brand-2/25 blur-[140px] dark:bg-brand-2/15" />
      <div className="absolute -bottom-40 start-1/3 size-[28rem] animate-blob rounded-full bg-fuchsia-400/15 blur-[140px] [animation-delay:-12s] dark:bg-fuchsia-500/10" />
    </div>
  );
}
