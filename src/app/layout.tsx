import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import LeftIconPanael from "@/components/shared/LeftIconPanael";
import Navbar from "@/components/shared/Navbar";
import SurahList from "@/components/shared/SurahList";
import SettingPanel from "@/components/shared/SettingPanel";

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
            <body className="h-screen overflow-hidden ">
                <div className="fixed lg:top-0 bottom-0 left-0 h-15 w-screen lg:w-15 lg:h-screen">
                    <LeftIconPanael></LeftIconPanael>
                </div>

                <div className="lg:ml-15 h-screen overflow-y-auto custom-scrollbar">
                    <Navbar></Navbar>
                    <div>
                        <div className="hidden lg:block w-83.5 border-r border-border min-h-screen">
                            <SurahList></SurahList>
                        </div>
                        <div>{children}</div>
                        <div className="hidden md:block">
                            <SettingPanel></SettingPanel>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
