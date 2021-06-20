-- 182. Duplicate Emails [Easy]
-- https://leetcode.com/problems/duplicate-emails/

# Write your MySQL query statement below
SELECT Email FROM Person
GROUP BY Email
HAVING COUNT(Email) > 1