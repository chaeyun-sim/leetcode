# Write your MySQL query statement below
SELECT A.ID FROM WEATHER A, WEATHER B
WHERE DATEDIFF(A.RECORDDATE, B.RECORDDATE) = 1 AND A.TEMPERATURE > B.TEMPERATURE