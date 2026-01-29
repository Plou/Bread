export default function BreadListSkeleton() {
  return (
    <ul
      className="bread-card-list"
    >
      <BreadSkeleton />
      <BreadSkeleton />
      <BreadSkeleton />
      <BreadSkeleton />
      <BreadSkeleton />
    </ul>
  );
}

export function BreadSkeleton() {
  return (
    <div
      className="bread-card"
    >
    </div>
  );
}
