export const menu  = [
    {
        id: 1,
        itemTitle: "MAIN",
        itemLinks: [
            {
                id: 1,
                url: "/",
                imgPath: "/home.svg",
                linkText: "Home"
            },
            {
                id: 2,
                url: "/users/1",
                imgPath: "/user.svg",
                linkText: "Profile"
            }
        ]
            
    },
    {
        id: 2,
        itemTitle: "LISTS",
        itemLinks: [
            {
                id: 1,
                url: "/users",
                imgPath: "/user.svg",
                linkText: "Users"
            },
            {
                id: 2,
                url: "/products",
                imgPath: "/product.svg",
                linkText: "Products"
            },
            {
                id: 3,
                url: "/orders",
                imgPath: "/order.svg",
                linkText: "Orders"
            },
            {
                id: 4,
                url: "/posts",
                imgPath: "/post2.svg",
                linkText: "Posts"
            }
        ]
    },
    {
        id: 3,
        itemTitle: "GENERAL",
        itemLinks: [
            {
                id: 1,
                url: "/",
                imgPath: "/element.svg",
                linkText: "Elements"
            },
            {
                id: 2,
                url: "/",
                imgPath: "/note.svg",
                linkText: "Notes"
            },
            {
                id: 3,
                url: "/",
                imgPath: "/form.svg",
                linkText: "Forms"
            },
            {
                id: 4,
                url: "/",
                imgPath: "/calendar.svg",
                linkText: "Calendar"
            }
        ]
    },
    {
        id: 4,
        itemTitle: "MAINTENAINCE",
        itemLinks: [
            {
                id: 1,
                url: "/",
                imgPath: "/setting.svg",
                linkText: "Settings"
            },
            {
                id: 2,
                url: "/",
                imgPath: "/backup.svg",
                linkText: "Backups"
            }
        ]
    },
    {
        id: 5,
        itemTitle: "ANALYTICS",
        itemLinks: [
            {
                id: 1,
                url: "/",
                imgPath: "/chart.svg",
                linkText: "Charts"
            },
            {
                id: 2,
                url: "/",
                imgPath: "/log.svg",
                linkText: "Logs"
            }
        ]
    }
]

export const topDealUsers = [
    {
        id: 1,
        img: "https://res.cloudinary.com/misangy-dev1/image/upload/v1665472791/E-commerce/avatars/temp_image_20210601_141726_2ba2f5b9-4b97-432d-aa97-22a24e1d4959_hu6fih.jpg",
        username: "Solo Razafy",
        email: "tianatsimindrana@outlook.fr",
        amount: "3.668"
    },
    {
        id: 2,
        img: "https://res.cloudinary.com/misangy-dev1/image/upload/v1617442008/registration/registration-form-2_uvqplj.png",
        username: "Mandres Tsiorifitia",
        email: "mandresy@gmail.com",
        amount: "3.256"
    },
    {
        id: 3,
        img: "https://res.cloudinary.com/misangy-dev1/image/upload/v1606826350/avatar/emptyAvatar_pmgmof.jpg",
        username: "Anjatiana RAZAFY",
        email: "anja@yahoo.fr",
        amount: "2.998"
    },
    {
        id: 4,
        img: "https://res.cloudinary.com/misangy-dev1/image/upload/v1606666267/samples/people/bicycle.jpg",
        username: "Harena Tsiorifitia",
        email: "harena@gmail.com",
        amount: "1.256"
    },
    {
        id: 5,
        img: "https://res.cloudinary.com/misangy-dev1/image/upload/v1606666265/samples/people/boy-snow-hoodie.jpg",
        username: "Kanty",
        email: "kanty@outlook.fr",
        amount: "4.500"
    },
    {
        id: 6,
        img: "https://res.cloudinary.com/misangy-dev1/image/upload/v1606666263/samples/people/smiling-man.jpg",
        username: "Adeline Watson",
        email: "adelin@gmail.com",
        amount: "1.256"
    },
    {
        id: 7,
        img: "https://res.cloudinary.com/misangy-dev1/image/upload/v1606666261/samples/people/kitchen-bar.jpg",
        username: "Augusta Mc",
        email: "augusta@gmail.com",
        amount: "3.234"
    }
]

export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "11.238",
    dataKey: "users",
    percentage: 45,
    chartData: [
        {name: "Sun", users: 400},
        {name: "Mon", users: 600},
        {name: "Tue", users: 500},
        {name: "Wed", users: 700},
        {name: "Thu", users: 400},
        {name: "Fri", users: 500},
        {name: "Sat", users: 450},
    ],
}

export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "2.6",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
        {name: "Sun", ratio: 400},
        {name: "Mon", ratio: 600},
        {name: "Tue", ratio: 500},
        {name: "Wed", ratio: 700},
        {name: "Thu", ratio: 400},
        {name: "Fri", ratio: 500},
        {name: "Sat", ratio: 450},
    ],
}

export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: "238",
    dataKey: "products",
    percentage: 21,
    chartData: [
        {name: "Sun", products: 400},
        {name: "Mon", products: 600},
        {name: "Tue", products: 500},
        {name: "Wed", products: 700},
        {name: "Thu", products: 400},
        {name: "Fri", products: 500},
        {name: "Sat", products: 450},
    ],
}

export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "56.432",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
        {name: "Sun", revenue: 400},
        {name: "Mon", revenue: 600},
        {name: "Tue", revenue: 500},
        {name: "Wed", revenue: 700},
        {name: "Thu", revenue: 400},
        {name: "Fri", revenue: 500},
        {name: "Sat", revenue: 450},
    ],
}

//Bar chart Box Data
export const barChartBoxRevenu = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
        { name: "Sun", profit: "4000"},
        { name: "Mon", profit: "3000"},
        { name: "Tue", profit: "2000"},
        { name: "Wed", profit: "2780"},
        { name: "Thu", profit: "1890"},
        { name: "Fri", profit: "2390"},
        { name: "Sat", profit: "3490"}
    ]
}

export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
        { name: "Sun", visit: "4000"},
        { name: "Mon", visit: "3000"},
        { name: "Tue", visit: "2000"},
        { name: "Wed", visit: "2780"},
        { name: "Thu", visit: "1890"},
        { name: "Fri", visit: "2390"},
        { name: "Sat", visit: "3490"}
    ]
}
