import styles from './Card.module.scss';
import {IEvent} from "../../../types";

interface Props {
    event: IEvent
}

const Card = ({ event }: Props) => {
    return <div className={styles.root}></div>
};

export default Card;