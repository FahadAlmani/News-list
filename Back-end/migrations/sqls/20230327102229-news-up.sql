CREATE TABLE IF NOT EXISTS news(
id SERIAL PRIMARY KEY,
title TEXT NOT NULL,
description TEXT NOT NULL,
URL TEXT UNIQUE NOT NULL,
ImageUrl TEXT NOT NULL,
content TEXT NOT NULL,
source TEXT NOT NULL,
publishedAT Date NOT NULL
);




 
  

  
