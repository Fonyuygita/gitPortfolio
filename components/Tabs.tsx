"use client"

import { useState } from 'react';
import { FaBell, FaHome, FaPlus, FaSearch, FaUser } from 'react-icons/fa';

type TabsProps = {
    id: number
    icons: React.ReactNode;
    title: string
}[]

const TabsData: TabsProps = [
    {
        id: 1,
        icons: <FaHome className="h-6 w-6" />,
        title: "Home"
    },

    {
        id: 2,
        icons: <FaBell className="h-6 w-6" />,
        title: "Latest"
    },

    {
        id: 3,
        icons: <FaSearch className="h-6 w-6" />,
        title: "Search"
    },

    {
        id: 4,
        icons: <FaPlus className="h-6 w-6" />,
        title: "Blog"
    }
]



const Tabs = () => {

    const [active, setActive] = useState(false)

    const changeBackground = (idTocheck: number) => {
        TabsData.map(({ id }) => {
            if (id === idTocheck) {
                setActive(true)
                console.log(active);

                console.log("hello " + id + " and " + idTocheck);

            }
            else {
                setActive(false)
            }

            // console.log("hello outside");
        })
    }

    return (
        <div className="fixed inset-x-0 bottom-0 bg-red-600 shadow-lg md:hidden border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 z-50 border-t-purple/45 border-t-4"
            style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}

        >
            <div className="flex justify-between px-3 py-2">
                {TabsData.map(({ id, title, icons }) => (
                    <button onClick={() => changeBackground(id)} className={`flex flex-col rounded-lg items-center px-3  py-2 ${active ? "bg-purple/45 " : ""}`} key={id}>
                        {icons}
                        <span className="text-xs">{title}</span>
                    </button>

                ))}

            </div>
        </div>
    );
};

export default Tabs;
