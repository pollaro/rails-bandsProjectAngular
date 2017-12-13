class Concert < ApplicationRecord
  belongs_to :band
  belongs_to :user
  has_many :attend, dependent: :destroy
  has_many :attendee, through: :attend, source: :user

  validates :date, :city, :band, presence: true, length: { minimum: 1 }, uniqueness: { case_sensitive: false }
end
