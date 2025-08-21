import React from 'react';

const RandomPostFoot = [
    {

        paragraph: 'Apple’s new ipad lets you play the latest games for a fraction of the price ',
        tag: 'Tech',
        date: 'August 16, 2025',
        imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinnCM4r8GkulMGCp_j4MwBxP6xhSqT9q_5grYZBJj5yMeSSnVdy8QVgagKIQHpVn6T5DT95MdIbMeRhMCdoPbkkjnDDgL95xJ31KX2D5Qv73yl4ClrDQiqRvU6rkgAps0evygy9m_g67ah/w270-h213-p-k-no-nu/image-1-770x410.jpeg',
        isFeatured: true
    },
    {

        paragraph: 'Explore the cutting-usamus dignissimos illo! Consequatur,  ',
        tag: 'Tech',
        date: 'August 16, 2025',
        imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinnCM4r8GkulMGCp_j4MwBxP6xhSqT9q_5grYZBJj5yMeSSnVdy8QVgagKIQHpVn6T5DT95MdIbMeRhMCdoPbkkjnDDgL95xJ31KX2D5Qv73yl4ClrDQiqRvU6rkgAps0evygy9m_g67ah/w270-h213-p-k-no-nu/image-1-770x410.jpeg',
        isFeatured: true
    },
    {

        paragraph: 'rctetur soluta ea libero, tenetur corrupti cupiditate expedi  ',
        tag: 'Tech',
        date: 'August 16, 2025',
        imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinnCM4r8GkulMGCp_j4MwBxP6xhSqT9q_5grYZBJj5yMeSSnVdy8QVgagKIQHpVn6T5DT95MdIbMeRhMCdoPbkkjnDDgL95xJ31KX2D5Qv73yl4ClrDQiqRvU6rkgAps0evygy9m_g67ah/w270-h213-p-k-no-nu/image-1-770x410.jpeg',
        isFeatured: true
    },
    {

        paragraph: 'Explore  accusamus dignissimos illo! Consequatur, magnam quae?  ',
        tag: 'Tech',
        date: 'August 16, 2025',
        imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinnCM4r8GkulMGCp_j4MwBxP6xhSqT9q_5grYZBJj5yMeSSnVdy8QVgagKIQHpVn6T5DT95MdIbMeRhMCdoPbkkjnDDgL95xJ31KX2D5Qv73yl4ClrDQiqRvU6rkgAps0evygy9m_g67ah/w270-h213-p-k-no-nu/image-1-770x410.jpeg',
        isFeatured: true
    },
   
]

export default function RandomPost() {
    return (
        <div className='flex flex-col gap-4   font-sans antialiased'>
            <div className='max-w-md mx-auto  p-1  relative'>
                <div>
                    <span className="text-2xl font-semibold  text-center text-white py-1 px-1.5 mb-[1px] ">Random Post</span>
                </div>
           
                {RandomPostFoot.map((article, index) => (
                    <div key={index} className='flex gap-4 rounded-md shadow-sm p-4 hover:shadow-lg transition-shadow duration-300 relative'>
                        <img src={article.imageUrl} alt={article.title} className='w-30 h-auto cursor-pointer object-cover rounded-lg mb-4' />
                        <div className='flex flex-col text-start relative '>
                            <p className='text-gray-600 cursor-pointer mt-2'>{article.paragraph}</p>
                            <div className='mt-2 text-sm text-gray-500'>
                                <span>{article.tag}</span> | <span>{article.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};