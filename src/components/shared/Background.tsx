// 🌌 Fixed ambient background — radial-gradient "blobs" (no live blur filter) drifting via transform only
const blob = "absolute rounded-full will-change-transform";
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="dots-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]" />
      <div className={`${blob} -top-40 start-1/4 size-[44rem] animate-blob bg-[radial-gradient(circle,color-mix(in_oklch,var(--brand)_22%,transparent),transparent_65%)] dark:bg-[radial-gradient(circle,color-mix(in_oklch,var(--brand)_18%,transparent),transparent_65%)]`} />
      <div className={`${blob} top-1/3 -end-32 size-[38rem] animate-blob-slow bg-[radial-gradient(circle,color-mix(in_oklch,var(--brand-2)_22%,transparent),transparent_65%)] dark:bg-[radial-gradient(circle,color-mix(in_oklch,var(--brand-2)_14%,transparent),transparent_65%)]`} />
      <div className={`${blob} -bottom-40 start-1/3 size-[36rem] animate-blob bg-[radial-gradient(circle,color-mix(in_oklch,#e879f9_14%,transparent),transparent_65%)] [animation-delay:-12s] dark:bg-[radial-gradient(circle,color-mix(in_oklch,#d946ef_10%,transparent),transparent_65%)]`} />
    </div>
  );
}
