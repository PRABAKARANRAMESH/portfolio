import React, { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

interface TrailPoint extends CursorPosition {
  id: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let trailId = 0;

    const updateCursor = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      setIsVisible(true);

      // Add trail point
      const newTrailPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++
      };

      setTrail(prevTrail => {
        const newTrail = [newTrailPoint, ...prevTrail.slice(0, 12)];
        return newTrail;
      });
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Add hover detection for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea, select, .MuiBox-root, .MuiSvgIcon-root');
      
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => setIsHovering(true));
        element.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    // Initial setup
    addHoverListeners();

    // Observer for dynamically added elements
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Set initial visibility
    setIsVisible(true);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: position.x,
          top: position.y,
          display: isVisible ? 'block' : 'none',
        }}
      />
      
      {/* Cursor trail */}
      {isVisible && trail.map((point, index) => (
        <div
          key={point.id}
          className="custom-cursor-trail"
          style={{
            left: point.x,
            top: point.y,
            opacity: Math.max(0.1, (12 - index) / 12 * 0.6),
            transform: `translate(-50%, -50%) scale(${Math.max(0.3, (12 - index) / 12)})`,
            transitionDelay: `${index * 20}ms`,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;