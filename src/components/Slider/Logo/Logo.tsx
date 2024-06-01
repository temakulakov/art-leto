import styles from './Logo.module.scss';
import {motion} from 'framer-motion'
import background from '../../../static/logo/logo-background.svg'
import bottom from '../../../static/logo/logo-bottom.png'
import colors from '../../../static/logo/logo-colors.png'
import text from '../../../static/logo/logo-text.svg'
import top from '../../../static/logo/logo-top.png'
import wood from '../../../static/logo/logo-wood.svg'
import logo2 from '../../../static/logo/logo.png'

const Logo = () => {
    return <div className={styles.root}>
        <img src={logo2} style={{ width: '400px', height: 'auto'}}/>
        {/*<motion.img src={background} style={{ width: '300px', height: 'auto'}} alt={background}/>*/}
        {/*<motion.img src={bottom} style={{ width: '200px', height: 'auto'}} alt={bottom}/>*/}
        {/*<motion.img src={colors} style={{ width: '100px', height: 'auto'}} alt={colors}/>*/}
        {/*<motion.img src={text} animate={{ x: -30, y: 60}} style={{ width: '380px', height: 'auto'}} alt={text}/>*/}
        {/*<motion.img src={top} style={{ width: '200px', height: 'auto'}} alt={top}/>*/}
        {/*<motion.img src={wood} style={{ width: '100px', height: 'auto'}} alt={wood}/>*/}
    </div>
};

export default Logo;