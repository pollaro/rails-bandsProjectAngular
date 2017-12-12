class Band < ApplicationRecord
    has_many :concerts, dependent: :destroy
    has_many :users
    has_many :wish, dependent: :destroy
    has_many :user_wishes, through: :wish, source: :user

    validates :name, presence: true, length: { minimum: 2 }, uniqueness: true
end
