import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const resolveImageUrl = (img) => {
  if (!img) return '';
  if (img.startsWith('http://') || img.startsWith('https://')) return img;
  const baseUrl = import.meta.env.BASE_URL || '/';
  return `${baseUrl}${img.replace(/^\//, '')}`;
};

const BlogCard = ({ post, onClick }) => (
  <motion.div
    whileHover={{ y: -4 }}
    onClick={() => onClick(post)}
    className="studio-card p-0 overflow-hidden cursor-pointer group flex flex-col justify-between"
  >
    <div className="relative h-48 overflow-hidden bg-black/60">
      <img
        src={resolveImageUrl(post.image)}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
      />
      <div className="absolute top-4 left-4">
        <span className="badge-minimal bg-black/70 border-white/10 text-white">
          {post.category}
        </span>
      </div>
    </div>

    <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs mb-3">
          <Calendar size={13} />
          <span>{post.date}</span>
        </div>

        <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-zinc-200 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 mb-6">
          {post.excerpt}
        </p>
      </div>

      <div className="flex items-center text-xs font-semibold tracking-wider uppercase text-zinc-300 group-hover:text-white transition-colors pt-4 border-t border-white/[0.06]">
        <span>Read Note</span>
        <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-neutral-950 border border-white/10 w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl relative shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/60 rounded-full text-zinc-300 hover:text-white border border-white/10 transition-colors z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div className="h-56 sm:h-72 relative bg-black">
          <img src={resolveImageUrl(post.image)} alt={post.title} className="w-full h-full object-cover opacity-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="badge-minimal mb-3 bg-black/80 border-white/15 text-white">
              {post.category}
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white mb-2 leading-tight">
              {post.title}
            </h2>
            <div className="flex items-center gap-3 text-zinc-400 font-mono text-xs">
              <span>{post.date}</span>
              <span>•</span>
              <span>Samuel Erwin</span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-10 text-zinc-300 text-sm sm:text-base leading-relaxed space-y-4">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id="blog" className="py-32 relative border-t border-white/[0.06] bg-black/30">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-3">
              Writing
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-silver tracking-tight">
              Engineering Notes
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
            Short write-ups documenting tools and technical setups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {blogPosts.map((post) => (
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
