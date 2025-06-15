import '../styles/SkeletonCard.scss';

interface Props {
  view: 'grid' | 'list';
}

function SkeletonCard({ view }: Props) {
  return (
    <div className={`skeleton-card ${view}`}>
      <div className="poster" />
      <div className="info">
        <div className="title" />
        <div className="rating" />
      </div>
    </div>
  );
}

export default SkeletonCard;
