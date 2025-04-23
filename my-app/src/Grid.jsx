export function Grid({ items }) {
    return (
      <div className="grid">
        {items.map((e, index) => (
          <div className="card" key={index}>
            <h2>{e.text}</h2>
            <p>{e.href}</p>
          </div>
        ))}
      </div>
    );
  }
  import './grid.css';

  
  export default Grid;
  