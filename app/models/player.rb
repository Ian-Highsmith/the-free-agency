# Include default player modules. Others available are:
# :birth_city, :birth_country, :team_id
class Player < ApplicationRecord
  has_many :stats
  validates_presence_of :first_name, :last_name, :avatar_url
  validates_presence_of :age, :height, :weight, :position
end