-- Script to select two columns to display results using aliases.
SELECT tv_shows.title AS title, tv_show_genres.genre_id AS genre_id
-- Script to set the main table from which data will be selected
FROM tv_shows
-- Script to join tables
INNER JOIN tv_show_genres ON tv_shows.id = tv_show_genres.show_id
-- Script to sort results in ascending order, by title then by genre
ORDER BY title, genre_id ASC;
