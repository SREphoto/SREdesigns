import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, X, Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogCard = ({ post, onClick }) => (
    <motion.div
        whileHover={{ y: -10 }}
        onClick={() => onClick(post)}
        className="glass-card p-0 overflow-hidden cursor-pointer group"
    >
        <div className="relative h-48 overflow-hidden">
            <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-primary text-xs font-bold tracking-widest uppercase rounded-full">
                    {post.category}
                </span>
            </div>
        </div>

        <div className="p-8">
            <div className="flex items-center gap-2 text-muted text-sm mb-4">
                <Calendar size={14} />
                <span>{post.date}</span>
            </div>

            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
            </h3>

            <p className="text-muted leading-relaxed line-clamp-3 mb-6">
                {post.excerpt}
            </p>

            <div className="flex items-center text-white text-sm font-bold tracking-wider uppercase group-hover:text-primary transition-colors">
                Read Article <ArrowRight size={16} className="ml-2" />
            </div>
        </div>
    </motion.div>
);

const BlogPostModal = ({ post, onClose }) => {
    if (!post) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 border border-glass-border w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:text-primary transition-colors z-10"
                >
                    <X size={24} />
                </button>

                <div className="h-64 sm:h-80 relative">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                    <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 right-6">
                        <span className="px-3 py-1 bg-primary text-black text-xs font-bold tracking-widest uppercase rounded-full mb-4 inline-block">
                            {post.category}
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white mb-2 leading-tight">
                            {post.title}
                        </h2>
                        <div className="flex items-center gap-4 text-gray-300 text-sm">
                            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                            <span className="flex items-center gap-1"><User size={14} /> SREdesigns</span>
                        </div>
                    </div>
                </div>

                <div className="p-6 sm:p-10 prose prose-invert prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </motion.div>
        </motion.div>
    );
};

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <section id="blog" className="py-32 relative bg-gray-950/30">
            <div className="container">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Insights</span>
                    <h2 className="text-5xl md:text-6xl font-bold">Engineering <span className="text-gradient">Blog</span></h2>
                    <p className="text-muted mt-4 text-lg max-w-2xl mx-auto">
                        Thoughts on software architecture, design systems, and the future of coding.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map(post => (
                        <BlogCard key={post.id} post={post} onClick={setSelectedPost} />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedPost && (
                    <BlogPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Blog;
