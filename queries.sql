SELECT rush_attempt, rusher_player_id, yards_gained, ydstogo
FROM plays
WHERE rush_attempt = TRUE;
Select rush_attempt, sum(yards_gained) as total_yards, rusher_player_id, rusher_player_name
FROM plays
where rush_attempt = TRUE
group by rusher_player_id
order by total_yards desc;
SELECT avg(yards_gained) as average_yards, ydstogo
FROM plays
WHERE rush_attempt = TRUE
group by ydstogo
order by average_yards desc;