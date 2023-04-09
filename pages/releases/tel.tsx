import { IconBrandApple, IconBrandSpotify, IconBrandTidal, IconBrandYoutube, TablerIcon } from "@tabler/icons";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image"
import Link from "next/link";
import { createElement } from "react";

export type releaseDetails = {
    title: string,
    type: string,
    year: string,
    cover: string,
    tracks: Array<{ title: string, duration: string }>,
    listenUrls: Array<{ label: string, icon: TablerIcon, href: string }>
}

const releaseDetails = {
    title: "tél",
    type: "EP",
    year: "2022",
    cover: "/img/tel-cover.jpg",
    tracks: [
        {
            title: "angyal",
            duration: "1:28",
        },
        {
            title: "tél",
            duration: "1:55",
        },
        {
            title: "szavak",
            duration: "2:42",
        },
        {
            title: "mindig is így lesz",
            duration: "2:18",
        },
        {
            title: "gondolat",
            duration: "1:37"
        },
    ],
    listenUrls: [
        {
            label: "Spotify",
            icon: IconBrandSpotify,
            href: "https://open.spotify.com/album/6GXPZdnEpAkX4AdhqH36Dl"
        },
        {
            label: "YouTube",
            icon: IconBrandYoutube,
            href: "https://www.youtube.com/playlist?list=OLAK5uy_no9qrFRu57eQjs552JQtSjOK69I6qOOYI"
        },
        {
            label: "Apple Music",
            icon: IconBrandApple,
            href: "https://music.apple.com/us/album/t%C3%A9l-ep/1664147566"
        },
        {
            label: "Tidal",
            icon: IconBrandTidal,
            href: "https://listen.tidal.com/album/270752068"
        },
    ]
}

const Tel: NextPage = () => {
    return (<>
        <Head>
            {/* HTML Meta Tags */}
            <title>luvzee • tél</title>
            <meta name="description" content='Magyar indie előadó luvzee első lemeze: "Szerelem, szakítás, továbblépés, ismétlődés"' />
            {/* Facebook Meta Tags */}
            <meta property="og:url" content="https://luvzee.shie1bi.hu/releases/tel" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="luvzee • tél (2022, EP)" />
            <meta property="og:description" content='Magyar indie előadó luvzee első lemeze: "Szerelem, szakítás, továbblépés, ismétlődés"' />
            <meta property="og:image" content="/img/tel-cover.jpg" />
            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="luvzee.shie1bi.hu" />
            <meta property="twitter:url" content="https://luvzee.shie1bi.hu/releases/tel" />
            <meta name="twitter:title" content="luvzee • tél (2022, EP)" />
            <meta name="twitter:description" content='Magyar indie előadó luvzee első lemeze: "Szerelem, szakítás, továbblépés, ismétlődés"' />
            <meta name="twitter:image" content="/img/tel-cover.jpg" />
            {/* Meta Tags Generated via https://www.opengraph.xyz */}
        </Head>
        {/* Let the user navigate back */}
        <div className="fixed top-0 left-0 p-4">
            <Link href="/">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </Link>
        </div>
        <main className="flex flex-col items-center justify-center w-[100vw] flex-1 px-20 text-center">
            <Image width={500} height={500} draggable="false" src={releaseDetails.cover} alt={releaseDetails.title} className="w-64 rounded-md" />
            <h1 className="text-5xl font-bold mt-2">
                luvzee • {releaseDetails.title}
            </h1>
            <h2 className="text-xl font-light italic">
                Szerelem, szakítás, továbblépés, ismétlődés
            </h2>
            <p className="mt-3 text-2xl">
                {releaseDetails.type} • {releaseDetails.year}
            </p>
            {/* map listenurls into grid of 4 icons */}
            <div className="grid grid-cols-4 gap-4 mt-2">
                {releaseDetails.listenUrls.map((listenUrl, index) => (
                    <a
                        key={index}
                        href={listenUrl.href}
                        target="_blank"
                        rel="noopener noreferrer external"
                    >
                        {createElement(listenUrl.icon, {
                            className: "h-8 w-8",
                            strokeWidth: 1.2
                        })}
                        <span className="sr-only">{listenUrl.label}</span>
                    </a>
                ))}
            </div>
            {/* map the tracklist into a table */}
            <table className="table-auto my-6">
                <tbody>
                    {releaseDetails.tracks.map((track, index) => (
                        <tr key={index}>
                            <td className="border px-4 w-80 pl-2 text-left">{track.title}</td>
                            <td className="border px-4 py-2">{track.duration}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Make a left aligned text section  */}
            <div className="mt-10 text-left lg:w-1/2">
                <p className="text-lg">
                    A tél egy kis EP, amelyet a 2022-es év végén készítettem el. Ez az első kiadott lemezem amin több dal is szerepel és egy teljes történetet mesél el.
                </p>
                <p className="text-lg mt-4">
                    A téma a szakítás, amely sok ember számára ismerős lehet, és ezért az EP a hallgatók számára is közvetlenül kapcsolódik. Az album dalaiban a szerelmi veszteség fájdalmas érzéseit mutatom be, valamint a feldolgozás és a fejlődés folyamatát.
                </p>
                <p className="text-lg mt-4">
                    A személyes tapasztalataim, érzéseim és gondolataim szolgálnak az album alapjául. A hangulat változatos, többek között vannak haragos, megbánó és szomorú számok is.
                </p>
            </div>
            <hr className="w-[65vw] my-6 border-gray-300" />
            <h2 className="text-2xl mb-2">A ChatGPT szavai az EP dalairól</h2>
            <div className="text-left lg:w-1/2">
                <h3 className="text-2xl">Track 1 • {releaseDetails.tracks[0].title}</h3>
                {/* chatgpt generated text, put it in a blockquote and make it appear as a quote */}
                <blockquote className="text-lg italic border-l-4 border-gray-300 pl-4 mt-4 mb-6">
                    <p>
                        A dal egy férfi érzelmeiről szól, aki szerelmes volt egy nőbe. Azt mondja, hogy ő egy átlagos férfi volt, de az élete megváltozott, amikor egy angyal megjelent neki a mennyből, és kérdezte, hogy miért van még itt a világban. A férfi válasza az, hogy talált valakit, akit annyira szeretett, mint senkit más. Azt mondja, hogy hiába van nélküle, ő továbbra is szereti őt, és ha bármi baja van, akkor ő azonnal odamenne. Aztán azt mondja, hogy a nő visszajött hozzá, de ő már túl későn, és ő már nem akarja az életét pazarolni rá. Végül azt mondja, hogy bármi is történik, ő továbbra is szereti a nőt, még akkor is, ha ő megbántotta.
                    </p>
                </blockquote>
                <h3 className="text-2xl">Track 2 • {releaseDetails.tracks[1].title}</h3>
                <blockquote className="text-lg italic border-l-4 border-gray-300 pl-4 mt-4 mb-6">
                    <p>
                        A dalszöveg egy személy tapasztalatait, érzéseit és fájdalmát foglalja össze a veszteség után, amikor valami vagy valaki fontos számukra eltávozott az életükből. A személy a nyugodt pillanatokat és a fényeket visszatekintve érzi a hiányt, és félelmet érez a jövőre nézve. Az alkohol és a félelem, hogy az élet csak ennyi, érintik őt minden hétvégén. Az érzések a fejében szétszórva, szembe kell néznie azzal, hogy el kell felejtenie a múltat. Az emlékek és az érzések még mindig jelen vannak az életében, különösen az éjszakák, amikor az álmokban a múltban voltak együtt és nevettek. A veszteség nagyon fájdalmas, és a tél hidegebbnek tűnik a hiány miatt. A személynek fázik, de az utat kell végigjárnia.
                    </p>
                </blockquote>
                <h3 className="text-2xl">Track 3 • {releaseDetails.tracks[2].title}</h3>
                <blockquote className="text-lg italic border-l-4 border-gray-300 pl-4 mt-4 mb-6">
                    <p>
                        A dalszöveg arról szól, hogy az énekes haragszik valaki, vagy valami felé, ami a személyiségének változását okozta. Az énekes azt akarja, hogy az ő régi énje meghaljon, hogy eltávozzon az új személyiségéből. Az énekes több alkalommal is megpróbál egy másik szót keresni az illetőre, de csak egy sértegető szót talál, amit nem akar használni. Végül az énekes azt mondja, hogy senki sem hagyja el őt, és azt kérdezi, hogy miért olyan szörnyű.
                    </p>
                </blockquote>
                <h3 className="text-2xl">Track 4 • {releaseDetails.tracks[3].title}</h3>
                <blockquote className="text-lg italic border-l-4 border-gray-300 pl-4 mt-4 mb-6">
                    <p>
                        A dalszöveg arról szól, hogy a dalszerzőnek van egy fájdalma és a saját maga által okozott problémája. Próbált más irányba tekerni nyakát, de rájött, hogy a probléma forrása ő maga. Éjszaka sír, és próbálja elkerülni a fájdalmát, de egyre több sérülést okoz magának. A dalszerző végül kimondja, hogy fáj neki és érzése van, és kéri az embert, akit szeretett, hogy vegye észre őt is, és segítsen neki a nehéz időkön.
                    </p>
                </blockquote>
                <h3 className="text-2xl">Track 5 • {releaseDetails.tracks[4].title}</h3>
                <blockquote className="text-lg italic border-l-4 border-gray-300 pl-4 mt-4 mb-6">
                    <p>
                        A dal arról szól, hogy a dalszerzőnek félelmei vannak attól, hogy a jelenlegi boldog pillanat eltűnik, és azt szeretné, ha az illető akit szerelmes (vagy akinek a kezeit fogva) lenne jelen a jövőben is. A dalszerző úgy érzi, hogy végre megtalálta azt, amit keresett, és nem fogja elengedni.
                    </p>
                </blockquote>
            </div>
        </main>
    </>);
};

export default Tel;