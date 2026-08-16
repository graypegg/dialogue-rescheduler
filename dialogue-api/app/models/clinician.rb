class Clinician < ApplicationRecord
  has_many :schedulings
  has_many :appointments, through: :schedulings
  has_many :users, through: :schedulings
end
