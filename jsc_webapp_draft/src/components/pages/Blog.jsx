import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

// Dummy testimonial data
const testimonials = [
    {
        id: 1,
        name: 'David Mitchell',
        role: 'Corporate Security Director, TechFort',
        content: 'JSC Exposing provided critical evidence that helped resolve our internal fraud case. Their attention to detail and professional reporting made all the difference in our investigation.',
        date: 'March 15, 2023',
        rating: 5
    },
    {
        id: 2,
        name: 'Sarah Johnson',
        role: 'Private Client',
        content: 'After a suspicious tenant application, JSC uncovered multiple false identities and prior convictions we never would have found. They saved us from a potentially dangerous situation.',
        date: 'January 8, 2023',
        rating: 5
    },
    {
        id: 3,
        name: 'Michael Chen',
        role: 'Family Law Attorney',
        content: 'The asset search JSC conducted was instrumental in our divorce case. They located hidden accounts and properties that conventional methods missed.',
        date: 'November 22, 2022',
        rating: 4
    }
    ];

    // Dummy blog posts
    const blogPosts = [
    {
        id: 1,
        title: 'How Modern Background Checks Differ From Traditional Methods',
        excerpt: 'Exploring the technological advancements that have revolutionized personal vetting processes in the past decade.',
        date: 'May 5, 2023',
        readTime: '4 min read'
    },
    {
        id: 2,
        title: 'Identifying Financial Red Flags in Small Businesses',
        excerpt: 'Key warning signs that may indicate fraudulent activity within your organization.',
        date: 'April 18, 2023',
        readTime: '6 min read'
    },
    {
        id: 3,
        title: 'The Legal Boundaries of Private Surveillance',
        excerpt: 'Understanding what constitutes admissible evidence and what crosses legal lines.',
        date: 'March 30, 2023',
        readTime: '5 min read'
    }
];

const Blog = () => {
    return (
        <div className="blog-page">
        {/* Testimonials Section */}
        <section className="testimonials-section">
            <div className="section-header">
            <h2>Client Testimonials</h2>
            <p>Hear from those who've trusted our services</p>
            </div>
            
            <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
                <div className="testimonial-card" key={testimonial.id}>
                <div className="rating">
                    {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? 'star filled' : 'star'}>
                        ★
                    </span>
                    ))}
                </div>
                <blockquote>"{testimonial.content}"</blockquote>
                <div className="client-info">
                    <h4>{testimonial.name}</h4>
                    <p className="client-role">{testimonial.role}</p>
                    <p className="testimonial-date">{testimonial.date}</p>
                </div>
                </div>
            ))}
            </div>
        </section>

        {/* Blog Section */}
        <section className="blog-section">
            <div className="section-header">
            <h2>Latest Insights</h2>
            <p>Industry knowledge and case studies</p>
            </div>
            
            <div className="blog-grid">
            {blogPosts.map((post) => (
                <article className="blog-card" key={post.id}>
                <div className="blog-content">
                    <h3>
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="excerpt">{post.excerpt}</p>
                    <div className="post-meta">
                    <span className="date">{post.date}</span>
                    <span className="read-time">{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className="read-more">
                    Read More →
                    </Link>
                </div>
                </article>
            ))}
            </div>
        </section>
        </div>
    );
};

export default Blog;