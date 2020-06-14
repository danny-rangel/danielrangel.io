---
slug: "/songrequests"
title: "Song Requests"
date: "2019-03-07"
description: "React, Javascript, Apollo, Node, Express, GraphQL, Prisma, PostgreSQL, AWS RDS, Twitch API, Material UI, Styled Components, CSS, Jest, Enzyme, Sentry"
---

---

Song Requests is a Twitch extension I created for streamers on Twitch who perform music for their viewers. Features include personal song lists for streamers, live queue feed, and personal settings for added flexibility. Front end was written with React and Apollo Client was used for querying and data management. This was my first production app that uses GraphQL when querying or mutating data. Prisma was also used to connect the NodeJS server to a Postgres database provided by AWS RDS. Prisma is able to wrap the database and expose it as a GraphQL api so that I can also use GraphQL queries as such from the Node Server to the database.

I currently have over 40,000 downloads by users of the extension. However, I recently pulled the application from prod for a complete revamp to comply with new changes Twitch made in terms of design and their API. A newer version will hopefully be completed and released by me soon!

---

<div style="text-align: center; width: 100%;">
    <img 
        src="https://i.imgur.com/sUQy7O1.png" 
        alt="song requests preview" 
        style="width: 100%; max-width: 600px;border-radius: 4px;"
    >
</div>

## [Backend Code](https://github.com/danny-rangel/song-requests-backend)

## [Frontend Code](https://github.com/danny-rangel/song-requests-frontend)
