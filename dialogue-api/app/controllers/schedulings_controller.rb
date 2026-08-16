class SchedulingsController < ApplicationController
  def index
    @schedulings = Current.user.schedulings
  end
end
