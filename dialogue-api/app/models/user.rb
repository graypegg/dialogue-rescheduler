class User < ApplicationRecord
  has_secure_password
  has_many :sessions, dependent: :destroy
  has_many :schedulings
  has_many :appointments, through: :schedulings
  has_many :clinicians, through: :schedulings
  validates :user_name, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, presence: true, on: :create

  after_create_commit :assign_first_clinician

  normalizes :user_name, with: ->(e) { e.strip.downcase }

  def assign_first_clinician
    clinician = Clinician.create(name: Faker::Name.unique.name)
    appointment = Appointment.create(topic: "Consultation", start: 5.days.from_now, end: 5.days.from_now + 30.minutes)
    Scheduling.create(clinician:, appointment:, user: self, is_canceled: true)
  end
end
