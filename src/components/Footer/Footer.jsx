import style from './Footer.module.css';

function Footer() {
    return (
        <div className={style.container}>
            <ul className={style.nav}>
                <li><a href="/">Status</a></li>
                <li><a href="/BagHistory">Bag</a></li>
                <li><a href="/FlightHistory">Flight</a></li>
            </ul>
        </div>
    );
}
export default Footer;