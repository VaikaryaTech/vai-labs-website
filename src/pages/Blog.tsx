import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "The Accelerated Trajectory of Enterprise AI",
      excerpt: "The notion of a future AI revolution is obsolete; the revolution is a present, unfolding reality. AI is transitioning from a human augmentation tool to a co-decision maker.",
      author: "VAI LABS Team",
      date: "Dec 10, 2025",
      readTime: "12 min read",
      category: "AI Trends",
      slug: "/blog/enterprise-ai-trajectory",
      featured: true
    },
    {
      title: "Implementing Secure GenAI: A Comprehensive Guide",
      excerpt: "Learn best practices for deploying GenAI solutions while maintaining enterprise security and compliance standards.",
      author: "Security Team",
      date: "Jan 10, 2025",
      readTime: "8 min read",
      category: "Security",
      slug: null
    },
    {
      title: "How RAG Technology is Transforming Document Intelligence",
      excerpt: "Deep dive into Retrieval-Augmented Generation and its applications in enterprise knowledge management.",
      author: "AI Research Team",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      category: "Technology",
      slug: null
    },
    {
      title: "Case Study: Reducing Compliance Time by 70% with AI",
      excerpt: "Real-world example of how a financial institution streamlined regulatory compliance using KOGNIX.",
      author: "Product Team",
      date: "Dec 28, 2024",
      readTime: "7 min read",
      category: "Case Study",
      slug: null
    },
    {
      title: "Building Trust in AI: The Importance of Grounded Responses",
      excerpt: "Why hallucination-free AI responses are crucial for enterprise applications and how to achieve them.",
      author: "AI Research Team",
      date: "Dec 20, 2024",
      readTime: "5 min read",
      category: "Best Practices",
      slug: null
    },
    {
      title: "The ROI of Enterprise GenAI Implementation",
      excerpt: "Quantifying the business impact of GenAI adoption across different industries and use cases.",
      author: "Business Team",
      date: "Dec 15, 2024",
      readTime: "6 min read",
      category: "Business",
      slug: null
    }
  ];

  const featuredPost = posts.find(p => p.featured);
  const otherPosts = posts.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(260_60%_25%/0.2),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Insights, updates, and best practices from the VAI LABS team
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <Link to={featuredPost.slug || "#"}>
                <Card className="p-8 md:p-12 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-glow-primary bg-gradient-to-br from-card to-primary/5">
                  <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-4">
                    Featured
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-muted-foreground text-lg mb-6 max-w-3xl">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-12 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 max-w-7xl mx-auto">More Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {otherPosts.map((post, index) => (
              <Card key={index} className="p-6 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow-primary cursor-pointer">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                  {post.category}
                </div>
                
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border/50">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
