const Navdata = [
    {
        id:1,
        buttoname:"Catalog",
        subbuthai:false
    },
    {
        id:2,
        buttoname:"Services",
        subbuthai:true,
        subbut:[
            {
                id:1,
                subbutname:"Texthere"
            },
            {
                id:2,
                subbutname:"Texthere"
            },
            {
                id:3,
                subbutname:"Texthere"
            },
            {
                id:4,
                subbutname:"Texthere"
            }
        ]
    },
    {
        id:3,
        buttoname:"Our Projects",
        subbuthai:true,
        subbut:[
            {
                id:1,
                subbutname:"Texthere"
            },
            {
                id:2,
                subbutname:"Texthere"
            }
        ]
    },
    {
        id:4,
        buttoname:"Achievements",
        subbuthai:false
    },
    {
        id:5,
        buttoname:"About us",
        subbuthai:true,
        add:"/about",
        subbut:[
            {
                id:1,
                link:'img1',
                subbutname:"Mission & Vision"
            },
            {
                id:2,
                link:'img2',
                subbutname:"Introduction"
            },
            {
                id:3,
                link:'img3',
                subbutname:"Who We Are"
            },
            {
                id:4,
                link:'img4',
                subbutname:"History"
            },
            {
                id:5,
                link:'img5',
                subbutname:"Organization Structure"
            },
            {
                id:6,
                link:'img6',
                subbutname:"Social Responsibility"
            },
            {
                id:7,
                link:'img7',
                subbutname:"QA and HSE"
            }
        ]
    }
]

export default Navdata