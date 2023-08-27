-- Script to select the 'name' from 'tv_genres' table and sets the parent table from which to take data
SELECT tv_genres.name FROM tv_shows
-- Script to join the 'tv_shows' and 'tv_show_genres' tables, where the 'id' and 'show_id' columns have the same value
JOIN tv_show_genres ON tv_shows.id = tv_show_genres.show_id
-- Script to join between the 'tv_show_genres' and 'tv_genres' tables, where the 'genre_id' and 'id' columns have the same value
JOIN tv_genres ON tv_show_genres.genre_id = tv_genres.id
-- Script to set a condition to filter the results, only rows where value 'title' column is equal to 'Dexter' will be include.
WHERE tv_shows.title = 'Dexter'
-- Script to sort results in alphabetically (ascending) order by gender names
ORDER BY tv_genres.name ASC;
