import React from 'react';

export interface ButtonProps {
  /** Button text */
  children: React.ReactNode;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Disabled state */
  disabled?: boolean;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Additional CSS classes */
  className?: string;
}

const MyButton: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {
  const baseStyles = 'px-4 py-2 rounded font-medium transition-colors';
  
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };
  
  const sizeStyles = {
    small: 'text-sm px-3 py-1',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`.trim();
  
  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export { MyButton };