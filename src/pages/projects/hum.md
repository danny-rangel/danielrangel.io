---
slug: "/hum"
title: "Hum"
date: "2019-03-06"
description: "React, Typescript, Go, PostgreSQL, Redis, AWS, CSS, Docker"
---

---

Hum is a social media app that allows users to post "hums", or text posts limited to 50 characters. Basically is a twitter clone, but with more of a limit on characters.

Hum has all the functionality of a regular social media app, including creating a profile, posting hums, deleting, following other users, liking other users' hums, etc.

The frontend was written in Typescript and built using React, using React Hooks for the most part as opposed to class based components. I also wrote all of the CSS from scratch, in the form of styled components, as opposed to using a UI library like I have for other projects.

Building out the backend was a new experience for me. I've built backends using Node.js for the majority of my projects, but decided to build the backend entirely in Go! It was fun learning the language and seeing the similarities/differences between something like Go vs Node. I used Postgres for a main database and ended up using Redis for storing user sessions. Also used an S3 bucket to store user profile images.

The application is running in a Docker container on an EC2 instance. I also used AWS Route53 for DNS configuration with an AWS Classic Load Balancer that sits in front of the EC2 instance.

<div 
    style=
    "overflow: auto; 
    -webkit-overflow-scrolling: touch; 
    width: 100%;
    height: 650px;
    border-radius: 4px;"
>
        <iframe style="
            width: 100%;
            height: 600px;
            border-radius: 4px;
            border: none;"
            src="https://www.thehumapp.com/#/danny">
        </iframe>
</div>

---

## [hum.com](https://www.thehumapp.com/#/danny)

## [Code](https://github.com/danny-rangel/hum)
