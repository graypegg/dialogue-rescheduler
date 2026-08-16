class CreateSchedulings < ActiveRecord::Migration[8.1]
  def change
    create_table :schedulings do |t|
      t.references :appointment, null: false, foreign_key: true
      t.references :clinician, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.boolean :is_canceled

      t.timestamps
    end
  end
end
