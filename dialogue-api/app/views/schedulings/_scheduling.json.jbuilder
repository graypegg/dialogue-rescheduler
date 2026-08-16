json.(scheduling, :id, :is_canceled)
json.user do
  json.partial! 'users/user', user: scheduling.user
end
json.clinician do
  json.name scheduling.clinician.name
end
json.appointment do
  json.topic scheduling.appointment.topic
  json.start scheduling.appointment.start
  json.end scheduling.appointment.end
end