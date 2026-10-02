/** Status pill pinned to the top-left of a photo card. */
export default function StatusBadge({ status }: { status: string }) {
  const tone = status === 'Completed' ? 'is-done' : status === 'Coming soon' ? 'is-soon' : 'is-active';
  return <span className={`status-badge ${tone}`}>{status}</span>;
}
