import mongoose from 'mongoose';

const MONGO_URI = process.env.NEXT_PUBLIC_MONGO_URI || '';

const ArticleSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
});

export const Article = mongoose.models.Article || mongoose.model('Article', ArticleSchema);

export async function connectDB() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(MONGO_URI, { dbName: "ai-blog" });
}
