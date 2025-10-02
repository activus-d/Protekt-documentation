import React from 'react';
import clsx from 'clsx';

const CardContainer = ({
  className,
  style = {},
  children,
  gap = 'md', // spacing between cards
  cols, // number of columns
  align = 'stretch', // vertical alignment
  wrap = true, // wrap cards
  padding = 'none', // inline padding
  size, // fixed size: 'sm', 'md', 'lg', 'xl' or custom (e.g., '800px')
}) => {
  const gapValues = {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  };

  const alignValues = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    stretch: 'stretch',
  };

  const paddingValues = {
    none: '0',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  };

  const sizeValues = {
    sm: '400px',
    md: '600px',
    lg: '800px',
    xl: '1000px',
  };

  const resolvedSize = sizeValues[size] || size; // supports custom values like '75%' or '1200px'

  const containerStyle = {
    display: cols ? 'grid' : 'flex',
    flexDirection: cols ? undefined : 'row',
    flexWrap: cols ? undefined : (wrap ? 'wrap' : 'nowrap'),
    gap: gapValues[gap] || '1rem',
    alignItems: alignValues[align] || 'stretch',
    paddingInline: paddingValues[padding] || '0',
    ...(cols && { gridTemplateColumns: `repeat(${cols}, 1fr)` }),
    ...(resolvedSize && { width: resolvedSize, maxWidth: resolvedSize }), // ✅ fixed size
    ...style,
  };

  return (
    <div
      className={clsx(
        'card-container',
        className,
        `card-container--gap-${gap}`,
        `card-container--align-${align}`,
        wrap ? 'card-container--wrap' : 'card-container--nowrap',
        `card-container--padding-${padding}`,
        size ? `card-container--size-${size}` : null
      )}
      style={containerStyle}
    >
      {children}
    </div>
  );
};

export default CardContainer;
