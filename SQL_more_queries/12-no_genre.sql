-- Script to select two columns and give them aliases
SELECT tv_shows.title AS title, tv_show_genres.genre_id AS genre_id
-- Script to set the parent table from which to take data
FROM tv_shows
-- Script to perform a left join operation between the tables
LEFT JOIN tv_show_genres ON tv_shows.id = tv_show_genres.show_id
-- Script to set a condition to filter the results after of the join, only rows where value 'genre_id' column is null will be include.
WHERE genre_id IS NULL
-- Script to sort results in ascending order, by title then by genre
ORDER BY title, genre_id ASC;
