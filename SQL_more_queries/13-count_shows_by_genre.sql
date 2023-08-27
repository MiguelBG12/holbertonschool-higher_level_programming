-- Script to select two columns and give them aliases
SELECT tv_genres.name AS genre, COUNT(tv_show_genres.show_id) AS number_of_shows
-- Script to set the parent table from which to take data
FROM tv_genres
-- Script to a inner join between the tables
INNER JOIN tv_show_genres ON tv_genres.id = tv_show_genres.genre_id
-- Script to group the results by the value id column in the tv_genres table
GROUP BY tv_genres.id
-- Script to sort in descending order according to the number of associated programs
ORDER BY number_of_shows DESC;
