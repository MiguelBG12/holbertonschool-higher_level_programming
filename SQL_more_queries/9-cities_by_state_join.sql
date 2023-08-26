-- Script to select three columns from two different tables.
SELECT cities.id, cities.name, states.name FROM cities
-- Script to join table 'cities' with table 'states' in ascending order.
INNER JOIN states ON cities.state_id = states.id ORDER BY cities.id ASC;
