class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionView::Rendering
  include Authentication
end
