import styles from './style.module.scss';

export const ListLoading = () => {

    return (
        <div className={`${styles.containerLoading}`}>
            <div>Carregando...</div>
        </div>
    )
}