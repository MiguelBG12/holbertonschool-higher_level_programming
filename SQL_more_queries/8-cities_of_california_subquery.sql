-- Script to list all California cities found in the database hbtn_0d_usa.
SELECT id, name FROM cities
WHERE state_id = (
	SELECT id
	FROM states
	WHERE name = 'California')
-- Script to sort ascending
ORDER BY id ASC;
