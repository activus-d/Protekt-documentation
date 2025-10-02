import React from 'react';
import clsx from 'clsx';

const CardBody = ({
  className,
  style,
  children,
  image, // Add image prop
  imageAlt, // Alt text for image
  imageSize = '80px', // Fixed image size (default 80px)
  textAlign,
  variant,
  italic = false,
  noDecoration = false,
  transform,
  breakWord = false,
  truncate = false,
  weight,
}) => {
  const text = textAlign ? `text--${textAlign}` : '';
  const textColor = variant ? `text--${variant}` : '';
  const textItalic = italic ? 'text--italic' : '';
  const textDecoration = noDecoration ? 'text-no-decoration' : '';
  const textType = transform ? `text--${transform}` : '';
  const textBreak = breakWord ? 'text--break' : '';
  const textTruncate = truncate ? 'text--truncate' : '';
  const textWeight = weight ? `text--${weight}` : '';

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    objectFit: 'contain',
    display: 'block',
    margin: '0 auto 1rem',
  };

  return (
    <div
      className={clsx(
        'card__body',
        className,
        text,
        textType,
        textColor,
        textItalic,
        textDecoration,
        textBreak,
        textTruncate,
        textWeight
      )}
      style={style}
    >
      {image && (
        <img 
          src={image} 
          alt={imageAlt || ''} 
          style={imageStyle}
        />
      )}
      {children}
    </div>
  );
};

export default CardBody;
