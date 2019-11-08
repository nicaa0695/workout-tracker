class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :date, :training, :mood, :length, :created_at
  has_many :exercises
end
