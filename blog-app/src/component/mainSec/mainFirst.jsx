import React from 'react';

// Data for the news cards, updated to include a 'tag', 'date', and 'isFeatured' flag.
const newsArticles = [
  {
    title: "U.S. President Donald Trump said Wednesday (August 13, 2025) that he would not rule out a meeting with Russian President Vladimir Putin to discuss the ongoing war in Ukraine.",
    tag: 'News',
    date: 'August 13, 2025',
    imageUrl: 'https://th-i.thgim.com/public/incoming/2ugj55/article69930584.ece/alternates/LANDSCAPE_1200/Trump_Russia_Ukraine_War_In_His_Words_69524.jpg',
    isFeatured: true
  },
 
  {
    title: 'Cristiano Ronaldo to play in India for the first time in 2025: Al Nassr vs Goa FC',
    tag: 'Break',
    date: 'August 14, 2025',
    imageUrl: 'https://static.toiimg.com/thumb/msid-123319641,imgsize-106630,width-400,resizemode-4/123319641.jpg',
    isFeatured: false
  },
 {
    title: 'Trump-Putin Alaska Summit on Hold Amid Ukraine Tensions',
    tag: 'Break',
    date: 'August 15, 2025',
    imageUrl: 'https://th-i.thgim.com/public/news/national/p1a1yu/article69939546.ece/alternates/LANDSCAPE_1200/rp.jpg',
    isFeatured: false
  },
  {
    title: 'PM Modi says made in India chips by end of 2025, calls for indigenous social media, tech platforms',
    tag: 'News',
    date: 'August 15, 2025',
    imageUrl: 'https://images.indianexpress.com/2025/08/chip.jpg?w=640',
    isFeatured: false
  },
  {
    title: 'Hrithik Roshan, Jr NTR film WAR 2 beats lifetime haul of Salman Khan`s Sikandar',
    tag: 'News',
    date: 'August 16, 2025',
    imageUrl: 'https://www.hindustantimes.com/ht-img/img/2025/08/16/550x309/War_2_box_office_1755343405293_1755343405411.jpg',
    isFeatured: false
  }
];

export default function mainFirst() {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">Latest News</h1>

        {/* Grid layout for news articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          {newsArticles.map((article, index) => (
            <div
              key={index}
              // The large card spans 2 columns on medium screens and up
              className={`${
                article.isFeatured ? 'md:col-span-2' : ''
              } relative rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group`}
            >
              
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={article.imageUrl}
                alt={article.title}
              />

              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                {/* Optional tag like "News" or "Break" */}
                {article.tag && (
                  <span className="font-bold text-xs uppercase tracking-wider bg-black px-2 py-1 inline-block mb-2 self-start rounded-full">
                    {article.tag}
                  </span>
                )}
                {/* Article title */}
                <h3 className="text-2xl font-bold mt-2">
                  {article.title}
                </h3>
                {/* Article date */}
                <p className="text-sm text-gray-200 mt-1">
                  {article.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

