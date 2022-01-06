import Link from "next/link"

export default function Header() {
    return <header className="g-header">

        <div className="g-header__wrap">

            <div className="g-header__brand">
                <div className="">
                    <Link href={'/'}>
                        <a>
                            <h2 className="g-header__brand-text">Mae Mia "El Bingo"</h2>
                        </a>
                    </Link>
                </div>
            </div>

        </div>
    </header>
}