class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :player
  has_many :votes, through: :user

  validates :user_id, presence: true
  validates :player_id, presence: true
  validates :body, presence: true
end
