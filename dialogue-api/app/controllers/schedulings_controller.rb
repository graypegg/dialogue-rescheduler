class SchedulingsController < ApplicationController
  def index
    @schedulings = Current.user.schedulings.all
  end
end
