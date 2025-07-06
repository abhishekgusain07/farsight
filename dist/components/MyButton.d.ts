import React from 'react';
export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}
declare const MyButton: React.FC<ButtonProps>;
export { MyButton };
//# sourceMappingURL=MyButton.d.ts.map