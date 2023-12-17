import classNames from 'classnames';
import './button.scss';

interface IButton {
    onClick?: (e: any) => void;
    type?: string;
    children?: string;
    size?: string;
}

const Button: React.FC<IButton> = ({ children, onClick, size = 's', type }) => {
    const btnClass = classNames({
        btn: true,
        'btn-secondary': type === 'secondary',
        'btn-primary': type === 'primary',
        'btn-small': size === 's',
        'btn-medium': size === 'm',
    });

    return (
        <button className={btnClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
