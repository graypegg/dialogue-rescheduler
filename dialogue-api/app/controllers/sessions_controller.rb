class SessionsController < ApplicationController
  allow_unauthenticated_access only: %i[ show create ]

  def show
    if authenticated?
      @user = Current.user
    else
      render json: { error: 'Not authenticated' }, status: 401
    end
  end

  def create
    if @user = User.authenticate_by(params.permit(:user_name, :password))
      start_new_session_for @user
    else
      render json: { error: "Username or password incorrect" }, status: 401
    end
  end

  def destroy
    terminate_session
    render json: { }
  end
end
