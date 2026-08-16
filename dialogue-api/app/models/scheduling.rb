class Scheduling < ApplicationRecord
  belongs_to :appointment
  belongs_to :clinician
  belongs_to :user
end
