import { IconHover } from "../ui/IconHover";

const LeftIconPanael = () => {
    return (
        <div className="w-screen h-15 lg:w-15 lg:h-screen bg-secondary-background">
            {/* logo */}
            <div className="lg:flex justify-center py-3 hidden">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.99183 0H29.0082C32.8696 0 36 3.13043 36 6.99183V29.0082C36 32.8696 32.8696 36 29.0082 36H6.99183C3.13043 36 0 32.8696 0 29.0082V6.99183C0 3.13043 3.13043 0 6.99183 0Z"
                        className="fill-primary"
                    ></path>
                    <path
                        d="M26.0687 24.5654V28.2374C26.0688 28.3545 26.0389 28.4696 25.9818 28.5717C25.9247 28.6739 25.8424 28.7597 25.7427 28.821C25.6429 28.8822 25.5292 28.9168 25.4122 28.9215C25.2953 28.9263 25.1791 28.9009 25.0748 28.8479L18 25.2596"
                        stroke="#E2E2E2"
                        strokeWidth="0.782609"
                    ></path>
                    <path
                        d="M9.92969 24.5654V28.2374C9.92957 28.3545 9.95949 28.4696 10.0166 28.5717C10.0737 28.6739 10.156 28.7597 10.2557 28.821C10.3554 28.8822 10.4692 28.9168 10.5861 28.9215C10.7031 28.9263 10.8193 28.9009 10.9236 28.8479L17.9976 25.2596"
                        stroke="#E2E2E2"
                        strokeWidth="0.782609"
                    ></path>
                    <path
                        opacity="0.35"
                        d="M17.5839 24.1444C17.5839 24.3737 17.7733 24.5591 18.0018 24.5591V25.5405L8.60421 23.6114L7.45143 23.3821C7.093 23.3109 6.77034 23.1177 6.53844 22.8353C6.30654 22.5528 6.17975 22.1987 6.17969 21.8333V10.8729C6.17969 9.90245 7.04838 9.16131 8.00708 9.31392L18.001 10.9026V11.884C17.8908 11.8842 17.7852 11.9279 17.7071 12.0056C17.629 12.0833 17.5847 12.1886 17.5839 12.2988V24.1436V24.1444Z"
                        fill="#E2E2E2"
                    ></path>
                    <path
                        opacity="0.35"
                        d="M18.4171 24.1444C18.4171 24.3737 18.2293 24.5591 18 24.5591V25.5405L27.3976 23.6114L28.5503 23.3821C28.9088 23.3109 29.2314 23.1177 29.4633 22.8353C29.6952 22.5528 29.822 22.1987 29.8221 21.8333V10.8729C29.8221 9.90245 28.9534 9.16131 27.9947 9.31392L18 10.9018V11.8832C18.2285 11.8832 18.4171 12.0687 18.4171 12.298V24.1436V24.1444Z"
                        fill="#E2E2E2"
                    ></path>
                    <path
                        d="M17.5806 24.1443C17.5806 24.3736 17.77 24.5591 17.9986 24.5591V25.5405L9.92986 22.0383L8.60099 21.4623C8.29824 21.3311 8.04048 21.1142 7.85944 20.8383C7.6784 20.5624 7.58197 20.2396 7.58203 19.9096V9.37417C7.58187 9.09963 7.64851 8.82918 7.7762 8.58615C7.9039 8.34312 8.08881 8.13482 8.31498 7.97921C8.54116 7.8236 8.8018 7.72536 9.07441 7.69297C9.34703 7.66058 9.62343 7.69501 9.87977 7.7933L17.9986 10.9026V11.884C17.8883 11.884 17.7824 11.9276 17.7041 12.0053C17.6259 12.083 17.5815 12.1885 17.5806 12.2988V24.1436V24.1443Z"
                        fill="white"
                    ></path>
                    <path
                        d="M28.0252 9.37374V9.37397V19.9095C28.0252 20.4269 27.7175 20.8958 27.2417 21.1032C27.2416 21.1033 27.2415 21.1033 27.2413 21.1034L25.9131 21.6791L25.9129 21.6792L18.3913 24.9439V24.8493C18.4568 24.8131 18.517 24.7678 18.5702 24.7147C18.6452 24.6398 18.7048 24.5509 18.7454 24.453C18.786 24.3551 18.8069 24.2501 18.8069 24.1441V12.2986C18.8069 12.0848 18.7219 11.8798 18.5708 11.7286C18.5173 11.6751 18.4571 11.6299 18.3921 11.5938V11.1708L26.2587 8.15774L26.2589 8.15769C26.4559 8.08214 26.6684 8.05567 26.878 8.08056C27.0875 8.10546 27.2879 8.18098 27.4618 8.3006C27.6356 8.42023 27.7778 8.58036 27.876 8.76718C27.974 8.95384 28.0253 9.16251 28.0252 9.37374Z"
                        fill="#E2E2E2"
                        stroke="#E2E2E2"
                        strokeWidth="0.782609"
                    ></path>
                </svg>
            </div>
            {/* icons */}
            <div className="flex h-15 lg:h-[calc(100vh-110px)] lg:flex-col items-center justify-center gap-6 md:gap-8 lg:gap-6 text-icon">
                {/* Home */}
                <IconHover label="Home">
                    <button className="size-9 flex justify-center items-center [&_svg]:size-5.5 group relative">
                        {/* Stroke - default */}
                        <svg
                            className="absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 22 22"
                            fill="none"
                        >
                            <path
                                d="M9.23051 2.58494L2.87801 7.67243C2.16301 8.24076 1.70467 9.44163 1.86051 10.34L3.07968 17.6366C3.29968 18.9383 4.54634 19.9924 5.86634 19.9924H16.133C17.4438 19.9924 18.6997 18.9291 18.9197 17.6366L20.1388 10.34C20.2855 9.44163 19.8272 8.24076 19.1213 7.67243L12.7688 2.59411C11.788 1.80578 10.2022 1.80577 9.23051 2.58494Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.0007 14.2083C12.2663 14.2083 13.2923 13.1823 13.2923 11.9167C13.2923 10.651 12.2663 9.625 11.0007 9.625C9.735 9.625 8.70898 10.651 8.70898 11.9167C8.70898 13.1823 9.735 14.2083 11.0007 14.2083Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        {/* Fill - hovered */}
                        <svg
                            className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 22 22"
                            fill="none"
                        >
                            <path
                                d="M9.23051 2.58494L2.87801 7.67243C2.16301 8.24076 1.70467 9.44163 1.86051 10.34L3.07968 17.6366C3.29968 18.9383 4.54634 19.9924 5.86634 19.9924H16.133C17.4438 19.9924 18.6997 18.9291 18.9197 17.6366L20.1388 10.34C20.2855 9.44163 19.8272 8.24076 19.1213 7.67243L12.7688 2.59411C11.788 1.80578 10.2022 1.80577 9.23051 2.58494Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.0007 14.2083C12.2663 14.2083 13.2923 13.1823 13.2923 11.9167C13.2923 10.651 12.2663 9.625 11.0007 9.625C9.735 9.625 8.70898 10.651 8.70898 11.9167C8.70898 13.1823 9.735 14.2083 11.0007 14.2083Z"
                                fill="white"
                                fillOpacity="0.5"
                                stroke="white"
                                strokeOpacity="0.5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </IconHover>

                {/* Read Quran */}
                <IconHover label="Read Quran">
                    <button className="size-9 flex justify-center items-center [&_svg]:size-5.5 group relative">
                        {/* Stroke - default */}
                        <svg
                            className="absolute opacity-100 group-hover:opacity-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 26 26"
                            fill="none"
                        >
                            <path
                                opacity="0.4"
                                d="M20.2264 2.16675H18.168C15.8064 2.16675 14.5605 3.41258 14.5605 5.77425V7.83258C14.5605 10.1942 15.8064 11.4401 18.168 11.4401H20.2264C22.588 11.4401 23.8339 10.1942 23.8339 7.83258V5.77425C23.8339 3.41258 22.588 2.16675 20.2264 2.16675Z"
                                fill="currentColor"
                            />
                            <path
                                opacity="0.4"
                                d="M7.84268 14.5491H5.78435C3.41185 14.5491 2.16602 15.7949 2.16602 18.1566V20.2149C2.16602 22.5874 3.41185 23.8332 5.77352 23.8332H7.83185C10.1935 23.8332 11.4394 22.5874 11.4394 20.2257V18.1674C11.4502 15.7949 10.2043 14.5491 7.84268 14.5491Z"
                                fill="currentColor"
                            />
                            <path
                                d="M6.81352 11.4617C9.38026 11.4617 11.461 9.38099 11.461 6.81425C11.461 4.2475 9.38026 2.16675 6.81352 2.16675C4.24677 2.16675 2.16602 4.2475 2.16602 6.81425C2.16602 9.38099 4.24677 11.4617 6.81352 11.4617Z"
                                fill="currentColor"
                            />
                            <path
                                d="M19.1866 23.8333C21.7533 23.8333 23.8341 21.7526 23.8341 19.1858C23.8341 16.6191 21.7533 14.5383 19.1866 14.5383C16.6198 14.5383 14.5391 16.6191 14.5391 19.1858C14.5391 21.7526 16.6198 23.8333 19.1866 23.8333Z"
                                fill="currentColor"
                            />
                        </svg>
                        {/* Fill - hovered (same icon, just full opacity) */}
                        <svg
                            className="absolute opacity-0 group-hover:opacity-100"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 26 26"
                            fill="none"
                        >
                            <path
                                opacity="0.4"
                                d="M20.2264 2.16675H18.168C15.8064 2.16675 14.5605 3.41258 14.5605 5.77425V7.83258C14.5605 10.1942 15.8064 11.4401 18.168 11.4401H20.2264C22.588 11.4401 23.8339 10.1942 23.8339 7.83258V5.77425C23.8339 3.41258 22.588 2.16675 20.2264 2.16675Z"
                                fill="currentColor"
                            />
                            <path
                                opacity="0.4"
                                d="M7.84268 14.5491H5.78435C3.41185 14.5491 2.16602 15.7949 2.16602 18.1566V20.2149C2.16602 22.5874 3.41185 23.8332 5.77352 23.8332H7.83185C10.1935 23.8332 11.4394 22.5874 11.4394 20.2257V18.1674C11.4502 15.7949 10.2043 14.5491 7.84268 14.5491Z"
                                fill="currentColor"
                            />
                            <path
                                d="M6.81352 11.4617C9.38026 11.4617 11.461 9.38099 11.461 6.81425C11.461 4.2475 9.38026 2.16675 6.81352 2.16675C4.24677 2.16675 2.16602 4.2475 2.16602 6.81425C2.16602 9.38099 4.24677 11.4617 6.81352 11.4617Z"
                                fill="currentColor"
                            />
                            <path
                                d="M19.1866 23.8333C21.7533 23.8333 23.8341 21.7526 23.8341 19.1858C23.8341 16.6191 21.7533 14.5383 19.1866 14.5383C16.6198 14.5383 14.5391 16.6191 14.5391 19.1858C14.5391 21.7526 16.6198 23.8333 19.1866 23.8333Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </IconHover>

                {/* Quran Go to Ayah */}
                <IconHover label="Quran Go to Ayah">
                    <button className="size-9 flex justify-center items-center [&_svg]:size-5.5 group relative">
                        {/* Stroke - default */}
                        <svg
                            className="absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 22 22"
                            fill="none"
                        >
                            <path
                                d="M6.78305 5.79323L14.5655 3.19906C18.058 2.0349 19.9555 3.94156 18.8005 7.43406L16.2064 15.2166C14.4647 20.4507 11.6047 20.4507 9.86305 15.2166L9.09305 12.9066L6.78305 12.1366C1.54888 10.3949 1.54888 7.54406 6.78305 5.79323Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9.26758 12.5125L12.5492 9.22168"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        {/* Fill - hovered */}
                        <svg
                            className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 22 22"
                            fill="none"
                        >
                            <path
                                d="M6.78305 5.79323L14.5655 3.19906C18.058 2.0349 19.9555 3.94156 18.8005 7.43406L16.2064 15.2166C14.4647 20.4507 11.6047 20.4507 9.86305 15.2166L9.09305 12.9066L6.78305 12.1366C1.54888 10.3949 1.54888 7.54406 6.78305 5.79323Z"
                                fill="currentColor"
                            />
                            <path
                                d="M9.26758 12.5125L12.5492 9.22168"
                                stroke="white"
                                strokeOpacity="0.6"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </IconHover>

                {/* Bookmark */}
                <IconHover label="Bookmark">
                    <button className="size-9 flex justify-center items-center [&_svg]:size-5.5 group relative">
                        {/* Stroke - default */}
                        <svg
                            className="absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 18"
                            fill="none"
                        >
                            <path
                                d="M1.64453 13.7513V7.17862C1.64453 4.29211 1.64453 2.84886 2.57528 1.95214C3.50603 1.05542 5.00405 1.05542 8.00009 1.05542C10.9961 1.05542 12.4942 1.05542 13.4249 1.95214C14.3556 2.84886 14.3556 4.29211 14.3556 7.17862V13.7513C14.3556 15.5832 14.3556 16.4991 13.7417 16.827C12.5527 17.4618 10.3224 15.3437 9.26325 14.7059C8.64899 14.336 8.34186 14.151 8.00009 14.151C7.65832 14.151 7.35118 14.336 6.73692 14.7059C5.67777 15.3437 3.4475 17.4618 2.25852 16.827C1.64453 16.4991 1.64453 15.5832 1.64453 13.7513Z"
                                stroke="currentColor"
                                strokeWidth="1.38569"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M1.64453 5.02588H14.3556"
                                stroke="currentColor"
                                strokeWidth="1.38569"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        {/* Fill - hovered (your commented svg) */}
                        <svg
                            className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 22"
                            fill="none"
                        >
                            <path
                                opacity="0.4"
                                d="M1.48828 16.6148V15.1063C1.48828 11.6948 1.48897 10.6125 1.48828 9.42075C2.74018 9.42073 5.45877 9.42073 8.99967 9.42073C12.5405 9.42073 15.2592 9.41996 16.5111 9.4208C16.5111 10.6727 16.5111 11.6948 16.5111 15.1063V16.6148C16.5111 18.7798 16.5111 19.8623 15.7855 20.2498C14.3802 21.0001 11.7443 18.4967 10.4926 17.743C9.76659 17.3058 9.4036 17.0872 8.99967 17.0872C8.59575 17.0872 8.23276 17.3058 7.50678 17.743C6.25501 18.4967 3.61914 21.0001 2.21393 20.2498C1.48828 19.8623 1.48828 18.7798 1.48828 16.6148Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="1.38569"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M1.48828 3.45867C1.48828 2.43828 2.31547 1.61108 3.33587 1.61108H14.6635C15.6839 1.61108 16.5111 2.43828 16.5111 3.45867V5.99204H1.48828V3.45867Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="1.38569"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </IconHover>

                {/* Others */}
                <IconHover label="Others">
                    <button className="size-9 flex justify-center items-center [&_svg]:size-5.5 group relative">
                        {/* Stroke - default */}
                        <svg
                            className="absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 22 22"
                            fill="none"
                        >
                            <path
                                d="M20.1667 7.58075V3.87742C20.1667 2.41992 19.58 1.83325 18.1225 1.83325H14.4192C12.9617 1.83325 12.375 2.41992 12.375 3.87742V7.58075C12.375 9.03825 12.9617 9.62492 14.4192 9.62492H18.1225C19.58 9.62492 20.1667 9.03825 20.1667 7.58075Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9.62565 7.80992V3.64825C9.62565 2.35575 9.03898 1.83325 7.58148 1.83325H3.87815C2.42065 1.83325 1.83398 2.35575 1.83398 3.64825V7.80075C1.83398 9.10242 2.42065 9.61575 3.87815 9.61575H7.58148C9.03898 9.62492 9.62565 9.10242 9.62565 7.80992Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9.62565 18.1225V14.4192C9.62565 12.9617 9.03898 12.375 7.58148 12.375H3.87815C2.42065 12.375 1.83398 12.9617 1.83398 14.4192V18.1225C1.83398 19.58 2.42065 20.1667 3.87815 20.1667H7.58148C9.03898 20.1667 9.62565 19.58 9.62565 18.1225Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path d="M13.75 14.2083H19.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M13.75 17.875H19.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        {/* Fill - hovered */}
                        {/* Fill - hovered */}
                        <svg
                            className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 22 22"
                            fill="none"
                        >
                            {/* Top-left box - fully filled */}
                            <path
                                d="M9.62565 7.80992V3.64825C9.62565 2.35575 9.03898 1.83325 7.58148 1.83325H3.87815C2.42065 1.83325 1.83398 2.35575 1.83398 3.64825V7.80075C1.83398 9.10242 2.42065 9.61575 3.87815 9.61575H7.58148C9.03898 9.62492 9.62565 9.10242 9.62565 7.80992Z"
                                fill="currentColor"
                            />
                            {/* Top-right box - faded like the others */}
                            <path
                                d="M20.1667 7.58075V3.87742C20.1667 2.41992 19.58 1.83325 18.1225 1.83325H14.4192C12.9617 1.83325 12.375 2.41992 12.375 3.87742V7.58075C12.375 9.03825 12.9617 9.62492 14.4192 9.62492H18.1225C19.58 9.62492 20.1667 9.03825 20.1667 7.58075Z"
                                fill="currentColor"
                                opacity="0.4"
                            />
                            {/* Bottom-left box - faded */}
                            <path
                                d="M9.62565 18.1225V14.4192C9.62565 12.9617 9.03898 12.375 7.58148 12.375H3.87815C2.42065 12.375 1.83398 12.9617 1.83398 14.4192V18.1225C1.83398 19.58 2.42065 20.1667 3.87815 20.1667H7.58148C9.03898 20.1667 9.62565 19.58 9.62565 18.1225Z"
                                fill="currentColor"
                                opacity="0.4"
                            />
                            {/* Lines */}
                            <path d="M13.75 14.2083H19.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M13.75 17.875H19.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </button>
                </IconHover>
            </div>
        </div>
    );
};

export default LeftIconPanael;
