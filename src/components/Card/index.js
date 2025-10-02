import React, { CSSProperties, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

const Card = ({
  className, // Custom classes for the container card
  style, // Custom styles for the container card
  children, // Content to be included within the card
  shadow, // Used to add shadow under your card. Expected values are: low (lw), medium (md), tall (tl)
  href, // URL to navigate to when card is clicked
  target, // Optional: '_blank' for external links
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardShadow = shadow ? `item shadow--${shadow}` : '';
  
  const cardContent = (
    <div className={clsx('card', className, cardShadow)} style={style}>
      {children}
    </div>
  );

  // If href is provided, wrap the card in a Link with inline hover styles
  if (href) {
    return (
      <Link 
        to={href} 
        target={target}
        className="card-link"
        style={{ 
          textDecoration: 'none', 
          color: 'inherit', 
          display: 'block',
          transition: 'transform 0.2s ease-in-out',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default Card;