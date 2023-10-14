-- Script to select information of two tables and names them using aliases
SELECT tv_shows.title AS title, tv_show_genres.genre_id  AS genre_id
-- Script to et the parent table from which to take data
FROM tv_shows
-- Script to perform a left join operation between the tables that meet the specified condition
LEFT JOIN tv_show_genres ON tv_shows.id = tv_show_genres.show_id
-- Script to sort results in ascending order by title then by genre
ORDER BY title, genre_id ASC;
