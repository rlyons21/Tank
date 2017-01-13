require 'test_helper'

class GalleryControllerTest < ActionController::TestCase
  test "should get gallery" do
    get :gallery
    assert_response :success
  end

end
