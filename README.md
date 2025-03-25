# Sym

Note: revisit when i can pay for apple developer program :D

Sync your music 
Api and other infrastructure modules needed to run sym's backend locally
Needs a bit of extra config if you wanted to host this as is - mainly around dozzle and nginx

## Purpose

- I need to sync a lot of music and would like a potentially easy way to (re)create playlists without much manual effort
- Enforce everything I learned mainly during internship

## Feature ideas

- Transfer playlists, etc between platforms
  - Build list of songs which don't exist on target platform
  - Build recommendation list out of it, that do exist?
- Download?
  - Otherwise, can just embed yt player based on saved identifier - song title/artist/whatever else
- Music player   
  - nice to have: gen ai shaders based on music 'mood' 
  - just to learn a bit about AI, and RAG stack, build a chat interface where you can ask for songs in your lib      
    based on some lyrics or humming a melody, etc
- Build playlists from random/combined list based on x,y,z 
- Social sign on ( AM, Spotify )
- Allow 3 "syncs" per user and then charge   
  - though, this is more just to enforce what i learned

## Concepts Tackled ( Rewrite this )

- git flow / agile-ish project mgmt?
- jwt authentication
- unit testing, e2e testing, load testing 
- monolithic architecture
- SPA practices
- REST API design 
- File uploads
- Message queues
- SQL
- Redis (caching)
- s3 (object store)
- Docker compose mgmt 
- Reverse proxying
- VPS security/hardening/deployments

## Tech Stack

- Bun.js / Nest.js
- PostgreSQL 
- Sqlite
- Minio (S3)
- RabbitMQ (~SQS)
- Resend (SMTP) (Don't want to self host atm)
- Docker
- Linux/VPS Mgmt (Deployment)
