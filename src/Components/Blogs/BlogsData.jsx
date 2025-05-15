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
            {
                type: "paragraph",
                text: "Tailwind CSS has changed the way developers think about styling web applications. Its utility-first approach offers unprecedented flexibility and speed when building modern interfaces."
            },
            {
                type: "heading",
                text: "The Utility-First Approach"
            },
            {
                type: "paragraph",
                text: "Unlike traditional CSS frameworks that provide predefined components, Tailwind gives you low-level utility classes that let you build completely custom designs without leaving your HTML."
            },
            {
                type: "code",
                language: "html",
                text: `<!-- Traditional approach with custom CSS -->
  <div class="chat-notification">
    <div class="chat-notification-logo-wrapper">
      <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo">
    </div>
    <div class="chat-notification-content">
      <h4 class="chat-notification-title">ChitChat</h4>
      <p class="chat-notification-message">You have a new message!</p>
    </div>
  </div>
  
  <!-- With Tailwind CSS -->
  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
    <div class="flex-shrink-0">
      <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
    </div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-gray-500">You have a new message!</p>
    </div>
  </div>`
            },
            {
                type: "heading",
                text: "Responsive Design with Tailwind"
            },
            {
                type: "paragraph",
                text: "Tailwind makes responsive design incredibly intuitive with its responsive modifiers. Instead of writing media queries, you can use prefixes like sm:, md:, lg:, and xl: to apply styles at specific breakpoints."
            },
            {
                type: "list",
                items: [
                    "Mobile-first approach",
                    "Intuitive breakpoint prefixes",
                    "Consistent spacing system",
                    "Easy to customize breakpoints"
                ]
            },
            {
                type: "conclusion",
                text: "While Tailwind's utility-first approach might seem verbose at first, the productivity gains and maintainability benefits make it worth learning. As you become more familiar with the class names, you'll find yourself building interfaces faster than ever before."
            }
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
            {
                type: "paragraph",
                text: "Website performance directly impacts user experience and conversion rates. Research shows that users abandon sites that take more than 3 seconds to load, making performance optimization a critical aspect of web development."
            },
            {
                type: "heading",
                text: "Core Web Vitals"
            },
            {
                type: "paragraph",
                text: "Google's Core Web Vitals are a set of metrics that measure user experience on the web. They focus on loading performance (LCP), interactivity (FID), and visual stability (CLS)."
            },
            {
                type: "heading",
                text: "Image Optimization"
            },
            {
                type: "paragraph",
                text: "Images often account for the largest portion of a page's weight. Properly optimizing images can dramatically improve load times."
            },
            {
                type: "list",
                items: [
                    "Use modern formats like WebP or AVIF",
                    "Implement responsive images with srcset",
                    "Lazy load images below the fold",
                    "Appropriately size images for their display dimensions"
                ]
            },
            {
                type: "heading",
                text: "Code Splitting and Lazy Loading"
            },
            {
                type: "paragraph",
                text: "Modern JavaScript frameworks support code splitting, allowing you to break your application into smaller chunks that load on demand."
            },
            {
                type: "code",
                language: "javascript",
                text: `// Instead of importing directly
  // import LargeComponent from './LargeComponent';
  
  // Use dynamic import for code splitting
  import React, { lazy, Suspense } from 'react';
  
  const LargeComponent = lazy(() => import('./LargeComponent'));
  
  function MyComponent() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LargeComponent />
      </Suspense>
    );
  }`
            },
            {
                type: "conclusion",
                text: "Performance optimization is an ongoing process rather than a one-time task. Regularly measuring and improving your site's performance will lead to better user experience, higher conversion rates, and improved search engine rankings."
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
//     },
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