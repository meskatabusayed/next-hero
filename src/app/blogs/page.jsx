import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <div className='p-24'>
      {
        datas?.map((data) => (
            <div key={data.slug} className='border-2 p-12 bg-red-400 text-white'>
                <h3>{data.title}</h3>
                <h3>{data.description}</h3>
                <button className='bg-blue-700 p-2 text-white rounded-md font-bold mt-2'>
                    <Link href={`/blogs/${data.slug}`}>View Details</Link>
                    
                    </button>
            </div>
        ))
      }
    </div>
  )
}

export default page;

const datas = [
    {
        "slug": "tech-trends-2024",
        "title": "Tech Trends 2024",
        "description": "Exploring the latest advancements in technology for the upcoming year."
    },
    {
        "slug": "healthy-eating-guide",
        "title": "Healthy Eating Guide",
        "description": "A comprehensive guide to maintaining a balanced diet."
    },
    {
        "slug": "travel-tips-europe",
        "title": "Travel Tips for Europe",
        "description": "Essential advice for a memorable European adventure."
    },
    {
        "slug": "diy-home-improvement",
        "title": "DIY Home Improvement",
        "description": "Step-by-step projects to enhance your living space."
    },
    {
        "slug": "financial-planning-basics",
        "title": "Financial Planning Basics",
        "description": "Key strategies for effective financial management."
    },
    {
        "slug": "fitness-routines-2024",
        "title": "Fitness Routines 2024",
        "description": "New workout plans to achieve your fitness goals."
    },
    {
        "slug": "art-of-meditation",
        "title": "The Art of Meditation",
        "description": "Techniques to improve your meditation practice."
    },
    {
        "slug": "culinary-delights",
        "title": "Culinary Delights",
        "description": "Exploring gourmet recipes from around the world."
    },
    {
        "slug": "gardening-tips-spring",
        "title": "Gardening Tips for Spring",
        "description": "Prepare your garden for the blooming season."
    },
    {
        "slug": "modern-web-design",
        "title": "Modern Web Design",
        "description": "Trends and practices for creating stunning websites."
    },
    {
        "slug": "photography-essentials",
        "title": "Photography Essentials",
        "description": "Tips and tricks for capturing perfect photos."
    },
    {
        "slug": "remote-work-success",
        "title": "Remote Work Success",
        "description": "Best practices for working effectively from home."
    },
    {
        "slug": "mindfulness-techniques",
        "title": "Mindfulness Techniques",
        "description": "Approaches to enhance your mental well-being."
    },
    {
        "slug": "historical-landmarks",
        "title": "Exploring Historical Landmarks",
        "description": "A journey through significant sites of history."
    },
    {
        "slug": "eco-friendly-living",
        "title": "Eco-Friendly Living",
        "description": "Adopting a sustainable lifestyle for a better future."
    },
    {
        "slug": "social-media-marketing",
        "title": "Social Media Marketing",
        "description": "Strategies to grow your brand online."
    },
    {
        "slug": "cryptocurrency-basics",
        "title": "Cryptocurrency Basics",
        "description": "Understanding the fundamentals of digital currencies."
    },
    {
        "slug": "self-care-routines",
        "title": "Self-Care Routines",
        "description": "Daily practices to nurture your body and mind."
    },
    {
        "slug": "exploring-space",
        "title": "Exploring Space",
        "description": "The latest discoveries and missions in space exploration."
    },
    {
        "slug": "writing-tips-novices",
        "title": "Writing Tips for Novices",
        "description": "Guidance for aspiring writers to hone their craft."
    }
]

