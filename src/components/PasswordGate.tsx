import { useState } from 'react';
import { Lock, Sparkles } from 'lucide-react';

interface PasswordGateProps {
  onUnlock: () => void;
}

export function PasswordGate({ onUnlock }: PasswordGateProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'explore-the-future-of-origin') {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-6 film-grain"
      style={{ 
        backgroundColor: 'var(--canvas)',
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(196, 150, 138, 0.03) 0%, transparent 50%),
                          radial-gradient(circle at 80% 50%, rgba(156, 170, 152, 0.03) 0%, transparent 50%)`
      }}
    >
      <div className="max-w-md w-full text-center">
        {/* Logo/Header */}
        <div className="mb-12">
          <div 
            className="w-20 h-20 mx-auto mb-6 flex items-center justify-center"
            style={{ 
              backgroundColor: 'rgba(196, 150, 138, 0.1)',
              borderRadius: '50%'
            }}
          >
            <Lock size={32} style={{ color: 'var(--accent-rose)' }} />
          </div>
          <h1 
            className="text-4xl md:text-5xl mb-4"
            style={{ 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--charcoal-primary)',
              fontWeight: 900,
              letterSpacing: '-0.02em'
            }}
          >
            ORIGIN
          </h1>
          <p 
            className="text-sm mb-2"
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'var(--charcoal-secondary)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}
          >
            Private Invitation
          </p>
        </div>

        {/* Divider */}
        <div className="mb-12 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
          <Sparkles size={16} style={{ color: 'var(--accent-rose)' }} />
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }} />
        </div>

        {/* Message */}
        <div className="mb-12">
          <p 
            className="text-lg mb-6"
            style={{ 
              fontFamily: 'var(--font-serif)',
              color: 'var(--charcoal-primary)',
              lineHeight: 1.6,
              fontStyle: 'italic'
            }}
          >
            You've been invited to explore the future of creative innovation, 
            community building, and cultural transformation.
          </p>
          <p 
            className="text-sm"
            style={{ 
              fontFamily: 'var(--font-sans)',
              color: 'var(--charcoal-tertiary)',
              lineHeight: 1.7
            }}
          >
            Please enter your access code to continue.
          </p>
        </div>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter access code"
            className="w-full px-6 py-4 mb-4 text-center border transition-all duration-300"
            style={{ 
              backgroundColor: 'var(--canvas)',
              borderColor: error ? '#D32F2F' : 'var(--border)',
              borderWidth: '1px',
              borderRadius: '2px',
              fontFamily: 'var(--font-sans)',
              color: 'var(--charcoal-primary)',
              fontSize: '14px',
              letterSpacing: '0.05em'
            }}
            autoFocus
          />
          {error && (
            <p 
              className="text-xs mb-4"
              style={{ 
                fontFamily: 'var(--font-sans)',
                color: '#D32F2F'
              }}
            >
              Incorrect access code. Please try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full px-8 py-4 transition-all duration-300 hover:opacity-80"
            style={{ 
              backgroundColor: 'var(--accent-rose)', 
              color: 'var(--canvas)',
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              borderRadius: '2px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Enter
          </button>
        </form>

        {/* Footer Note */}
        <p 
          className="text-xs"
          style={{ 
            fontFamily: 'var(--font-sans)',
            color: 'var(--charcoal-tertiary)',
            lineHeight: 1.6
          }}
        >
          This presentation contains confidential information about Origin's 
          vision, strategy, and future ventures.
        </p>
      </div>
    </div>
  );
}
