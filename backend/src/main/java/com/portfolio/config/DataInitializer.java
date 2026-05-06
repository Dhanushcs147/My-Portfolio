package com.portfolio.config;

import com.portfolio.entity.BlogPost;
import com.portfolio.entity.Project;
import com.portfolio.repository.BlogPostRepository;
import com.portfolio.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private BlogPostRepository blogPostRepository;

    @Override
    public void run(String... args) throws Exception {
        // Initialize sample projects if none exist
        if (projectRepository.count() == 0) {
            createSampleProjects();
        }

        // Initialize sample blog posts if none exist
        if (blogPostRepository.count() == 0) {
            createSampleBlogPosts();
        }
    }

    private void createSampleProjects() {
        Project project1 = new Project();
        project1.setTitle("E-Commerce Platform");
        project1.setDescription("A full-stack e-commerce platform built with React and Node.js featuring user authentication, payment integration, and admin dashboard.");
        project1.setImageUrl("/images/project1.jpg");
        project1.setGithubUrl("https://github.com/yourusername/ecommerce-platform");
        project1.setLiveDemoUrl("https://your-ecommerce-demo.com");
        project1.setTechnologies("React, Node.js, MongoDB, Stripe API");
        project1.setCreatedAt(LocalDateTime.now().minusDays(30));
        project1.setUpdatedAt(LocalDateTime.now().minusDays(30));

        Project project2 = new Project();
        project2.setTitle("Task Management App");
        project2.setDescription("A collaborative task management application with real-time updates, team management, and project tracking capabilities.");
        project2.setImageUrl("/images/project2.jpg");
        project2.setGithubUrl("https://github.com/yourusername/task-manager");
        project2.setLiveDemoUrl("https://your-taskmanager-demo.com");
        project2.setTechnologies("Vue.js, Express.js, PostgreSQL, Socket.io");
        project2.setCreatedAt(LocalDateTime.now().minusDays(20));
        project2.setUpdatedAt(LocalDateTime.now().minusDays(20));

        Project project3 = new Project();
        project3.setTitle("Weather Dashboard");
        project3.setDescription("A responsive weather dashboard that displays current weather conditions and forecasts using multiple weather APIs.");
        project3.setImageUrl("/images/project3.jpg");
        project3.setGithubUrl("https://github.com/yourusername/weather-dashboard");
        project3.setLiveDemoUrl("https://your-weather-demo.com");
        project3.setTechnologies("JavaScript, HTML5, CSS3, OpenWeatherMap API");
        project3.setCreatedAt(LocalDateTime.now().minusDays(10));
        project3.setUpdatedAt(LocalDateTime.now().minusDays(10));

        projectRepository.save(project1);
        projectRepository.save(project2);
        projectRepository.save(project3);

        System.out.println("Sample projects initialized!");
    }

    private void createSampleBlogPosts() {
        BlogPost post1 = new BlogPost();
        post1.setTitle("Getting Started with Web Development");
        post1.setContent("Web development has evolved significantly over the years. In this comprehensive guide, we'll explore the fundamental concepts and modern tools that every aspiring web developer should know. From HTML and CSS basics to advanced JavaScript frameworks, we'll cover everything you need to build modern, responsive websites.");
        post1.setExcerpt("A comprehensive guide to getting started with web development, covering essential concepts and modern tools.");
        post1.setImageUrl("/images/blog1.jpg");
        post1.setAuthor("Your Name");
        post1.setPublishedAt(LocalDateTime.now().minusDays(15));
        post1.setPublished(true);
        post1.setTags("web development, beginners, tutorial");
        post1.setReadTime(5);

        BlogPost post2 = new BlogPost();
        post2.setTitle("Building Responsive Websites with CSS Grid");
        post2.setContent("CSS Grid Layout is a powerful tool for creating responsive web designs. This article explores the fundamentals of CSS Grid, including grid containers, grid items, and various layout techniques. We'll also look at practical examples and best practices for implementing grid layouts in real-world projects.");
        post2.setExcerpt("Learn how to create responsive layouts using CSS Grid Layout with practical examples and best practices.");
        post2.setImageUrl("/images/blog2.jpg");
        post2.setAuthor("Your Name");
        post2.setPublishedAt(LocalDateTime.now().minusDays(10));
        post2.setPublished(true);
        post2.setTags("CSS, responsive design, grid layout");
        post2.setReadTime(7);

        BlogPost post3 = new BlogPost();
        post3.setTitle("JavaScript Best Practices for Modern Development");
        post3.setContent("Writing clean, maintainable JavaScript code is crucial for any project. This article covers essential best practices including code organization, error handling, performance optimization, and modern JavaScript features. We'll explore ES6+ features, async/await patterns, and testing strategies.");
        post3.setExcerpt("Essential JavaScript best practices for writing clean, maintainable, and performant code.");
        post3.setImageUrl("/images/blog3.jpg");
        post3.setAuthor("Your Name");
        post3.setPublishedAt(LocalDateTime.now().minusDays(5));
        post3.setPublished(true);
        post3.setTags("JavaScript, best practices, ES6, performance");
        post3.setReadTime(6);

        blogPostRepository.save(post1);
        blogPostRepository.save(post2);
        blogPostRepository.save(post3);

        System.out.println("Sample blog posts initialized!");
    }
}