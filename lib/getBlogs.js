// app/lib/getBlogs.js
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export function getAllBlogs(){
    const contentDir = path.join(process.cwd(), "content");
    const files = fs.readdirSync(contentDir);

    const blogs = files.map((filename) => {
        const filePath = path.join(contentDir, filename);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);
        return {
            ...data,
            content: content
        };
    });

    // Sort blogs by date descending
    return blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
}
