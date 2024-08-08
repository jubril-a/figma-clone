import styles from "../assets/styles/navbar.module.scss"

export default function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbar__logo}>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" class="css-7vzs6a" viewBox="0 0 38 57" aria-label="Homepage"><path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0"></path><path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0"></path><path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19z"></path><path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5"></path><path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5"></path></svg>
                    </a>
                </div>
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item}><a href="" >Products <i class="fa-solid fa-chevron-down"></i></a></li>
                    <li className={styles.navbar__item}><a href="" >Solutions <i class="fa-solid fa-chevron-down"></i></a></li>
                    <li className={styles.navbar__item}><a href="" >Community <i class="fa-solid fa-chevron-down"></i></a></li>
                    <li className={styles.navbar__item}><a href="" >Resourses <i class="fa-solid fa-chevron-down"></i></a></li>
                    <li className={styles.navbar__item}><a href="" >Pricing</a></li>
                </ul>
                <div className={styles.navbar_buttons}>
                    <a className={styles.navbar__item} href="">Contact sales</a>
                    <button className={styles.navbar__button}><i class="fa-solid fa-arrow-right"></i>Log in</button>
                    <button className={styles.navbar__button}><i class="fa-solid fa-arrow-right"></i><span>Get started for free</span></button>
                </div>
            </nav>
            <div className={styles.dropdown}>

            </div>
        </>
    )
}