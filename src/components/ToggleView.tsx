import '../styles/ToggleView.scss'; // Assuming you have styles for the toggle view

interface Props {
  view: 'grid' | 'list';
  onChange: (view: 'grid' | 'list') => void;
}

function ToggleView({ view, onChange }: Props) {
  return (
    <div className="toggle-view">
      <button
        className={view === 'grid' ? 'active' : ''}
        onClick={() => onChange('grid')}
      >
        Grid
      </button>
      <button
        className={view === 'list' ? 'active' : ''}
        onClick={() => onChange('list')}
      >
        List
      </button>
    </div>
  );
}

export default ToggleView;
