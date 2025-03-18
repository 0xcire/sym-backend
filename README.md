# Sym

Sync your music 
Api and other infrastructure modules needed to run sym's backend locally
Needs a bit of extra config if you wanted to host this as is - mainly around dozzle and nginx
I use a private repo with a bit more security concerns

## Purpose

- I need to sync a lot of music and would like a potentially easy way to (re)create playlists without much manual effort
- Enforce everything I learned before, during, and after internship

## Feature ideas

- Transfer playlists, etc between platforms
  - Build list of songs which don't exist on target platform
  - Build recommendation list out of it, that do exist?
- Download?
- Music player   
  - nice to have: gen ai shaders based on music 'mood' 
- Build playlists from random/combined list based on x,y,z 
- Social sign on ( AM, Spotify )
- Allow 3 "syncs" per user and then charge   
  - though, this is more just to enforce what i learned

## Tech Stack

- Bun.js / Nest.js
- PostgreSQL 
- Sqlite
- Minio (S3)
- RabbitMQ (~SQS)
- Resend (SMTP) (Don't want to self host atm)
- Docker
- Linux/VPS Mgmt (Deployment)
