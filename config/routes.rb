Rails.application.routes.draw do

  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:index, :show, :create, :update, :destroy]
    resources :saved_listings, only: [:index, :show, :destroy, :create]
    resources :users, only: [:create, :show, :update] 
  end

end