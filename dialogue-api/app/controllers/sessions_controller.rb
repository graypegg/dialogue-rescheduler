class SessionsController < ApplicationController
  allow_unauthenticated_access only: %i[ show create ]
  rate_limit to: 10, within: 3.minutes, only: :create, with: -> { redirect_to new_session_path, alert: "Try again later." }

  def show
    if authenticated?
      render json: Current.user
    else
      render json: {}, status: 401
    end
  end

  def create
    if user = User.authenticate_by(params.permit(:user_name, :password))
      start_new_session_for user
      render json: user
    else
      render json: { error: "Username or password incorrect" }, status: 401
    end
  end

  def destroy
    terminate_session
    render json: { error: false }
  end
end
