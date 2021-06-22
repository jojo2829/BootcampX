SELECT teachers.name AS name, COUNT(assistance_requests.*) AS total_assistances
FROM assistance_requests
INNER JOIN teachers ON teachers.id = teacher_id
WHERE name = 'Waylon Boehm'
GROUP BY name;