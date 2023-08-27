-- Script to select the 'tittle' field from 'tv_shows' table and 'name' field from 'tv_genres' table
SELECt tv_shows.title, tv_genres.name FROM tv_shows
-- Script to perform a left join operation between the tables, the condition is that the 'id' fields of both tables are the same
LEFT JOIN tv_show_genres ON tv_shows.id = tv_show_genres.show_id
-- Script to perform a left join operation between the tables, the condition is that the "genre_id" field of "tv_show_genres" matches the "id" field of "tv_genres".
LEFT JOIN tv_genres ON tv_show_genres.genre_id = tv_genres.id
-- Script to sort results ascending order by tittle and them genre name
ORDER BY tv_shows.title, tv_genres.name ASC;
