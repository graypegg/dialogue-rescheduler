class CreateAppointments < ActiveRecord::Migration[8.1]
  def change
    create_table :appointments do |t|
      t.string :topic
      t.datetime :start
      t.datetime :end

      t.timestamps
    end
  end
end
