import React from 'react';

/**
 * Button component for consistent button styling across the site
 * 
 * @param {string} variant - The variant of the button (primary, secondary, gold)
 * @param {string} size - The size of the button (default, large)
 * @param {function} onClick - Click handler function
 * @param {boolean} fullWidth - Whether the button should take the full width
 * @param {object} children - Button content
 */
const Button = ({ 
  variant = 'primary',
  size = 'default',
  type = 'button', 
  onClick, 
  children, 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = size === 'large' ? 'btn-large' : '';
  const widthClass = fullWidth ? 'w-full' : '';
  
  const buttonClasses = [
    baseClass,
    variantClass,
    sizeClass,
    widthClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
