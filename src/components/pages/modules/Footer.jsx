import ghLogo from '/src/assets/github-mark-white.svg';
import styles from './Footer.module.css';
function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className="logo">
          <a href="#">GG</a>
        </div>
        <p>Gadget Galaxy 2023 | All Rights Reserved</p>
      </div>
      <div>
        <a href="https://github.com/CrystalSnake">
          <span>Crystal Snake</span>
          <img src={ghLogo} alt="github logo" className={styles.ghlogo} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
