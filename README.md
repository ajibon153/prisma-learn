<!--

## Source

Youtube : https://www.youtube.com/watch?v=RebA5J-rlwg
Channel : devsimplified
title   : Learn Prisma In 60 Minutes

 -->

## STEPS

# Initial package.json

npm init -y

# install library

npm i --save-dev prisma typescript ts-node @types/node nodemon

# Set the tsconfig.json

{
"compilerOptions": {
"sourceMap": true,
"outDir": "dist",
"strict": true,
"lib": ["ESNext"],
"esModuleInterop": true
}
}

# DB Init

npx prisma init --datasource-provider postgresql

# Prisma format Build in

npx prisma format

# Set env

connect DATABASE_URL to postgresql
and initialize the model

# Migrate Schema

npx prisma migrate dev --name init

# prisma/client

npm i @prisma/client
and then generate it
npx prisma generate

get the code and set on script.ts
