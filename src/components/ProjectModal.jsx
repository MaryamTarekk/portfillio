import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, RefreshCw, Plus, Check, ShoppingCart, Wifi, WifiOff, Sliders, Image, BookOpen } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span className="badge">{project.category}</span>
            <h3 className="modal-title">{project.title}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <p className="modal-description">{project.fullDesc}</p>

          <div className="modal-tech-stack">
            <span className="stack-title">Tech Stack Used:</span>
            <div className="tech-tags">
              {project.technologies.map((t, idx) => (
                <span key={idx} className="modal-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Interactive Live Demo Area */}
          <div className="demo-box glass-card">
            <div className="demo-header">
              <span className="demo-live-badge">
                <span className="pulse-dot"></span>
                <span>Interactive Live Preview Simulation</span>
              </span>
              <span className="demo-instructions">Try out the features below!</span>
            </div>

            <div className="demo-content">
              {project.demoType === 'networkChecker' && <NetworkCheckerDemo />}
              {project.demoType === 'photoEditor' && <PhotoEditorDemo />}
              {project.demoType === 'library' && <LibraryDemo initialBooks={project.demoData.initialBooks} />}
              {project.demoType === 'ecommerce' && <EcommerceDemo products={project.demoData.products} />}
              {project.demoType === 'shoes' && <ShoesDemo shoes={project.demoData.shoes} />}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <Github size={18} />
            <span>View GitHub Code</span>
          </a>
          <button onClick={onClose} className="btn btn-primary">
            <span>Close Preview</span>
          </button>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.25s ease;
        }

        .modal-container {
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          background: var(--bg-secondary);
          border: 1px solid var(--border-accent);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid var(--border-glass);
          padding-bottom: 1rem;
        }

        .modal-title {
          font-size: 1.6rem;
          margin-top: 0.3rem;
        }

        .modal-close-btn {
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          color: var(--primary);
          border-color: var(--primary);
        }

        .modal-description {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 1.05rem;
        }

        .modal-tech-stack {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .stack-title {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .tech-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .modal-tag {
          padding: 0.25rem 0.65rem;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.25);
          color: var(--primary);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-family: var(--font-mono);
        }

        .demo-box {
          padding: 1.5rem;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid var(--border-glass);
        }

        .demo-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-glass);
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .demo-live-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--accent-emerald);
        }

        .demo-instructions {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          border-top: 1px solid var(--border-glass);
          padding-top: 1rem;
        }
      `}</style>
    </div>
  );
}

/* --- Sub-Components for Interactive Mini-Demos --- */

// 1. Network Checker Demo
function NetworkCheckerDemo() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [ping, setPing] = useState(24);
  const [logs, setLogs] = useState([`[${new Date().toLocaleTimeString()}] System initialized. Connection stable.`]);

  const testConnection = () => {
    const randomPing = Math.floor(Math.random() * 35) + 15;
    setPing(randomPing);
    setLogs(prev => [`[${new Date().toLocaleTimeString()}] Manual Ping Test: ${randomPing}ms (Latency OK)`, ...prev.slice(0, 3)]);
  };

  const toggleSimulatedOffline = () => {
    const newStatus = !isOnline;
    setIsOnline(newStatus);
    setLogs(prev => [`[${new Date().toLocaleTimeString()}] Connection status changed: ${newStatus ? 'ONLINE' : 'OFFLINE'}`, ...prev.slice(0, 3)]);
  };

  return (
    <div className="net-demo">
      <div className="net-status-card">
        {isOnline ? (
          <div className="net-online">
            <Wifi size={36} className="text-emerald" />
            <div>
              <h4>Connected to Internet</h4>
              <p>Ping latency: <strong>{ping}ms</strong> | Protocol: HTTPS/WSS</p>
            </div>
          </div>
        ) : (
          <div className="net-offline">
            <WifiOff size={36} className="text-rose" />
            <div>
              <h4>No Internet Access</h4>
              <p>Offline event triggered. Check network cables or router.</p>
            </div>
          </div>
        )}
      </div>

      <div className="net-actions">
        <button onClick={testConnection} className="btn btn-outline" disabled={!isOnline}>
          <RefreshCw size={15} /> Test Latency
        </button>
        <button onClick={toggleSimulatedOffline} className="btn btn-secondary">
          Simulate {isOnline ? 'Network Disconnect' : 'Reconnect'}
        </button>
      </div>

      <div className="net-logs">
        <span className="log-title">Network Event Stream:</span>
        {logs.map((log, i) => (
          <div key={i} className="log-item">{log}</div>
        ))}
      </div>

      <style>{`
        .net-status-card {
          padding: 1.25rem;
          background: rgba(255,255,255,0.03);
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
        }
        .net-online, .net-offline { display: flex; align-items: center; gap: 1rem; }
        .text-rose { color: #f43f5e; }
        .net-actions { display: flex; gap: 0.75rem; margin-bottom: 1rem; }
        .net-logs { font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); }
        .log-title { display: block; margin-bottom: 0.4rem; color: var(--primary); }
        .log-item { padding: 0.2rem 0; border-bottom: 1px dashed rgba(255,255,255,0.05); }
      `}</style>
    </div>
  );
}

// 2. Photo Editor Demo
function PhotoEditorDemo() {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [grayscale, setGrayscale] = useState(0);
  const [blur, setBlur] = useState(0);
  const [rotate, setRotate] = useState(0);

  const resetFilters = () => {
    setBrightness(100);
    setContrast(100);
    setGrayscale(0);
    setBlur(0);
    setRotate(0);
  };

  return (
    <div className="photo-demo">
      <div className="photo-preview-box">
        <div 
          className="photo-sample"
          style={{
            filter: `brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) blur(${blur}px)`,
            transform: `rotate(${rotate}deg)`
          }}
        >
          <div className="sample-art">
            <Image size={48} />
            <span>Sample Image Canvas</span>
          </div>
        </div>
      </div>

      <div className="photo-controls">
        <div className="ctrl-group">
          <label>Brightness: {brightness}%</label>
          <input type="range" min="50" max="150" value={brightness} onChange={(e) => setBrightness(e.target.value)} />
        </div>
        <div className="ctrl-group">
          <label>Contrast: {contrast}%</label>
          <input type="range" min="50" max="150" value={contrast} onChange={(e) => setContrast(e.target.value)} />
        </div>
        <div className="ctrl-group">
          <label>Grayscale: {grayscale}%</label>
          <input type="range" min="0" max="100" value={grayscale} onChange={(e) => setGrayscale(e.target.value)} />
        </div>
        <div className="ctrl-group">
          <label>Blur: {blur}px</label>
          <input type="range" min="0" max="10" value={blur} onChange={(e) => setBlur(e.target.value)} />
        </div>
      </div>

      <div className="photo-actions">
        <button onClick={() => setRotate((r) => (r + 90) % 360)} className="btn btn-outline">Rotate 90°</button>
        <button onClick={resetFilters} className="btn btn-secondary">Reset Filters</button>
      </div>

      <style>{`
        .photo-preview-box { height: 170px; background: #000; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; overflow: hidden; margin-bottom: 1rem; }
        .photo-sample { transition: filter 0.1s ease; }
        .sample-art { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; color: var(--primary); }
        .photo-controls { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1rem; font-size: 0.825rem; }
        .ctrl-group { display: flex; flex-direction: column; gap: 0.25rem; color: var(--text-secondary); }
        .ctrl-group input { accent-color: var(--primary); cursor: pointer; }
        .photo-actions { display: flex; gap: 0.75rem; }
      `}</style>
    </div>
  );
}

// 3. Library Management Demo
function LibraryDemo({ initialBooks }) {
  const [books, setBooks] = useState(initialBooks);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [search, setSearch] = useState('');

  const toggleBorrow = (id) => {
    setBooks(books.map(b => b.id === id ? { ...b, status: b.status === 'Available' ? 'Borrowed' : 'Available' } : b));
  };

  const addBook = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setBooks([...books, { id: Date.now(), title: newTitle, author: newAuthor || 'Unknown', category: 'General', status: 'Available' }]);
    setNewTitle('');
    setNewAuthor('');
  };

  const filtered = books.filter(b => b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="lib-demo">
      <div className="lib-tools">
        <input 
          type="text" 
          placeholder="Search books by title or author..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          className="lib-input"
        />
      </div>

      <div className="lib-table-wrapper">
        <table className="lib-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(b => (
              <tr key={b.id}>
                <td className="font-bold">{b.title}</td>
                <td>{b.author}</td>
                <td><span className="category-pill">{b.category}</span></td>
                <td>
                  <span className={`status-pill ${b.status === 'Available' ? 'avail' : 'borrowed'}`}>
                    {b.status}
                  </span>
                </td>
                <td>
                  <button onClick={() => toggleBorrow(b.id)} className="btn-table">
                    {b.status === 'Available' ? 'Borrow' : 'Return'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <form onSubmit={addBook} className="lib-add-form">
        <input type="text" placeholder="New Book Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="lib-input" />
        <input type="text" placeholder="Author" value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} className="lib-input" />
        <button type="submit" className="btn btn-primary"><Plus size={16} /> Add Book</button>
      </form>

      <style>{`
        .lib-tools { margin-bottom: 0.75rem; }
        .lib-input { width: 100%; padding: 0.55rem 0.85rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: var(--radius-sm); color: #fff; font-size: 0.85rem; }
        .lib-table-wrapper { overflow-x: auto; margin-bottom: 1rem; }
        .lib-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; text-align: left; }
        .lib-table th, .lib-table td { padding: 0.6rem 0.75rem; border-bottom: 1px solid var(--border-glass); }
        .lib-table th { color: var(--text-muted); font-family: var(--font-mono); }
        .font-bold { font-weight: 600; color: var(--text-primary); }
        .category-pill { padding: 0.15rem 0.5rem; background: rgba(255,255,255,0.05); border-radius: 4px; font-size: 0.75rem; }
        .status-pill { padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; }
        .status-pill.avail { background: rgba(52,211,153,0.15); color: var(--accent-emerald); }
        .status-pill.borrowed { background: rgba(251,191,36,0.15); color: var(--accent-amber); }
        .btn-table { padding: 0.25rem 0.65rem; background: var(--bg-card); border: 1px solid var(--border-glass); color: var(--primary); border-radius: 4px; cursor: pointer; }
        .lib-add-form { display: flex; gap: 0.5rem; flex-wrap: wrap; }
      `}</style>
    </div>
  );
}

// 4. E-Commerce Demo
function EcommerceDemo({ products }) {
  const [cart, setCart] = useState([]);
  const [checkedOut, setCheckedOut] = useState(false);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="ecom-demo">
      <div className="ecom-grid">
        {products.map(p => (
          <div key={p.id} className="p-card">
            <div className="p-category">{p.category}</div>
            <div className="p-title">{p.name}</div>
            <div className="p-footer">
              <span className="p-price">${p.price}</span>
              <button onClick={() => addToCart(p)} className="p-btn">
                <ShoppingCart size={14} /> Add
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-header">
          <span><ShoppingCart size={16} /> Cart Items ({cart.reduce((s, i) => s + i.qty, 0)})</span>
          <span className="cart-total">Total: ${total}</span>
        </div>
        {cart.length > 0 && (
          <button onClick={() => { setCheckedOut(true); setTimeout(() => setCheckedOut(false), 3000); setCart([]); }} className="btn btn-primary btn-full">
            {checkedOut ? '✓ Order Placed Successfully!' : 'Proceed to Checkout'}
          </button>
        )}
      </div>

      <style>{`
        .ecom-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1rem; }
        .p-card { background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); padding: 0.75rem; border-radius: var(--radius-sm); }
        .p-category { font-size: 0.7rem; color: var(--primary); font-family: var(--font-mono); }
        .p-title { font-weight: 600; font-size: 0.85rem; margin: 0.2rem 0 0.5rem 0; color: var(--text-primary); }
        .p-footer { display: flex; justify-content: space-between; align-items: center; }
        .p-price { font-weight: 700; color: var(--accent-emerald); font-size: 0.95rem; }
        .p-btn { padding: 0.25rem 0.6rem; background: var(--primary-glow); border: 1px solid var(--primary); color: var(--primary); border-radius: 4px; cursor: pointer; display: flex; align-items: center; gap: 0.3rem; font-size: 0.8rem; }
        .cart-summary { background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: var(--radius-sm); }
        .cart-header { display: flex; justify-content: space-between; font-weight: 600; font-size: 0.9rem; margin-bottom: 0.5rem; }
        .cart-total { color: var(--accent-emerald); }
        .btn-full { width: 100%; margin-top: 0.5rem; }
      `}</style>
    </div>
  );
}

// 5. Shoes Store Demo
function ShoesDemo({ shoes }) {
  const [selectedShoe, setSelectedShoe] = useState(shoes[0]);
  const [selectedSize, setSelectedSize] = useState(shoes[0].sizes[0]);

  return (
    <div className="shoes-demo">
      <div className="shoes-showcase">
        <div className="shoe-detail">
          <h4>{selectedShoe.name}</h4>
          <span className="shoe-color">Color: {selectedShoe.color}</span>
          <div className="shoe-price">${selectedShoe.price}</div>
        </div>

        <div className="size-selector">
          <span className="size-label">Select EUR Size:</span>
          <div className="sizes-grid">
            {selectedShoe.sizes.map(size => (
              <button 
                key={size} 
                onClick={() => setSelectedSize(size)} 
                className={`size-btn ${selectedSize === size ? 'active' : ''}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="shoes-list">
        {shoes.map(s => (
          <button 
            key={s.id} 
            onClick={() => { setSelectedShoe(s); setSelectedSize(s.sizes[0]); }} 
            className={`shoe-thumb ${selectedShoe.id === s.id ? 'active' : ''}`}
          >
            <span>{s.name}</span>
            <span>${s.price}</span>
          </button>
        ))}
      </div>

      <style>{`
        .shoes-showcase { background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1rem; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .shoe-detail h4 { font-size: 1.1rem; color: var(--text-primary); }
        .shoe-color { font-size: 0.8rem; color: var(--text-muted); display: block; }
        .shoe-price { font-size: 1.3rem; font-weight: 800; color: var(--primary); margin-top: 0.4rem; }
        .sizes-grid { display: flex; gap: 0.4rem; margin-top: 0.4rem; }
        .size-btn { width: 32px; height: 32px; border-radius: 4px; border: 1px solid var(--border-glass); background: var(--bg-card); color: var(--text-primary); cursor: pointer; }
        .size-btn.active { border-color: var(--primary); background: var(--primary); color: #fff; }
        .shoes-list { display: flex; gap: 0.5rem; overflow-x: auto; }
        .shoe-thumb { flex: 1; padding: 0.5rem; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: var(--radius-sm); color: var(--text-secondary); cursor: pointer; display: flex; flex-direction: column; font-size: 0.8rem; text-align: left; }
        .shoe-thumb.active { border-color: var(--primary); color: var(--primary); background: rgba(56,189,248,0.05); }
      `}</style>
    </div>
  );
}
