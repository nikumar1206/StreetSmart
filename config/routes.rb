Rails.application.routes.draw do

  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :listings, only: [:index, :show]
    resources :saved_listings, only: [:index, :show, :destroy]

  end

end