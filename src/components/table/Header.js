import React from 'react';

export default function Header({ data }) {
    const customer = [
        {
            name: "New Enquiries",
            value: data?.length,
            src: "/static/navicon/Frame 35311.svg",
            color:"#f13c3c"
        },
        {
            name: "Property for sale",
            value: "0",
            src: "/static/navicon/Frame 35311.svg",
            color:"#44a1dc"

        },
        {
            name: "Property for Rent",
            value: "0",
            src: "/static/navicon/Frame 35311.svg",
            color:"#399e5a"

        },
        {
            name: "Recommended Leads",
            value: "0",
            src: "/static/navicon/Frame 36821.svg",
            color:"#cc9000"

        },
    ];

    return (
        <div
            style={{ background: "#ededed", height: "150px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4  text-sm  font-medium"
        >
            {customer.map((e) => (
                <div style={{background:e.color}}
                    key={e.name}
                    className={`flex flex-col items-center justify-center p-1 dark:bg-red-900 rounded-lg shadow-md text-white`}
                >
                    <img className="h-10 w-10 mb-4" src={e.src} alt={e.name} />
                    <div className="text-center">
                        <p className="font-semibold text-sm">{e.name}</p>
                        <p className="text-xl">{e.value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
