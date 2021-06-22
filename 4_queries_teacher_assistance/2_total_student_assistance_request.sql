SELECT students.name AS name, COUNT(assistance_requests.*) AS total_assistances
FROM assistance_requests
INNER JOIN students ON students.id = student_id
WHERE name = 'Elliot Dickinson'
GROUP BY name;