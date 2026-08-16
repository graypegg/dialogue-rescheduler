class User < ApplicationRecord
  has_secure_password
  has_many :sessions, dependent: :destroy
  validates :user_name, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, presence: true, on: :create

  normalizes :user_name, with: ->(e) { e.strip.downcase }
end
