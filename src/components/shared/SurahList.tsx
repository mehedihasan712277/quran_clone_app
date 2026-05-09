import { getSurahNames } from "@/utils/fetchData";

const SurahList = async () => {
    const surahNams = await getSurahNames();

    return (
        <div className="">
            {/* search box */}
            <div className="pt-6 pb-4 px-6.5">
                <div className="rounded-full flex items-center px-3 bg-secondary-background h-10 gap-3 text-sm [&_svg]:size-4.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" className="text-subtitle">
                        <path
                            d="M18.3789 18.3721L14.7539 14.7471M16.7122 10.0387C16.7122 13.7206 13.7275 16.7054 10.0456 16.7054C6.36367 16.7054 3.37891 13.7206 3.37891 10.0387C3.37891 6.35684 6.36367 3.37207 10.0456 3.37207C13.7275 3.37207 16.7122 6.35684 16.7122 10.0387Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <input type="text" className="w-full flex-1 placeholder:text-sm leading-5.75" placeholder="Search Surah" />
                </div>
            </div>
            {/* surah list */}
            <div className="space-y-2 max-h-screen overflow-y-auto custom-scrollbar px-6.5">
                {surahNams.map((ele) => {
                    return (
                        <div
                            key={ele._id}
                            className={`group px-4 h-19 border transition-colors duration-300 cursor-pointer
        ${
            ele.number === 1 ? "bg-primary-7 border-primary/30" : "bg-primary-background border-border hover:bg-primary-7 hover:border-primary/30"
        } flex items-center rounded-xl gap-5`}
                        >
                            <div
                                className={`rotate-45 flex justify-center items-center size-8 rounded-md transition-colors duration-300
            ${
                ele.number === 1
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary-background text-subtitle group-hover:bg-primary group-hover:text-primary-foreground"
            }`}
                            >
                                <div className="-rotate-45 text-[13px] leading-5.25">{ele.number}</div>
                            </div>
                            <div className="flex-1">
                                <p className="text-[15px] leading-5 font-medium text-pure">{ele.englishName}</p>
                                <p className="text-[13px] leading-5.25 text-subtitle">{ele.englishNameTranslation}</p>
                            </div>
                            <div className="font-calligraphy text-subtitle text-[22px]">{ele.number.toString().padStart(3, "0")}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SurahList;
