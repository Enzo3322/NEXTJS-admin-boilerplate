import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.scss'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const AddButton: React.FC<CustomButtonProps> = ({ ...rest }) => {
    return <button className={styles.button} {...rest}>+</button>

}

export default AddButton