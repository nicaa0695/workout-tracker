class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :sets, :reps, :workout_id, :created_at
  belongs_to :workout
end
