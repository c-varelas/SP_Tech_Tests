SELECT TOP 100
FROM events AS e
JOIN contexts AS c
ON e.id = c.id
