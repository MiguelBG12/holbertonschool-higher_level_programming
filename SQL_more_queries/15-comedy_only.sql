-- Script to select the 'title' column from 'tv_shows' table
SELECT tv_shows.title FROM tv_genres
-- Script to join the 'tv_genres' and 'tv_show_genres' tables, where 'id' and 'genre_id' columns have the same value 
JOIN tv_show_genres ON tv_genres.id = tv_show_genres.genre_id
-- Script to join the 'tv_show_genre' and 'tv_shows' tables, where the 'show_id' and 'id' columns have the same value
JOIN tv_shows ON tv_show_genres.show_id = tv_shows.id
-- Script to set a condition to filter the results, only rows where 'name' column is equal to 'Comedy' will be select
WHERE tv_genres.name = "Comedy"
-- Script to sort results in alphabetically (ascending) order show tv tittles
ORDER BY tv_shows.title ASC;
