import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return <header className="g-header">

        <div className="g-header__wrap">

            <div className="g-header__brand">
                <div className="">
                    <Link href={'/'}>
                        <a>


                            <Image
                                src={`/logo.png`}
                                alt="Logo Principal"
                                width={160}
                                height={70}
                                placeholder="blur"
                                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8egYAArwBw06rL9wAAAAASUVORK5CYII="
                            />

                            Cipoooteee
                        </a>
                    </Link>
                </div>
            </div>

        </div>
    </header>
}