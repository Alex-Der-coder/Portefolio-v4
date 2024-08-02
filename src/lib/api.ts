import clientPromise from "../../src/lib/mongodb";
import Post from '../models/Post.js';
import { ObjectId } from 'mongodb';

interface Post {
  _id: ObjectId;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    picture: string;
  };
  ogImage: {
    url: string;
  };
  content: string;
  slug: string;
}

export async function getPostSlugs() {
  const client = await clientPromise;
  const db = client.db("CMS");
  const posts = await db.collection('Posts').find({}, { projection: { slug: 1 } }).toArray();
  return posts.map(post => post.slug);
}

export async function getPostBySlug(slug: string) {
  const client = await clientPromise;
  const db = client.db("CMS");
  const post = await db.collection('Posts').findOne({ slug });
  console.log(post);
  if (!post) {
    throw new Error(`No post found for slug: ${slug}`);
  }
  return post;
}

export async function getAllPosts(): Promise<Post[]> {
  const client = await clientPromise;
  const db = client.db("CMS");
  const posts = await db.collection('Posts').find({}).sort({ date: -1 }).toArray();
  
  // Log raw posts from the database
  console.log('Raw posts from the database:', posts);
  
  const transformedPosts = posts.map(post => ({
    _id: post._id,
    title: post.title,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    date: post.date,
    author: post.author,
    ogImage: post.ogImage,
    content: post.content,
    slug: post.slug,
  }));
  
  // Log transformed posts
  console.log('Transformed posts:', transformedPosts);
  
  return transformedPosts;
}


