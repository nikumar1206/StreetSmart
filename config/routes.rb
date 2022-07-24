Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :show, :update] do
      resources :listings, only: [:index]
    end

    resource :session, only: [:create, :destroy]
    resources :listings, only: [:index, :show, :create, :update, :destroy]
    resources :saved_listings, only: [:index, :show, :destroy, :create]

  end

end