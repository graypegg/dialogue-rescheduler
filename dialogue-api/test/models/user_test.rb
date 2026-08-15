require "test_helper"

class UserTest < ActiveSupport::TestCase
  test "downcases and strips user name" do
    user = User.new(user_name: " DOWNCASED ")
    assert_equal("downcased", user.user_name)
  end
end
