SELECT AVG(completed_at - started_at) as average_assistance_request_duration
FROM assistance_requests
WHERE completed_at IS NOT NULL;
