class CreateClinicians < ActiveRecord::Migration[8.1]
  def change
    create_table :clinicians do |t|
      t.string :name

      t.timestamps
    end
  end
end
