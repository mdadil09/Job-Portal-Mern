# JOB PORTAL

## TECHNOLOGY USED

Reactjs
Nodejs
mongoDB
Expressjs
multer (for file uploading)
nodemailer (for sending otp to email id)
Axios (for api calling)
Redux toolkit (for state management)


# Overview 

## User Part

This is a full stack mern project where user can find jobs and apply to particular jobs and also they can withdraw their application whenever they want.
They can also view particular job details for more information.

## Admin Part

In this i added admin functionality also where admin can perform these operations add,search,update and delete and also view how many jobs they posted.

## Authentication and Authorization

In this project i implemented two step authentication for users where when user register they can receive otp on their email and also when they going to login when they entered correct email and password they will
receive otp on their registered email id and that otp is valid for 5 minutes when they enter they will access authorized pages and for admin there is simple password login. For hashing password i used bcryptjs.
