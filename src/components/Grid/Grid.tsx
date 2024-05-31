import styles from './Grid.module.scss';
import {useQuery} from "@tanstack/react-query";
import {getList} from "../../services/bitrix";

interface GridProps {
    month: number
}

const Grid = ({ month }: GridProps) => {
    const { data } = useQuery({ queryKey: ['list'], queryFn: getList})

    return <div className={styles.root}>

    </div>
};

export default Grid;