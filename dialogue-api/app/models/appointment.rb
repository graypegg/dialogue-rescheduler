class Appointment < ApplicationRecord
  has_many :schedulings
  has_many :users, through: :schedulings
  has_many :clinicians, through: :schedulings
  has
end
