import React, { createContext } from 'react'

// 1 context create
export const AllDataContext = createContext()

// 2 context provider
export default function DataContextProvider({ children }) {
    const allData = {
        navBar: [
            { text: "Home", link: '/' },
            { text: "Doctos", link: '/' },
            {
                text: "Dropdown", link: '/',
                dropdown: [
                    { text: 'Dropdown 1.1', link: '/' },
                    { text: 'Dropdown 1.2', link: '/' },
                    {
                        text: 'Dropdown 1.3', link: '/',
                        dropdown: [
                            { text: 'Dropdown 2.1', link: '/' },
                            { text: 'Dropdown 2.2', link: '/' },
                        ]
                    },
                ]
            },
            {
                text: "Pages", link: '#',
                dropdown: [
                    { text: '404', link: '/404' }
                ]
            },
            {
                text: "Blogs", link: '#',
                dropdown: [
                    { text: 'Blog', link: '/blog' }
                ]
            },
            { text: "Contact Us", link: '/contact' },
        ],
        hero: [
            {
                title: `We Provide Medical Services That You Can Trust!`,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.',
                bgImg: 'slider/slider.jpg',
                btn: [
                    { text: 'Get Appointment', link: '/' },
                    { text: 'Learn More', link: '/' }
                ]
            },
            {
                title: `We Provide Medical Services That You Can Trust!`,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.',
                bgImg: 'slider/slider2.jpg',
                btn: [
                    { text: 'Get Appointment', link: '/' },
                    { text: 'About Us', link: '/' }
                ]
            },
            {
                title: `We Provide Medical Services That You Can Trust!`,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.',
                bgImg: 'slider/slider3.jpg',
                btn: [
                    { text: 'Get Appointment', link: '/' },
                    { text: 'Conatct Now', link: '/' }
                ]
            },
        ],
        schedule: [
            {
                icon: 'icofont-ambulance-cross',
                tagline: 'Lorem Amet',
                title: 'Emergency Cases',
                desc: 'Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.',
                btnText: 'LEARN MORE',
                btnIcon: 'fa-arrow-right-long'
            },
            {
                icon: 'icofont-prescription',
                tagline: 'Fusce Porttitor',
                title: 'Doctors Timetable',
                desc: 'Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.',
                btnText: 'LEARN MORE',
                btnIcon: 'fa-arrow-right-long'
            },
            {
                icon: 'icofont-ui-clock',
                tagline: 'Donec luctus',
                title: 'Opening Hours',
                desc: [
                    { days: 'Monday - Friday ', time: '8.00-20.00' },
                    { days: 'Saturday ', time: '9.00-18.30' },
                    { days: 'Monday - Thusday ', time: '9.00-15.00' },
                ],
                btnText: 'LEARN MORE',
                btnIcon: 'fa-arrow-right-long'
            },
        ],

        features: {
            secTitle: 'We Are Always Ready to Help You & Your Family',
            secDesc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts',
            featureItems: [
                {
                    icon: 'icofont-ambulance-cross',
                    title: 'Emergency Help',
                    desc: 'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.'
                },
                {
                    icon: 'icofont-medical-sign-alt',
                    title: 'Enriched Pharmecy',
                    desc: 'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.'
                },
                {
                    icon: 'icofont-stethoscope',
                    title: 'Medical Treatment',
                    desc: 'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.'
                },
            ]
        },
        funFacts: {
            item: [
                {
                    icon: 'icofont-home',
                    counter: 3468,
                    tagline: 'Hospital Rooms'
                },
                {
                    icon: 'icofont-user-alt-3',
                    counter: 557,
                    tagline: 'Specialist Doctors'
                },
                {
                    icon: 'icofont-simple-smile',
                    counter: 4379,
                    tagline: 'Happy Patients'
                },
                {
                    icon: 'icofont-table',
                    counter: 32,
                    tagline: 'Years of Experience'
                },
            ]
        },
        whyChoose: {
            secTitle: 'We Offer Different Services To Improve Your Health',
            secDesc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts',
            whoWeAre: {
                title: 'Who We Are',
                des1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo. ',
                des2: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                list: [
                    [
                        'Maecenas vitae luctus nibh. ',
                        'Duis massa massa.',
                        'Aliquam feugiat interdum.'
                    ],
                    [
                        'Maecenas vitae luctus nibh. ',
                        'Duis massa massa.',
                        'Aliquam feugiat interdum.',
                        'Aliquam feugiat interdum.',
                        'Aliquam feugiat interdum.'
                    ]
                ],
            }
        },
        callToAction: {
            secTitle: 'Do you need Emergency Medical Care? Call @ 1234 56789',
            secDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor dictum turpis nec gravida.',
        },
        portfolio: {
            secTitle: 'We Maintain Cleanliness Rules Inside Our Hospital',
            secDesc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts',
            portfolioItem: [
                {
                    img: 'portfolio/pf1.jpg',
                    btnText: 'View Details',
                    link: '/portfolio'
                },
                {
                    img: 'portfolio/pf2.jpg',
                    btnText: 'View Details',
                    link: '/portfolio'
                },
                {
                    img: 'portfolio/pf3.jpg',
                    btnText: 'View Details',
                    link: '/portfolio'
                },
                {
                    img: 'portfolio/pf4.jpg',
                    btnText: 'View Details',
                    link: '/portfolio'
                },
            ],
            portfolioPage: {
                secTitle: 'Portfolio Single',
                portfolioSlider: [
                    '/call-bg.jpg',
                    '/call-bg.jpg',
                    '/call-bg.jpg'
                ],
                portfolioInfo: {
                    date: [
                        { category: 'Category :', details: 'Heart Surgery' },
                        { category: 'Date :', details: 'April 20, 2019' },
                        { category: 'Client :', details: 'Suke Agency' },
                        { category: 'Age :', details: 'Typo' },
                    ],
                    infos: {
                        title: 'Here is the name of this project here',
                        desc: [
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor a ti incididunt ut labore et dolore to in magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna aliqua uis nostrud.Lorem ipsum dolor sit amet, in a in to in a consectetur.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna in a aliqua uis nostrud.Lorem ipsum dolor sit amet, in aed do eiusmod',
                            'ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna to in aliqua uis nostrud.Lorem ipsum dolor sit amet, in aed do eiusmod.ncididunt ut labore et dolore magna aliqua.',
                            'ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna a aliqua uis nostrud.Lorem ipsum dolor sit amet, in aed do eiusmod.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna aliqua uis nostrud.Lorem ipsum dolor sit amet, in aed do eiusmod. dolor sit amet, in aed do eiusmod.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna aliqua uis nostrud.'
                        ]
                    }
                },
            },
        },
        services: {
            secTitle: 'We Offer Different Services To Improve Your Health',
            secDesc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts',
            service: [
                {
                    icon: 'icofont-prescription',
                    title: 'General Treatment',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.',
                },
                {
                    icon: 'icofont-tooth',
                    title: 'Teeth Whitening',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.',
                },
                {
                    icon: 'icofont-heart-alt',
                    title: 'Heart Surgery',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.',
                },
                {
                    icon: 'icofont-listening',
                    title: 'Ear Treatment',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.',
                },
                {
                    icon: 'icofont-eye-alt',
                    title: 'Vision Problems',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.',
                },
                {
                    icon: 'icofont-blood',
                    title: 'Blood Transfusion',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.',
                },
            ]
        },
        pricing: {
            secTitle: 'We Provide You The Best Treatment In Resonable Price',
            secDesc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts',
            pricesSec: [
                {
                    icon: 'icofont-ui-cut',
                    title: 'Plastic Suggery',
                    amount: '$199',
                    visit: '/ Per Visit',
                    priceList: [
                        {
                            check: true,
                            list: "Lorem ipsum dolor sit"
                        },
                        {
                            check: true,
                            list: "Cubitur sollicitudin fentum"
                        },
                        {
                            check: false,
                            list: "Nullam interdum enim"
                        },
                        {
                            check: false,
                            list: "Donec ultricies metus"
                        },
                        {
                            check: false,
                            list: "Pellentesque eget nibh"
                        },
                    ],
                    btnText: 'Book Now',
                },
                {
                    icon: 'icofont-tooth',
                    title: 'Teeth Whitening',
                    amount: '$299',
                    visit: '/ Per Visit',
                    priceList: [
                        {
                            check: true,
                            list: "Lorem ipsum dolor sit"
                        },
                        {
                            check: true,
                            list: "Cubitur sollicitudin fentum"
                        },
                        {
                            check: true,
                            list: "Nullam interdum enim"
                        },
                        {
                            check: false,
                            list: "Donec ultricies metus"
                        },
                        {
                            check: false,
                            list: "Pellentesque eget nibh"
                        },
                    ],
                    btnText: 'Book Now',
                },
                {
                    icon: 'icofont-heart-beat',
                    title: 'Heart Suggery',
                    amount: '$399',
                    visit: '/ Per Visit',
                    priceList: [
                        {
                            check: true,
                            list: "Lorem ipsum dolor sit"
                        },
                        {
                            check: true,
                            list: "Cubitur sollicitudin fentum"
                        },
                        {
                            check: true,
                            list: "Nullam interdum enim"
                        },
                        {
                            check: true,
                            list: "Donec ultricies metus"
                        },
                        {
                            check: true,
                            list: "Pellentesque eget nibh"
                        },
                    ],
                    btnText: 'Book Now',
                    link: '/',
                },
            ]
        },
        blogs: {
            secTitle: 'Keep up with Our Most Recent Medical News.',
            secDesc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts',
            blogItems: [
                {
                    img: 'blog/blog1.jpg',
                    date: '22 Aug, 2020',
                    title: 'We have annnocuced our new product.',
                    desc: 'Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.',
                    link: ''
                },
                {
                    img: 'blog/blog2.jpg',
                    date: '15 Jul, 2020',
                    title: 'Top five way for solving teeth problems.',
                    desc: 'Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.',
                    link: ''
                },
                {
                    img: 'blog/blog3.jpg',
                    date: '05 Jan, 2020',
                    title: 'We provide highly business soliutions.',
                    desc: 'Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.',
                    link: ''
                },
            ],
            blogPage: {
                secTitle: 'Blog Single',
                news: {
                    newsImg: 'blog/blog1.jpg',
                    newsTitle: {
                        title: 'More than 80 clinical trials launch to test of the coronavirus .',
                        titleLink: '/',
                    },
                    authorDetails: {
                        authorImg: 'author/author1.jpg',
                        authorName: 'Aothor Name',
                        postDate: '03 Feb 2019',
                        commentsCount: '05 Comments',
                        viewsCount: '33K Views',
                    },
                    newsTexts: {
                        text1: [
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam.',
                            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam. Nam ac risus vitae sem vehicula egestas. Sed velit nulla, viverra non commod'
                        ],
                        text2: [
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam.',
                        ],
                        text3: [
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam.',
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam.',
                        ],
                    },
                    newsGallery: [
                        'blog/blog2.jpg',
                        'blog/blog3.jpg',
                    ],
                    blockquoteText: [
                        'Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam. Nam ac risus vitae sem vehicula egestas. Sed velit nulla, viverra non commodo et, sodales',
                    ],
                    comments: {
                        title: 'All Comments',
                        comment: [
                            {
                                authorImg: 'author/author1.jpg',
                                authorName: 'Aothor Name',
                                postDate: '03 Feb 2019',
                                postTime: '03:38 AM',
                                commentText: 'Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas',
                                replayLink: '/'
                            },
                            {
                                authorImg: 'author/author2.jpg',
                                authorName: 'Aothor Name',
                                postDate: '03 Feb 2019',
                                postTime: '03:38 AM',
                                commentText: 'Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas',
                                replayLink: '/',
                                replay: true
                            },
                            {
                                authorImg: 'author/author3.jpg',
                                authorName: 'Aothor Name',
                                postDate: '03 Feb 2019',
                                postTime: '03:38 AM',
                                commentText: 'Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas',
                                replayLink: '/'
                            },
                        ],
                        leaveComments: {
                            title: 'Leave Comments',
                            form: {
                                input: [
                                    { name: 'fName', tpye: 'text', placeholder: 'First name', icon: 'fa-user' },
                                    { name: 'lName', tpye: 'text', placeholder: 'Last name', icon: 'fa-user' },
                                    { name: 'email', type: 'email', placeholder: 'Your Email', icon: 'fa-envelope' },
                                ],
                                msg: [
                                    { name: 'message', placeholder: 'Type Your Message Here', icon: 'fa-pencil' },
                                ],
                                submitText: 'Submit Comment',
                            },
                        },
                    },
                    sideBar: {
                        widget: {
                            categorys: {
                                title: 'Blog Categories',
                                categoryItem: [
                                    "Men's Apparel",
                                    "Women's Apparel",
                                    "Bags Collection",
                                    "Accessories",
                                    "Sun Glasses"
                                ]
                            },
                            recentPost: {
                                title: 'Recent post',
                                post: [
                                    { img: 'blog/blog-sidebar1.jpg', title: 'We have annnocuced our new product.', date: 'Jan 11, 2020', comments: 35 },
                                    { img: 'blog/blog-sidebar2.jpg', title: 'Top five way for solving teeth problems.', date: 'Jan 11, 2020', comments: 35 },
                                    { img: 'blog/blog-sidebar3.jpg', title: 'We provide highly business soliutions.', date: 'Jan 11, 2020', comments: 35 },
                                ]
                            },
                            tags: {
                                title: 'Tagas',
                                tag: [
                                    "business",
                                    "wordpress",
                                    "html",
                                    "multipurpose",
                                    "education",
                                    "template",
                                    "Ecommerce",
                                ]
                            },
                        },
                    },
                },
            },
        },
        clients: [
            'client/client1.png',
            'client/client2.png',
            'client/client3.png',
            'client/client4.png',
            'client/client5.png',
        ],
        appointment: {
            secTitle: 'We Are Always Ready to Help You. Book An Appointment',
            secDesc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts',
            form: {
                input: [
                    { name: 'name', tpye: 'text', placeholder: 'Name' },
                    { name: 'email', type: 'email', placeholder: 'Email' },
                    { name: 'phone', type: 'text', placeholder: 'Phone' },
                ],
                department: [
                    'Department', 'Cardiac Clinic', 'Neurology', 'Dentistry', 'Gastroenterology'
                ],
                doctor: [
                    'Doctor', 'Dr. Akther Hossain', 'Dr. Dery Alex', 'Dr. Jovis Karon'
                ],
                date: [
                    { name: 'date', tpye: 'date', placeholder: 'Date' },
                ],
                msg: [
                    { name: 'message', placeholder: 'Write Your Message Here.....' },
                ],
                submitText: 'Book An Appointment',
                confirmWillText: '( We will be confirm by an Text Message )'
            },
        },
        newsletter: {
            secTitle: 'Sign up for newsletter',
            secDesc: 'Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero alterum.',
            form: {
                input: [
                    { name: 'email', type: 'email', placeholder: 'Your email address' },
                ],
                submitText: 'Subscribe',
            },
        },
        error: {
            secTitle: '404',
            tagline: "Oop's  sorry we can't find that page!",
            secDesc: "Aenean eget sollicitudin lorem, et pretium felis. Nullam euismod diam libero, sed dapibus leo laoreet ut. Suspendisse potenti. Phasellus urna lacus"
        },
        contactPage: {
            secTitle:'Contact Us',
            secDesc:'If you have any questions please fell free to contact with us.',
            inputForm: [
                { type: "text", name: "name", placeholder: "Name" },
                { type: "email", name: "email", placeholder: "Email" },
                { type: "text", name: "subject", placeholder: "Subject" },
                { type: "email", name: "email", placeholder: "Email" },
            ],
            textareaForm: [
                { name: "message", placeholder: "Your Message" }
            ],
            contactInfo:[
                {icon:'icofont icofont-ui-call',title:'+(000) 1234 56789',desc:'info@company.com'},
                {icon:'icofont icofont-google-map',title:'2 Fir e Brigade Road',desc:'Chittagonj, Lakshmipur'},
                {icon:'icofont icofont-wall-clock',title:'Mon - Sat: 8am - 5pm',desc:'Sunday Closed'},
            ],
            maps:{
                longitude:90.356331, latitude:23.684994,
            }

        },
        footer: {
            aboutTitle: {
                secTitle: 'About Us',
                secDesc: 'Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.',
            },

            quickTitle: {
                secTitle: 'Quick Links',
                secDesc: '',
            },
            openHourTitle: {
                secTitle: 'Open Hours',
                secDesc: 'Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.',
            },
            newsletterTitle: {
                secTitle: 'Newsletter',
                secDesc: 'subscribe to our newsletter to get allour news in your inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                input: [
                    { name: 'email', tpye: 'email', placeholder: 'Email Address', btnIcon: 'icofont-paper-plane' },
                ]

            },

            footerSocial: [
                { link: '/', icon: 'icofont-facebook' },
                { link: '/', icon: 'icofont-google-plus' },
                { link: '/', icon: 'icofont-twitter' },
                { link: '/', icon: 'icofont-vimeo' },
                { link: '/', icon: 'icofont-pinterest' },
            ],
            quickLinks: {
                link1: [
                    { link: '/', text: 'Home' },
                    { link: '/', text: 'About Us' },
                    { link: '/', text: 'Services' },
                    { link: '/', text: 'Our Cases' },
                    { link: '/', text: 'Other Links' },
                ],
                link2: [
                    { link: '/', text: 'Consuling' },
                    { link: '/', text: 'Finance' },
                    { link: '/', text: 'Testimonials' },
                    { link: '/', text: 'FAQ' },
                    { link: '/', text: 'Contact Us' },
                ]
            },
            openHourSchedule: {
                schedule: [

                    { days: 'Monday - Friday ', time: '8.00-20.00' },
                    { days: 'Saturday ', time: '9.00-18.30' },
                    { days: 'Monday - Thusday ', time: '9.00-15.00' },
                ]
            },

            copyRight: {
                copyRightText: '© Copyright 2018  |  All Rights Reserved by ',
                webLink: '/',
                webText: 'wpthemesgrid.com'
            },
        },

    }


    return (
        <AllDataContext.Provider value={allData}>
            {children}
        </AllDataContext.Provider>
    )
}
