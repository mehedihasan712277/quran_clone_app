import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

// ================= ENGLISH FONT =================
const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-inter",
    display: "swap",
});

// ================= ARABIC LOCAL FONTS =================
const kfgqpc = localFont({
    src: "../fonts/kfgqpc.otf",
    variable: "--font-kfgqpc",
    display: "swap",
});

const alMushaf = localFont({
    src: "../fonts/al-mushaf.ttf",
    variable: "--font-al-mushaf",
    display: "swap",
});

const noorehuda = localFont({
    src: "../fonts/noorehuda.ttf",
    variable: "--font-noorehuda",
    display: "swap",
});

const noorehidayat = localFont({
    src: "../fonts/noorehidayat.ttf",
    variable: "--font-noorehidayat",
    display: "swap",
});

const calligraphy = localFont({
    src: "../fonts/calligraphy.woff2",
    variable: "--font-calligraphy",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Al Quran",
    description: "This is an online Quran app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`
                ${inter.variable}
                ${kfgqpc.variable}
                ${alMushaf.variable}
                ${noorehuda.variable}
                ${noorehidayat.variable}
                ${calligraphy.variable}
                h-full antialiased
            `}
        >
            <body className="min-h-full">
                <div className="max-w-480 mx-auto">{children}</div>
            </body>
        </html>
    );
}
