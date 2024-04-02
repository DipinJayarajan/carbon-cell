import { format } from 'date-fns';
import React from 'react';

const blogData= [
    {
        id: 1,
        imageURL:
            'https://media.istockphoto.com/id/1463455851/photo/cryptocurrency-market-financial-data-and-candlesticks-internet-banking.webp?b=1&s=170667a&w=0&k=20&c=-vY_0E0xx9ZNF87VSNRakCbLaUkwpe0FpEtQgy_68xU=',
        title: "The Rise of Bitcoin: A Beginner's Guide",
        intro: "Bitcoin, the world's first cryptocurrency, has been making waves in the financial world. In this beginner-friendly guide, we explore what Bitcoin is, how it works, and why it's important for the future of finance.",
        author: 'John Doe',
        authorAvatar:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Adams_The_Tetons_and_the_Snake_River.jpg/1200px-Adams_The_Tetons_and_the_Snake_River.jpg',
        postedOn: '2024-04-02',
    },
    {
        id: 2,
        imageURL: 'https://kustveiligheid.be/wp-content/uploads/2022/01/g8fg787.jpg',
        title: '10 Things You Should Know Before Investing in Bitcoin',
        intro: 'Thinking about investing in Bitcoin? Before you take the plunge, here are 10 essential things you need to know. From understanding the risks to choosing the right wallet, this article covers it all.',
        author: 'Jane Smith',
        authorAvatar:
            'https://img.freepik.com/premium-photo/ai-generated-illustration-random-abstract-background-organic-shapes-clean-nature-inspired_665346-47899.jpg',
        postedOn: '2024-04-01',
    },
    {
        id: 3,
        imageURL: 'https://academy.education.investing.com/wp-content/uploads/2022/03/bitcoin-what-is-crypto-scaled.jpg',
        title: 'The Future of Bitcoin: Predictions and Trends',
        intro: 'As Bitcoin continues to gain mainstream acceptance, what does the future hold for this groundbreaking cryptocurrency? Join us as we explore the latest predictions and trends shaping the future of Bitcoin.',
        author: 'David Johnson',
        authorAvatar: 'https://cdn-site-assets.veed.io/Fish_6e8d209905/Fish_6e8d209905.webp?width=640&quality=75',
        postedOn: '2024-03-31',
    },
];

export default function Blogs() {
    return (
        <div>
            <h4 className='py-3 text-lg text-white'>News and Blogs</h4>
            <div className='flex overflow-x-auto  gap-2 flex-row items-center'>
                {blogData.map((blog) => (
                    <div key={blog.id} className='group h-[auto] w-[210px] max-w-lg cursor-pointer overflow-hidden rounded-lg bg-muted shadow-lg'>
                        <img src={blog.imageURL} alt={blog.intro} className='h-20 w-full object-cover transition-all ease-in group-hover:scale-105' />
                        <div className='p-5'>
                            <h4 className='mb-2  font-bold '>{blog.title}</h4>
                            <p className='mb-4 text-sm leading-normal text-muted-foreground line-clamp-2 '>{blog.intro}</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <img src={blog.authorAvatar} alt={blog.authorAvatar} className='mr-2 h-8 w-8 rounded-full object-cover' />
                                    <span className='font-semibold'>{blog.author}</span>
                                </div>
                                <span className='text-xs text-muted-foreground'>{format(new Date(blog.postedOn), 'PP')}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}