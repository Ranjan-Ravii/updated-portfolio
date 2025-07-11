import { text } from "framer-motion/client";

// BlogsData.js (create this file in your Blogs folder)
export const blogs = [
    {
        id: 0,
        title: "Understanding React Hooks",
        date: "March 15, 2024",
        description: "A comprehensive guide to React Hooks and their practical applications in modern web development.",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
        category: "React",
        content: [
            {
                type: "paragraph",
                text: "React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class component. They have revolutionized how we build React applications, making our code more concise and readable."
            },
            {
                type: "heading",
                text: "Why Use React Hooks?"
            },
            {
                type: "paragraph",
                text: "Hooks solve many problems that developers faced with class components. They allow you to reuse stateful logic between components, split complex components into smaller functions, and use React features without classes."
            },
            {
                type: "list",
                items: [
                    "No more complex lifecycle methods",
                    "Easier state management",
                    "Better code organization",
                    "More reusable logic"
                ]
            },
            {
                type: "heading",
                text: "Common React Hooks"
            },
            {
                type: "paragraph",
                text: "The most commonly used hooks are useState and useEffect. useState allows functional components to have state, while useEffect handles side effects like data fetching, subscriptions, or DOM manipulations."
            },
            {
                type: "code",
                language: "javascript",
                text: `import React, { useState, useEffect } from 'react';
  
  function ExampleComponent() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      document.title = \`You clicked \${count} times\`;
      
      // Cleanup function (equivalent to componentWillUnmount)
      return () => {
        document.title = 'React App';
      };
    }, [count]); // Only re-run if count changes
    
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }`
            },
            {
                type: "conclusion",
                text: "React Hooks have transformed how we build React applications, making our code more maintainable and easier to understand. As you get more comfortable with Hooks, you'll find yourself writing cleaner, more efficient React code."
            }
        ]
    },
    {
        id: 1,
        title: "Mastering Tailwind CSS",
        date: "March 10, 2024",
        description: "Deep dive into Tailwind CSS utility-first approach and best practices for responsive design.",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
        category: "CSS",
        content: [
            { type: "heading", text: "A Beginner's Guide to Tailwind CSS: From Zero to Confident" },
            { type: "paragraph", text: "If you're new to web development or just starting to explore modern CSS frameworks, Tailwind CSS is a name you'll hear often. It's a powerful, flexible, and beginner-friendly way to style your websites—without ever writing custom CSS. Here's everything you need to know to get started, from zero knowledge up to an intermediate understanding." },
            { type: "heading", text: "What is Tailwind CSS?" },
            { type: "paragraph", text: "Tailwind CSS is a utility-first CSS framework. Instead of giving you pre-built components ('Button' or 'Card'), it provides hundreds of small, single-purpose classes—like bg-blue-500 for background color, p-4 for padding, or text-center for text alignment. You mix and match these classes directly in your HTML to create any design you want, with total control and no need to write custom CSS files." },
            { type: "heading", text: "Why Use Tailwind CSS?" },
            { type: "list", items: [
                "No Custom CSS Needed: Style your site by adding classes to HTML elements—no more endless CSS files.",
                "Fast Prototyping: Quickly build and change layouts without switching between HTML and CSS.",
                "Responsive by Default: Built-in tools make it easy to design for mobile, tablet, and desktop.",
                "Consistent Design: Utility classes promote a unified look and feel across your site.",
                "Easy to Learn: You don't need deep CSS knowledge to get started, but knowing the basics helps."
            ] },
            { type: "heading", text: "How to Get Started" },
            { type: "paragraph", text: "1. Quick Start with CDN (for learning and prototyping): Just add this to your HTML <head> and you can use Tailwind classes in your HTML right away." },
            { type: "code", language: "html", text: '<link href="https://cdn.tailwindcss.com" rel="stylesheet">' },
            { type: "paragraph", text: "2. Full Installation (for real projects): Install via npm, configure your tailwind.config.js, import Tailwind in your CSS, and build your CSS using Tailwind's CLI or your build tool." },
            { type: "code", language: "bash", text: 'npm install tailwindcss\nnpx tailwindcss init' },
            { type: "code", language: "css", text: '@tailwind base;\n@tailwind components;\n@tailwind utilities;' },
            { type: "heading", text: "Core Concepts and Examples" },
            { type: "table", headers: ["Concept", "Example Class(es)", "What It Does"], rows: [
                ["Colors", "bg-blue-500 text-white", "Blue background, white text"],
                ["Spacing", "p-4 m-2", "Padding 1rem, margin 0.5rem"],
                ["Typography", "text-lg font-bold italic", "Large, bold, italic text"],
                ["Layout", "flex justify-center items-center", "Flexbox, centered content"],
                ["Responsive", "md:text-lg lg:p-8", "Larger text on medium screens, more padding on large screens"],
                ["Effects", "shadow-lg rounded", "Large shadow, rounded corners"]
            ] },
            { type: "heading", text: "Example: A Simple Button" },
            { type: "code", language: "html", text: '<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">\n  Click Me\n</button>' },
            { type: "paragraph", text: "This button is blue, turns darker on hover, has white bold text, padding, and rounded corners." },
            { type: "heading", text: "Responsive Design Made Easy" },
            { type: "paragraph", text: "Tailwind makes mobile-friendly design simple. Just prefix classes with breakpoints: sm: for small screens, md: for medium, lg: for large, xl: for extra large." },
            { type: "code", language: "html", text: '<p class="text-base sm:text-lg md:text-xl lg:text-2xl">\n  Responsive Text\n</p>' },
            { type: "paragraph", text: "This text grows larger as the screen size increases." },
            { type: "heading", text: "Customization and Configuration" },
            { type: "list", items: [
                "Add or change colors",
                "Set custom font sizes",
                "Enable/disable features",
                "Add plugins for extra functionality"
            ] },
            { type: "heading", text: "Best Practices and Tips" },
            { type: "list", items: [
                "Use Editor Plugins: Tools like Tailwind CSS IntelliSense for VS Code help you autocomplete class names.",
                "Purge Unused CSS: Tailwind can remove unused styles for smaller, faster websites.",
                "Practice by Building: Try recreating simple layouts or components using only Tailwind classes.",
                "Consult the Docs: The official Tailwind documentation (https://tailwindcss.com/docs) is clear and full of examples."
            ] },
            { type: "heading", text: "Final Thoughts" },
            { type: "paragraph", text: "Tailwind CSS is a game-changer for web design, making it fast, flexible, and fun to build beautiful, responsive websites. Whether you're a beginner or moving towards intermediate skills, Tailwind's utility-first approach keeps your workflow simple and your designs consistent. Dive in, experiment, and you'll soon wonder how you ever built websites without it." }
        ]
    },
    {
        id: 2,
        title: "Web Performance Optimization",
        date: "March 5, 2024",
        description: "Essential techniques to improve your website's loading speed and overall performance.",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
        category: "Performance",
        content: [
            { type: "heading", text: "Web Performance Optimization: Why Speed Matters and How to Achieve It" },
            { type: "paragraph", text: "In the digital world, web performance optimization (WPO) is not just a technical concern—it's a core business strategy. A fast, responsive website leads to higher user satisfaction, lower bounce rates, improved conversions, and even better search engine rankings. Let's explore what web performance optimization is, why it's critical, and the proven strategies and tools you can use to make your site lightning-fast." },
            { type: "heading", text: "What is Web Performance Optimization?" },
            { type: "paragraph", text: "Web performance optimization is the process of improving the speed and responsiveness of a website across devices. This means reducing page load times, minimizing server response delays, streamlining resource delivery, and ensuring smooth functionality for both desktop and mobile users. An optimized website loads and becomes interactive quickly, providing a seamless experience that keeps visitors engaged and more likely to convert." },
            { type: "heading", text: "Why Web Performance Matters" },
            { type: "list", items: [
                "User Experience: Slow websites frustrate users. Studies show that even a one-second delay can drop conversions by up to 10% and increase bounce rates significantly.",
                "Business Impact: Faster sites see higher sales, more repeat visitors, and improved brand reputation. For example, optimizing load times by just one second can boost conversion rates by up to 20% for e-commerce brands.",
                "SEO Benefits: Google and other search engines prioritize fast-loading sites, so optimization directly improves your search rankings and organic traffic.",
                "Mobile Usage: With most web traffic now on mobile, performance optimization ensures your site remains accessible and competitive across all devices."
            ] },
            { type: "heading", text: "Proven Strategies for Web Performance Optimization" },
            { type: "paragraph", text: "Here are the most effective techniques used by leading companies and recommended by experts:" },
            { type: "list", items: [
                "Optimize Images: Compress images and use modern formats like WebP to reduce file size without sacrificing quality. Lazy load offscreen images to speed up initial page rendering.",
                "Minify and Combine Files: Remove unnecessary characters from HTML, CSS, and JavaScript, and combine files to reduce the number of HTTP requests.",
                "Leverage Browser Caching: Store static resources in users' browsers so returning visitors experience faster load times.",
                "Use Content Delivery Networks (CDNs): CDNs distribute your content across global servers, reducing latency and ensuring users get data from the closest location.",
                "Optimize Code Execution: Streamline database queries, prioritize critical content, and defer non-essential scripts to speed up rendering.",
                "Enable Compression: Use Gzip or Brotli to compress text-based resources, making data transfer faster.",
                "Minimize Redirects: Reduce unnecessary redirects, as each one adds delay to page loading.",
                "Optimize Third-Party Scripts and Plugins: Remove unused plugins and scripts, and audit third-party integrations regularly to avoid performance bottlenecks.",
                "Monitor and Test Performance: Continuously track site speed and user experience with tools and real-user metrics, making iterative improvements."
            ] },
            { type: "heading", text: "Real-World Success Stories" },
            { type: "list", items: [
                "Staples: Refactoring CSS and JavaScript reduced homepage load time by one second, increasing conversions by 10%.",
                "Zitmaxx Wonen: Achieving a perfect PageSpeed score and reducing load time to under four seconds led to a 50% increase in mobile conversions.",
                "redBus: Improving interaction to next paint (INP) by 72% resulted in a 7% sales increase.",
                "Amazon, Netflix, Facebook: These tech giants leverage techniques like code-splitting, server-side rendering, and aggressive caching to deliver consistently fast experiences, resulting in higher user engagement and revenue."
            ] },
            { type: "heading", text: "Essential Tools for Web Performance Optimization" },
            { type: "list", items: [
                "Google PageSpeed Insights: Analyze and get suggestions for speed improvements. Core Web Vitals, actionable recommendations.",
                "GTmetrix: Detailed speed and structure analysis. File size breakdown, waterfall charts, monitoring.",
                "Pingdom: Real-time performance monitoring. Uptime tracking, instant alerts.",
                "Screaming Frog: Technical SEO and performance audits. Find broken links, analyze redirects and duplicate content.",
                "Optimizely: A/B testing and site experiments. Test variations to measure performance impact.",
                "Contentsquare: User behavior analytics. Heatmaps, session replays, conversion insights."
            ] },
            { type: "heading", text: "Conclusion" },
            { type: "paragraph", text: "Web performance optimization is a continuous process—not a one-time fix. By adopting these strategies and leveraging the right tools, you can create a website that delights users, ranks higher in search results, and drives measurable business growth. In today's fast-paced digital landscape, speed isn't just a feature; it's a fundamental requirement for success." }
        ]
    },
    {
        id: 3,
        title: "Understanding Access Token and Refresh Token",
        date: "july 07, 2025",
        description: "A Method adopted for avoiding the frequent or multiple authentication while browsing the website.",
        readTime: "6 min read",
        image: "/accesstoken-displayImage.png",
        category: "Performance",
        content: [
            {type: "paragraph", text: "Access tokens and refresh tokens are both authentication parameters used in OAuth 2.0 and OpenID Connect (OIDC)—which are popular protocols and standards for secure authentication. These tokens help identify and authorize users or services when interacting with APIs or servers."},
            {type : "paragraph", text: "Access Token: An access token is a short-lived credential that is used to authenticate a user or services on a server. It typically has a limited lifespan (e.g., minutes or hours) and is included in API requests to authorize the user to perform actions on the server."},
            {type : "paragraph" , text: "Refresh Token: A refresh token is a long-lived credential used to obtain a new access token once the original one expires. The refresh token is securely stored and can be used by the client to request a new access token without requiring the user to log in again."},
            {type: "heading", text : "How access token and refresh token works?"},
            {type: "paragraph", text: "Now let’s take a scenario where the user logins, and go step by step to understand the whole concept."},
            {
                type: "subheading", text : "Step 1. User login"
            },
            {
                type: "paragraph", 
                text : "The user enters the credentials (say, email, password) through the frontend, the frontend sends them to backend."
            },
            {
                type : "subheading", 
                text: "Step 2. Server verifies and responds with tokens"
            },
            {
                type: "paragraph", 
                text : "Once the credentials reach the server, it verifies them and generates the access and refresh tokens. Both tokens are sent to the frontend/client. Again, the access token is short-lived and the refresh token is comparatively long-lived, though both are relative to the cases in which they are being used."
            },
            {
                type : "subheading", 
                text : "Step 3: Client stores the tokens"
            },
            {
                type: "paragraph",
                text : "The responded tokens (from backend) are now stored at the client side. The access token in memory (RAM) or local storage (less secure), and the refresh token in a secure HTTP-only cookie (best practice)."
            }, 
            {
                type: "subheading",
                text : "Step 4. Client accesses a protected resource"
            },
            {
                type: "paragraph",
                text : "Till here, the user is able to access the data. Every time the client wants to access data, the backend checks: is the access token valid? Is it expired? If yes, then well and good. If it is expired, then — step 5."
            },
            {
                type: "subheading",
                text : "Step 5. Access token expires"
            },
            {
                type: "paragraph",
                text : "After the access token times out, the access token expires. The user tries to access the API again and gets a 401 Unauthorized error. Now the frontend automatically tries to refresh the token."
            },
            {
                type: "subheading   ",
                text : "Step 6. Backend validates the refresh token"
            },
            {
                type: "paragraph",
                text : "If the refresh token is still valid: The server issues a new access token. The frontend stores this new token and continues the session without logging in again And if the refresh token is expired or invalid: The user must log in again."
            },
            {
                type : "subheading",
                text  : "Here's a tabular comparison between Access Token and Refresh Token:"
            },
            {
                type : "image", 
                src : "../public/accesstoken-refreshtoken-tabular.png",
                alt : "tublular explanation"
            },
            {
                type :"subheading",
                text: "conclusion"
            },
            {
                type : "paragraph",
                text : "When a user logs in, the backend sends an access token (short-lived) and a refresh token (long-lived). The frontend uses the access token for API requests and automatically refreshes it using the refresh token when it expires. If the refresh token is also invalid or expired, the user is logged out and redirected to login."
            }
        ]
    },
//     {
//         id: 2,
//         title: "Web Performance Optimization",
//         date: "March 5, 2024",
//         description: "Essential techniques to improve your website's loading speed and overall performance.",
//         readTime: "6 min read",
//         image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
//         category: "Performance",
//         content: [
//             {
//                 type: "paragraph",
//                 text: "Website performance directly impacts user experience and conversion rates. Research shows that users abandon sites that take more than 3 seconds to load, making performance optimization a critical aspect of web development."
//             },
//             {
//                 type: "heading",
//                 text: "Core Web Vitals"
//             },
//             {
//                 type: "paragraph",
//                 text: "Google's Core Web Vitals are a set of metrics that measure user experience on the web. They focus on loading performance (LCP), interactivity (FID), and visual stability (CLS)."
//             },
//             {
//                 type: "heading",
//                 text: "Image Optimization"
//             },
//             {
//                 type: "paragraph",
//                 text: "Images often account for the largest portion of a page's weight. Properly optimizing images can dramatically improve load times."
//             },
//             {
//                 type: "list",
//                 items: [
//                     "Use modern formats like WebP or AVIF",
//                     "Implement responsive images with srcset",
//                     "Lazy load images below the fold",
//                     "Appropriately size images for their display dimensions"
//                 ]
//             },
//             {
//                 type: "heading",
//                 text: "Code Splitting and Lazy Loading"
//             },
//             {
//                 type: "paragraph",
//                 text: "Modern JavaScript frameworks support code splitting, allowing you to break your application into smaller chunks that load on demand."
//             },
//             {
//                 type: "code",
//                 language: "javascript",
//                 text: `// Instead of importing directly
//   // import LargeComponent from './LargeComponent';
  
//   // Use dynamic import for code splitting
//   import React, { lazy, Suspense } from 'react';
  
//   const LargeComponent = lazy(() => import('./LargeComponent'));
  
//   function MyComponent() {
//     return (
//       <Suspense fallback={<div>Loading...</div>}>
//         <LargeComponent />
//       </Suspense>
//     );
//   }`
//             },
//             {
//                 type: "conclusion",
//                 text: "Performance optimization is an ongoing process rather than a one-time task. Regularly measuring and improving your site's performance will lead to better user experience, higher conversion rates, and improved search engine rankings."
//             }
//         ]
//     }
];